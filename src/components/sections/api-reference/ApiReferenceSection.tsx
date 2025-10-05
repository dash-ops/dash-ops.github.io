import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/LanguageContext"
import {
  AlertTriangle,
  Key,
  Globe,
  Database,
  Cloud,
  Container,
  Shield,
  Code,
  CheckCircle,
  XCircle,
  Clock,
  Zap
} from "lucide-react"

interface ApiReferenceSectionProps {
  onSectionChange?: (section: string) => void
}

export function ApiReferenceSection({ }: ApiReferenceSectionProps) {
  const { t } = useLanguage()

  const CodeBlock = ({ children, language = "bash" }: { children: string, language?: string }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
      <code className={`language-${language} text-sm`}>{children}</code>
    </pre>
  )

  const EndpointCard = ({
    method,
    path,
    description,
    params,
    response,
    auth = true
  }: {
    method: string
    path: string
    description: string
    params?: { name: string, type: string, required: boolean, description: string }[]
    response?: string
    auth?: boolean
  }) => (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant={
              method === "GET" ? "default" :
              method === "POST" ? "secondary" :
              method === "PUT" ? "outline" :
              "destructive"
            }>
              {method}
            </Badge>
            <code className="text-sm font-mono">{path}</code>
          </div>
          {auth && (
            <Badge variant="outline" className="gap-1">
              <Key className="h-3 w-3" />
              Auth Required
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      {(params || response) && (
        <CardContent className="space-y-3">
          {params && (
            <div>
              <h5 className="text-sm font-semibold mb-2">{t("api.parameters")}</h5>
              <div className="space-y-1">
                {params.map((param, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <code className="font-mono bg-muted px-1 py-0.5 rounded">
                      {param.name}
                    </code>
                    <Badge variant={param.required ? "destructive" : "secondary"} className="text-xs">
                      {param.type}
                    </Badge>
                    <span className="text-muted-foreground">{param.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {response && (
            <div>
              <h5 className="text-sm font-semibold mb-2">{t("api.response")}</h5>
              <CodeBlock language="json">{response}</CodeBlock>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="destructive">
            <AlertTriangle className="h-3 w-3 mr-1" />
            {t("api.beta-badge")}
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          {t("api.title")}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t("api.subtitle")}
        </p>
      </div>

      {/* Warning Alert */}
      <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800 dark:text-orange-200">
          {t("api.beta-warning")}
        </AlertDescription>
      </Alert>

      {/* API Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            {t("api.overview.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">{t("api.overview.base-url")}</h4>
              <code className="block bg-muted p-2 rounded text-sm">
                http://localhost:8080/api
              </code>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">{t("api.overview.content-type")}</h4>
              <code className="block bg-muted p-2 rounded text-sm">
                application/json
              </code>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("api.overview.auth-header")}</h4>
            <code className="block bg-muted p-2 rounded text-sm">
              Authorization: Bearer {"<token>"}
            </code>
          </div>

          {/* Response Format */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("api.overview.response-format")}</h4>
            <CodeBlock language="json">{`{
  "data": [...],           // Response payload
  "success": true,         // Operation status
  "message": "Success",    // Optional message
  "errors": []            // Error details if any
}`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* API Endpoints Tabs */}
      <Tabs defaultValue="auth" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="auth">
            <Key className="h-4 w-4 mr-2" />
            Auth
          </TabsTrigger>
          <TabsTrigger value="core">
            <Database className="h-4 w-4 mr-2" />
            Core
          </TabsTrigger>
          <TabsTrigger value="aws">
            <Cloud className="h-4 w-4 mr-2" />
            AWS
          </TabsTrigger>
          <TabsTrigger value="k8s">
            <Container className="h-4 w-4 mr-2" />
            K8s
          </TabsTrigger>
          <TabsTrigger value="catalog">
            <Database className="h-4 w-4 mr-2" />
            Catalog
          </TabsTrigger>
        </TabsList>

        {/* Authentication Endpoints */}
        <TabsContent value="auth" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {t("api.auth.title")}
              </CardTitle>
              <CardDescription>
                {t("api.auth.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <EndpointCard
                method="GET"
                path="/api/oauth/authorize"
                description={t("api.auth.authorize")}
                auth={false}
              />

              <EndpointCard
                method="GET"
                path="/api/oauth/redirect"
                description={t("api.auth.callback")}
                auth={false}
                params={[
                  { name: "code", type: "string", required: true, description: "Authorization code from GitHub" },
                  { name: "state", type: "string", required: true, description: "Security state parameter" }
                ]}
              />

              <EndpointCard
                method="POST"
                path="/api/oauth/logout"
                description={t("api.auth.logout")}
                auth={true}
              />

              <EndpointCard
                method="GET"
                path="/api/user"
                description={t("api.auth.user-info")}
                auth={true}
                response={`{
  "data": {
    "id": 12345,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "avatar_url": "https://avatars.githubusercontent.com/u/12345",
    "organization": "dash-ops",
    "teams": ["developers", "sre"]
  }
}`}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Core Endpoints */}
        <TabsContent value="core" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                {t("api.core.title")}
              </CardTitle>
              <CardDescription>
                {t("api.core.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <EndpointCard
                method="GET"
                path="/api/health"
                description={t("api.core.health")}
                auth={false}
                response={`{
  "data": {
    "status": "healthy",
    "version": "v0.1.0-beta",
    "uptime": "2h34m12s",
    "plugins": ["Auth", "AWS", "Kubernetes"]
  }
}`}
              />

              <EndpointCard
                method="GET"
                path="/api/version"
                description={t("api.core.version")}
                auth={false}
                response={`{
  "data": {
    "version": "v0.1.0-beta",
    "commit": "abc123def456",
    "buildDate": "2024-01-15T10:30:00Z",
    "goVersion": "go1.21.5"
  }
}`}
              />

              <EndpointCard
                method="GET"
                path="/api/config/plugins"
                description={t("api.core.plugins")}
                auth={true}
                response={`{
  "data": [
    {
      "name": "Auth",
      "enabled": true,
      "version": "v0.1.0"
    },
    {
      "name": "AWS",
      "enabled": true,
      "version": "v0.1.0"
    }
  ]
}`}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* AWS Endpoints */}
        <TabsContent value="aws" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5" />
                {t("api.aws.title")}
              </CardTitle>
              <CardDescription>
                {t("api.aws.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <EndpointCard
                method="GET"
                path="/api/aws/accounts"
                description={t("api.aws.accounts")}
                auth={true}
                response={`{
  "data": [
    {
      "name": "Production Account",
      "region": "us-east-1",
      "accountId": "123456789012"
    },
    {
      "name": "Development Account",
      "region": "us-west-2",
      "accountId": "123456789013"
    }
  ]
}`}
              />

              <EndpointCard
                method="GET"
                path="/api/aws/instances"
                description={t("api.aws.instances")}
                auth={true}
                params={[
                  { name: "account", type: "string", required: true, description: "AWS account name" },
                  { name: "state", type: "string", required: false, description: "Filter by state: running, stopped, pending" }
                ]}
                response={`{
  "data": [
    {
      "instanceId": "i-1234567890abcdef0",
      "name": "web-server-1",
      "state": "running",
      "instanceType": "t3.micro",
      "launchTime": "2024-01-15T10:30:00Z",
      "privateIpAddress": "10.0.1.100",
      "publicIpAddress": "54.123.45.67",
      "tags": {
        "Name": "web-server-1",
        "Environment": "development"
      }
    }
  ]
}`}
              />

              <EndpointCard
                method="POST"
                path="/api/aws/instances/{instanceId}/start"
                description={t("api.aws.start-instance")}
                auth={true}
                params={[
                  { name: "account", type: "string", required: true, description: "AWS account name in request body" }
                ]}
                response={`{
  "data": {
    "current_state": "pending",
    "previous_state": "stopped"
  },
  "success": true,
  "message": "Instance start initiated"
}`}
              />

              <EndpointCard
                method="POST"
                path="/api/aws/instances/{instanceId}/stop"
                description={t("api.aws.stop-instance")}
                auth={true}
                params={[
                  { name: "account", type: "string", required: true, description: "AWS account name in request body" }
                ]}
                response={`{
  "data": {
    "current_state": "stopping",
    "previous_state": "running"
  },
  "success": true,
  "message": "Instance stop initiated"
}`}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Kubernetes Endpoints */}
        <TabsContent value="k8s" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Container className="h-5 w-5" />
                {t("api.k8s.title")}
              </CardTitle>
              <CardDescription>
                {t("api.k8s.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <EndpointCard
                method="GET"
                path="/api/kubernetes/clusters"
                description={t("api.k8s.clusters")}
                auth={true}
                response={`{
  "data": [
    {
      "name": "Development Cluster",
      "context": "dev",
      "status": "healthy",
      "version": "v1.28.2",
      "nodeCount": 3
    }
  ]
}`}
              />

              <EndpointCard
                method="GET"
                path="/api/kubernetes/deployments"
                description={t("api.k8s.deployments")}
                auth={true}
                params={[
                  { name: "cluster", type: "string", required: true, description: "Cluster name from configuration" },
                  { name: "namespace", type: "string", required: false, description: "Kubernetes namespace (default: 'default')" }
                ]}
                response={`{
  "data": [
    {
      "name": "api-server",
      "namespace": "default",
      "replicas": 3,
      "readyReplicas": 3,
      "image": "api-server:v1.2.3",
      "status": "running",
      "created": "2024-01-15T10:30:00Z"
    }
  ]
}`}
              />

              <EndpointCard
                method="POST"
                path="/api/kubernetes/deployments/{name}/scale"
                description={t("api.k8s.scale")}
                auth={true}
                params={[
                  { name: "replicas", type: "number", required: true, description: "Desired number of replicas" },
                  { name: "namespace", type: "string", required: false, description: "Namespace (default: 'default')" },
                  { name: "cluster", type: "string", required: true, description: "Cluster name" }
                ]}
                response={`{
  "data": {
    "success": true,
    "currentReplicas": 5,
    "previousReplicas": 3
  },
  "message": "Deployment scaled successfully"
}`}
              />

              <EndpointCard
                method="GET"
                path="/api/kubernetes/pods"
                description={t("api.k8s.pods")}
                auth={true}
                params={[
                  { name: "cluster", type: "string", required: true, description: "Cluster name" },
                  { name: "namespace", type: "string", required: false, description: "Namespace filter" }
                ]}
                response={`{
  "data": [
    {
      "name": "api-server-7d4b8c8f9d-x2k9m",
      "namespace": "default",
      "status": "Running",
      "restarts": 0,
      "age": "2d3h",
      "node": "worker-node-1",
      "containers": [
        {
          "name": "api-server",
          "image": "api-server:v1.2.3",
          "ready": true
        }
      ]
    }
  ]
}`}
              />

              <EndpointCard
                method="GET"
                path="/api/kubernetes/pods/{name}/logs"
                description={t("api.k8s.logs")}
                auth={true}
                params={[
                  { name: "cluster", type: "string", required: true, description: "Cluster name" },
                  { name: "namespace", type: "string", required: true, description: "Pod namespace" },
                  { name: "follow", type: "boolean", required: false, description: "Stream live logs" },
                  { name: "tail", type: "number", required: false, description: "Number of recent lines" },
                  { name: "container", type: "string", required: false, description: "Specific container name" }
                ]}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Service Catalog */}
        <TabsContent value="catalog" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                {t("api.catalog.title")}
              </CardTitle>
              <CardDescription>
                {t("api.catalog.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <Clock className="h-4 w-4" />
                <AlertDescription>
                  {t("api.catalog.coming-soon")}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Error Handling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            {t("api.errors.title")}
          </CardTitle>
          <CardDescription>
            {t("api.errors.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { code: 200, status: "OK", desc: t("api.errors.200") },
              { code: 201, status: "Created", desc: t("api.errors.201") },
              { code: 400, status: "Bad Request", desc: t("api.errors.400") },
              { code: 401, status: "Unauthorized", desc: t("api.errors.401") },
              { code: 403, status: "Forbidden", desc: t("api.errors.403") },
              { code: 404, status: "Not Found", desc: t("api.errors.404") },
              { code: 500, status: "Server Error", desc: t("api.errors.500") }
            ].map((error) => (
              <div key={error.code} className="flex items-start gap-3">
                <Badge variant={error.code < 400 ? "default" : error.code < 500 ? "secondary" : "destructive"}>
                  {error.code}
                </Badge>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{error.status}</p>
                  <p className="text-sm text-muted-foreground">{error.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("api.errors.example-401")}</h4>
            <CodeBlock language="json">{`{
  "data": null,
  "success": false,
  "message": "Authentication required",
  "errors": [
    {
      "code": "UNAUTHORIZED",
      "message": "Valid Bearer token required"
    }
  ]
}`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Testing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            {t("api.testing.title")}
          </CardTitle>
          <CardDescription>
            {t("api.testing.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("api.testing.curl")}</h4>
            <CodeBlock language="bash">{`# 1. Get authentication token (through browser OAuth flow)
TOKEN="your-jwt-token-here"

# 2. Test health endpoint
curl -H "Authorization: Bearer $TOKEN" \\
     http://localhost:8080/api/health

# 3. List AWS instances
curl -H "Authorization: Bearer $TOKEN" \\
     "http://localhost:8080/api/aws/instances?account=Development%20Account"

# 4. List Kubernetes deployments
curl -H "Authorization: Bearer $TOKEN" \\
     "http://localhost:8080/api/kubernetes/deployments?cluster=Development%20Cluster"`}</CodeBlock>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("api.testing.postman")}</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>{t("api.testing.postman-step1")}</li>
              <li>{t("api.testing.postman-step2")}</li>
              <li>{t("api.testing.postman-step3")}</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            {t("api.roadmap.title")}
          </CardTitle>
          <CardDescription>
            {t("api.roadmap.description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Q1 2025 */}
            <div>
              <h4 className="font-semibold text-sm mb-2">{t("api.roadmap.q1-2025")}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  t("api.roadmap.api-versioning"),
                  t("api.roadmap.enhanced-validation"),
                  t("api.roadmap.better-errors"),
                  t("api.roadmap.rate-limiting")
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Q2 2025 */}
            <div>
              <h4 className="font-semibold text-sm mb-2">{t("api.roadmap.q2-2025")}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  t("api.roadmap.openapi"),
                  t("api.roadmap.pagination"),
                  t("api.roadmap.api-keys"),
                  t("api.roadmap.audit-logs")
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Q3+ 2025 */}
            <div>
              <h4 className="font-semibold text-sm mb-2">{t("api.roadmap.q3-2025")}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  t("api.roadmap.graphql"),
                  t("api.roadmap.webhooks"),
                  t("api.roadmap.analytics"),
                  t("api.roadmap.sdk")
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <XCircle className="h-4 w-4 text-gray-400" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
