import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '',
  assetPrefix: '',
  distDir: 'out',
  skipTrailingSlashRedirect: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Enable hash routing for GitHub Pages
  experimental: {
    scrollRestoration: true,
    mdxRs: false, // IMPORTANTE: Desabilitar para usar plugins
  },
}

/** @type {import('remark-gfm').Options} */
const remarkGFMOptions = {
  singleTilde: false,
}

const withMDX = createMDX({
  options: {
    // Usar nomes de plugins como strings (compatível com Turbopack)
    remarkPlugins: [['remark-gfm', remarkGFMOptions]],
    rehypePlugins: [['rehype-highlight']],
  },
})

export default withMDX(nextConfig)
