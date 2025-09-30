import { DocLayout } from '@/components/layout/DocLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Home() {
  return (
    <DocLayout 
      title="DashOPS Documentation"
      description="Cloud Operations Platform - Beta Documentation"
    >
      <div className="space-y-8">
        <div className="text-center py-8">
          <Badge variant="destructive" className="mb-4">Beta Software</Badge>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to DashOPS, a cloud operations platform designed to simplify infrastructure management for development teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🏁 Getting Started
              </CardTitle>
              <CardDescription>
                Set up DashOPS locally in 5 minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/getting-started">Start Here →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔌 Plugin Guides
              </CardTitle>
              <CardDescription>
                Configure AWS, Kubernetes, and Auth plugins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/plugins">View Plugins →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📖 API Reference
              </CardTitle>
              <CardDescription>
                Complete API documentation and examples
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/api-reference">API Docs →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">🚀 Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Plugin Documentation</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="/plugins/auth" className="text-blue-600 hover:underline">Auth Plugin</Link> - GitHub authentication setup</li>
                <li><Link href="/plugins/kubernetes" className="text-blue-600 hover:underline">Kubernetes Plugin</Link> - Multi-cluster management</li>
                <li><Link href="/plugins/aws" className="text-blue-600 hover:underline">AWS Plugin</Link> - EC2 and account operations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Development</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="/api-reference" className="text-blue-600 hover:underline">API Reference</Link> - Backend API endpoints</li>
                <li><Link href="/backend-development-guide" className="text-blue-600 hover:underline">Backend Guide</Link> - Development patterns</li>
                <li><Link href="/getting-started" className="text-blue-600 hover:underline">Quick Start</Link> - Installation guide</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}
