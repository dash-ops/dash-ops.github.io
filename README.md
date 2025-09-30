# DashOPS Documentation Website

This is the documentation website for DashOPS, built with Next.js, TypeScript, and shadcn/ui components.

## 🚀 Features

- **Next.js 15** with App Router and Static Export
- **TypeScript** for type safety
- **shadcn/ui** components (matching the main frontend)
- **Tailwind CSS** for styling
- **GitHub Pages** deployment
- **Responsive design** for all devices

## 📁 Project Structure

```
dash-ops-docs/
├── content/                 # Documentation content (migrated from dash-ops/docs)
│   ├── plugins/            # Plugin-specific documentation
│   ├── img/               # Images and assets
│   └── *.md              # Main documentation files
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── layout/      # Layout components
│   │   └── ui/          # shadcn/ui components
│   └── lib/             # Utility functions
├── .github/workflows/    # GitHub Actions for deployment
└── out/                 # Static export output (generated)
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run export` - Build and export static files
- `npm run lint` - Run ESLint

## 🌐 Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Build the project: `npm run build`
2. The static files will be generated in the `out/` directory
3. These files can be deployed to any static hosting service

## 🎨 Design System

This documentation uses the same design system as the main DashOPS frontend:

- **Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with neutral color scheme
- **Icons**: Lucide React
- **Typography**: System fonts with proper hierarchy

## 📝 Content Management

Documentation content is stored in the `content/` directory as Markdown files. The structure mirrors the original Jekyll setup for easy migration.

### Adding New Pages

1. Create a new `.md` file in the appropriate directory
2. Add the route to the navigation in `DocLayout.tsx`
3. The page will be automatically available

## 🔧 Configuration

- **Next.js**: Configured for static export with GitHub Pages compatibility
- **Base Path**: Set to `/dash-ops-docs` for GitHub Pages deployment
- **Images**: Optimized for static hosting
- **Routing**: File-based routing with automatic static generation

## 📚 Related Projects

- [DashOPS Main Repository](../dash-ops/) - The main application
- [DashOPS Frontend](../dash-ops/front/) - React frontend with same component library

## 🤝 Contributing

1. Make changes to documentation content in `content/`
2. Update navigation in `src/components/layout/DocLayout.tsx` if needed
3. Test locally with `npm run dev`
4. Push changes to trigger automatic deployment

## 📄 License

This documentation is part of the DashOPS project and follows the same license terms.