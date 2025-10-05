#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// SPA script for GitHub Pages
const spaScript = `  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // MIT License
    // https://github.com/rafgraph/spa-github-pages
    // This script checks to see if a redirect is present in the query string,
    // converts it back into the correct url and adds it to the
    // browser's history using window.history.replaceState(...),
    // which won't cause the browser to attempt to load the new url.
    // When the single page app is loaded further down in this file,
    // the correct url will be waiting in the browser's history for
    // the single page app to route accordingly.
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>`;

// Paths
const outDir = path.join(__dirname, '..', 'out');
const indexPath = path.join(outDir, 'index.html');
const notFoundPath = path.join(outDir, '404.html');
const public404Path = path.join(__dirname, '..', 'public', '404.html');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  console.error('Out directory does not exist. Please run "npm run build" first.');
  process.exit(1);
}

// Copy 404.html from public to out
if (fs.existsSync(public404Path)) {
  fs.copyFileSync(public404Path, notFoundPath);
  console.log('✅ Copied 404.html to out directory');
} else {
  console.error('❌ public/404.html not found');
  process.exit(1);
}

// Copy .nojekyll from public to out
const nojekyllPath = path.join(__dirname, '..', 'public', '.nojekyll');
const outNojekyllPath = path.join(outDir, '.nojekyll');
if (fs.existsSync(nojekyllPath)) {
  fs.copyFileSync(nojekyllPath, outNojekyllPath);
  console.log('✅ Copied .nojekyll to out directory');
}

// Add SPA script to index.html
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Replace </head> with script + </head>
  indexContent = indexContent.replace('</head>', `${spaScript}\n</head>`);
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Added SPA routing script to index.html');
} else {
  console.error('❌ out/index.html not found');
  process.exit(1);
}

console.log('🎉 SPA routing setup complete!');
