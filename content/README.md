# DashOps Documentation Content

This directory contains the documentation content in MDX format for easy maintenance and updates.

## 📁 Structure

```
content/
├── docs/              # Main documentation files
│   ├── getting-started/
│   │   ├── introduction.mdx
│   │   ├── installation.mdx
│   │   ├── configuration.mdx
│   │   ├── first-deploy.mdx
│   │   └── helm-deployment.mdx
│   ├── plugins/
│   │   ├── overview.mdx
│   │   ├── auth.mdx
│   │   ├── aws.mdx
│   │   ├── kubernetes.mdx
│   │   └── service-catalog.mdx
│   ├── api/
│   │   ├── introduction.mdx
│   │   ├── authentication.mdx
│   │   └── endpoints.mdx
│   └── developer-guide/
│       ├── backend-guide.mdx
│       ├── contributing.mdx
│       └── plugin-development.mdx
└── README.md          # This file
```

## 🚀 How to Edit Documentation

### 1. Edit MDX Files

Simply edit the `.mdx` files in the appropriate directory:

```bash
# Edit a file
vim content/docs/getting-started/installation.mdx

# Or use your favorite editor
code content/docs/getting-started/installation.mdx
```

### 2. MDX Syntax

MDX allows you to use both **Markdown** and **React components**:

#### Regular Markdown

```markdown
# Heading 1
## Heading 2

This is a paragraph with **bold** and *italic* text.

- List item 1
- List item 2

\`\`\`bash
npm install
\`\`\`
```

#### With React Components

```mdx
<Alert>
  <AlertDescription>
    This is an alert using shadcn/ui components!
  </AlertDescription>
</Alert>

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content with **markdown**!
  </CardContent>
</Card>
```

### 3. Available Components

All shadcn/ui components are available in MDX:

- `<Card>`, `<CardHeader>`, `<CardTitle>`, `<CardDescription>`, `<CardContent>`
- `<Alert>`, `<AlertDescription>`
- `<Badge>`
- `<Button>`
- `<Tabs>`, `<TabsList>`, `<TabsTrigger>`, `<TabsContent>`
- And more...

### 4. Hot Reload

The development server automatically reloads when you save changes:

```bash
npm run dev
# Make changes to any .mdx file
# Browser automatically refreshes!
```

## 📝 Guidelines

### Writing Style

- **Be concise**: Short paragraphs, clear language
- **Use examples**: Code blocks with syntax highlighting
- **Add visuals**: Use components for important notes
- **Link related docs**: Cross-reference other pages

### Code Blocks

Always specify the language for syntax highlighting:

\`\`\`bash
npm install
\`\`\`

\`\`\`yaml
config:
  port: 8080
\`\`\`

\`\`\`typescript
const example = "code"
\`\`\`

### Alerts and Warnings

Use alerts for important information:

```mdx
<Alert className="border-orange-200 bg-orange-50">
  <AlertDescription>
    ⚠️ **Warning**: Important notice here
  </AlertDescription>
</Alert>
```

## 🔄 Migration Strategy

### Current Status

✅ **Phase A**: React components (current implementation)
🔄 **Phase B**: Hybrid approach (React + MDX)
⏳ **Phase C**: Full MDX migration (future)

### How to Migrate

To migrate a section from React to MDX:

1. **Create MDX file**: `content/docs/{section}/{page}.mdx`
2. **Copy content**: Transfer from React component to MDX
3. **Test locally**: Ensure rendering works correctly
4. **Update imports**: Change section to use MDX
5. **Remove old component**: Delete React component file

### Example Migration

**Before (React):**
```typescript
// src/components/sections/ExampleSection.tsx
export function ExampleSection() {
  return <div>Content...</div>
}
```

**After (MDX):**
```mdx
// content/docs/example.mdx
# Example Section

Content with **markdown** and <Badge>components</Badge>!
```

**Import:**
```typescript
// src/app/docs/example/page.tsx
import Content from '@/content/docs/example.mdx'

export default function Page() {
  return <MDXContent><Content /></MDXContent>
}
```

## 🎯 Benefits of MDX

1. **Faster Updates**: Edit markdown directly without React knowledge
2. **Better Collaboration**: Non-developers can contribute to docs
3. **Version Control**: Clear diffs in Git
4. **Flexibility**: Use React components when needed
5. **Maintenance**: Much easier to keep docs up-to-date daily

## 📚 Resources

- [MDX Documentation](https://mdxjs.com/)
- [Next.js MDX Guide](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- [Remark Plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)
- [Rehype Plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md)

