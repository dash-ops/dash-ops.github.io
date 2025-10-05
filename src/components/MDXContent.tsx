"use client"

import { MDXProvider } from '@mdx-js/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReactNode } from 'react'

// Custom components for MDX
const components = {
  // Headings
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-4xl font-bold tracking-tight mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-3xl font-bold tracking-tight mt-6 mb-3">{children}</h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-2xl font-semibold tracking-tight mt-4 mb-2">{children}</h3>
  ),
  h4: ({ children }: { children: ReactNode }) => (
    <h4 className="text-xl font-semibold mt-3 mb-2">{children}</h4>
  ),
  
  // Paragraphs and text
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-muted-foreground leading-7 mb-4">{children}</p>
  ),
  
  // Lists
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="ml-4">{children}</li>
  ),
  
  // Code
  code: ({ children, className }: { children: ReactNode, className?: string }) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
      )
    }
    return (
      <code className={className}>{children}</code>
    )
  },
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  
  // Blockquote
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
      {children}
    </blockquote>
  ),
  
  // Links
  a: ({ href, children }: { href?: string, children: ReactNode }) => (
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
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: ReactNode }) => (
    <thead className="bg-muted">{children}</thead>
  ),
  tbody: ({ children }: { children: ReactNode }) => (
    <tbody className="divide-y">{children}</tbody>
  ),
  tr: ({ children }: { children: ReactNode }) => (
    <tr className="border-b">{children}</tr>
  ),
  th: ({ children }: { children: ReactNode }) => (
    <th className="px-4 py-2 text-left font-semibold text-sm">{children}</th>
  ),
  td: ({ children }: { children: ReactNode }) => (
    <td className="px-4 py-2 text-sm text-muted-foreground">{children}</td>
  ),
  
  // Custom shadcn/ui components
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
}

interface MDXContentProps {
  children: ReactNode
}

export function MDXContent({ children }: MDXContentProps) {
  return (
    <MDXProvider components={components}>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        {children}
      </div>
    </MDXProvider>
  )
}

