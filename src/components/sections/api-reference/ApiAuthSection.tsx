import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/LanguageContext"
import {
  Shield,
  Key,
  AlertTriangle,
  ArrowRight
} from "lucide-react"

interface ApiAuthSectionProps {
  onSectionChange?: (section: string) => void
}

export function ApiAuthSection({ }: ApiAuthSectionProps) {
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
          {t("api.auth.page-title")}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t("api.auth.page-subtitle")}
        </p>
      </div>

      {/* OAuth2 Flow Explanation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            {t("api.auth.flow-title")}
          </CardTitle>
          <CardDescription>
            {t("api.auth.flow-description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Initialize OAuth Flow</p>
                <p className="text-sm text-muted-foreground">
                  GET /api/oauth/authorize → Redirect to GitHub authorization
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground ml-4" />
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">User Approval</p>
                <p className="text-sm text-muted-foreground">
                  User authorizes DashOps to access their GitHub account
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground ml-4" />
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">OAuth Callback</p>
                <p className="text-sm text-muted-foreground">
                  GET /api/oauth/redirect → Exchange authorization code for access token
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground ml-4" />
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Authenticated Requests</p>
                <p className="text-sm text-muted-foreground">
                  Include Bearer token in Authorization header for all API calls
                </p>
              </div>
            </div>
          </div>

          <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
            <Shield className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              {t("api.auth.security-note")}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Authentication Endpoints */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            {t("api.auth.endpoints-title")}
          </CardTitle>
          <CardDescription>
            {t("api.auth.endpoints-description")}
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

      {/* Authentication Header */}
      <Card>
        <CardHeader>
          <CardTitle>{t("api.auth.header-title")}</CardTitle>
          <CardDescription>
            {t("api.auth.header-description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("api.auth.header-format")}</h4>
            <CodeBlock>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</CodeBlock>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("api.auth.example-request")}</h4>
            <CodeBlock language="bash">{`curl -H "Authorization: Bearer $TOKEN" \\
     http://localhost:8080/api/health`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Token Storage Warning */}
      <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800 dark:text-orange-200">
          {t("api.auth.storage-warning")}
        </AlertDescription>
      </Alert>
    </div>
  )
}

