import type { MDXComponents } from 'mdx/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReactNode } from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold tracking-tight mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold tracking-tight mt-4 mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-3 mb-2">{children}</h4>
    ),
    
    // Paragraphs and text
    p: ({ children }) => (
      <p className="text-muted-foreground leading-7 mb-4">{children}</p>
    ),
    
    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    
    // Code
    code: ({ children, className }) => {
      const isInline = !className
      if (isInline) {
        return (
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
        )
      }
      return (
        <code className={className as string}>{children}</code>
      )
    },
    pre: ({ children }) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
        {children}
      </blockquote>
    ),
    
    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:underline font-medium"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    
    // Table
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-muted">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="border-b">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left font-semibold text-sm">{children}</th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-sm text-muted-foreground">{children}</td>
    ),
    
    // Custom shadcn/ui components available in MDX
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Alert,
    AlertDescription,
    Badge,
    Button,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    
    ...components,
  }
}

