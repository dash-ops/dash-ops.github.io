import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Code, Github, Key, FileText, AlertTriangle, CheckCircle, Settings } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface AdvancedConfigSectionProps {
  onSectionChange: (section: string) => void
}

export function AdvancedConfigSection({ onSectionChange }: AdvancedConfigSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("advanced-config.title")}</h1>
        <p className="text-muted-foreground">
          {t("advanced-config.subtitle")}
        </p>
        <Badge variant="outline" className="mt-2">📖 {t("advanced-config.reference-badge")}</Badge>
      </div>

      {/* When to Use This */}
      <Alert>
        <Code className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("advanced-config.when-use")}</strong> {t("advanced-config.when-use-desc")}
        </AlertDescription>
      </Alert>

      {/* File Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>{t("advanced-config.file-structure.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("advanced-config.file-structure.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">
              # {t("advanced-config.server-section")}<br/>
              port: 8080<br/>
              origin: http://localhost:5173<br/>
              headers:<br/>
              &nbsp;&nbsp;- Content-Type<br/>
              &nbsp;&nbsp;- Authorization<br/>
              front: front/dist<br/><br/>
              
              # {t("advanced-config.plugins-section")}<br/>
              plugins:<br/>
              &nbsp;&nbsp;- Auth<br/>
              &nbsp;&nbsp;- Kubernetes<br/>
              &nbsp;&nbsp;- AWS<br/>
              &nbsp;&nbsp;- ServiceCatalog<br/>
              &nbsp;&nbsp;- Observability<br/><br/>
              
              # {t("advanced-config.plugin-configs")}<br/>
              auth: [...]<br/>
              kubernetes: [...]<br/>
              aws: [...]<br/>
              serviceCatalog: &#123;...&#125;<br/>
              observability: &#123;...&#125;
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Environment Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5" />
            <span>{t("advanced-config.env.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("advanced-config.env.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">{t("advanced-config.env.required")}</h4>
              <code className="text-sm">
                export GITHUB_CLIENT_ID=&quot;your-github-oauth-client-id&quot;<br/>
                export GITHUB_CLIENT_SECRET=&quot;your-github-oauth-client-secret&quot;
              </code>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">{t("advanced-config.env.optional")}</h4>
              <code className="text-sm">
                # {t("advanced-config.for-aws")}<br/>
                export AWS_ACCESS_KEY_ID=&quot;your-key&quot;<br/>
                export AWS_SECRET_ACCESS_KEY=&quot;your-secret&quot;<br/><br/>
                
                # {t("advanced-config.custom-config-path")}<br/>
                export DASH_CONFIG=/custom/path/config.yaml<br/><br/>
                
                # {t("advanced-config.frontend-api")}<br/>
                export VITE_API_URL=&quot;http://localhost:8080/api&quot;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plugin-Specific Configurations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>{t("advanced-config.plugin-configs-title")}</span>
          </CardTitle>
          <CardDescription>
            {t("advanced-config.plugin-configs-desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Auth */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold">🔐 {t("advanced-config.auth-plugin")}</h4>
              <Badge variant="destructive" className="text-xs">{t("advanced-config.required")}</Badge>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                auth:<br/>
                &nbsp;&nbsp;- provider: github<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clientId: $&#123;GITHUB_CLIENT_ID&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clientSecret: $&#123;GITHUB_CLIENT_SECRET&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;authURL: https://github.com/login/oauth/authorize<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;tokenURL: https://github.com/login/oauth/access_token<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;redirectURL: http://localhost:8080/api/oauth/redirect<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;urlLoginSuccess: http://localhost:5173<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;orgPermission: your-org-name<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;scopes: [user, repo, read:org]
              </code>
            </div>
            <Button 
              variant="link" 
              size="sm" 
              className="p-0 h-auto"
              onClick={() => onSectionChange('auth-plugin')}
            >
              {t("advanced-config.see-full-guide")} →
            </Button>
          </div>

          {/* Kubernetes */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold">⚙️ {t("advanced-config.k8s-plugin")}</h4>
              <Badge variant="outline" className="text-xs">{t("advanced-config.optional")}</Badge>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                kubernetes:<br/>
                &nbsp;&nbsp;- name: Development<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/config<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;context: dev-cluster<br/>
                &nbsp;&nbsp;- name: Production<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/config<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;context: prod-cluster
              </code>
            </div>
            <Button 
              variant="link" 
              size="sm" 
              className="p-0 h-auto"
              onClick={() => onSectionChange('kubernetes-plugin')}
            >
              {t("advanced-config.see-full-guide")} →
            </Button>
          </div>

          {/* AWS */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold">☁️ {t("advanced-config.aws-plugin")}</h4>
              <Badge variant="outline" className="text-xs">{t("advanced-config.optional")}</Badge>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                aws:<br/>
                &nbsp;&nbsp;- name: Production Account<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;region: us-east-1<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;accessKeyId: $&#123;AWS_ACCESS_KEY_ID&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;secretAccessKey: $&#123;AWS_SECRET_ACCESS_KEY&#125;
              </code>
            </div>
            <Button 
              variant="link" 
              size="sm" 
              className="p-0 h-auto"
              onClick={() => onSectionChange('aws-plugin')}
            >
              {t("advanced-config.see-full-guide")} →
            </Button>
          </div>

          {/* Service Catalog */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold">📋 {t("advanced-config.catalog-plugin")}</h4>
              <Badge variant="outline" className="text-xs">{t("advanced-config.optional")}</Badge>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                serviceCatalog:<br/>
                &nbsp;&nbsp;storage:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;provider: filesystem  # or github, s3<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;filesystem:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path: ./services
              </code>
            </div>
            <Button 
              variant="link" 
              size="sm" 
              className="p-0 h-auto"
              onClick={() => onSectionChange('service-catalog-plugin')}
            >
              {t("advanced-config.see-full-guide")} →
            </Button>
          </div>

          {/* Observability */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold">📊 {t("advanced-config.observability-plugin")}</h4>
              <Badge variant="outline" className="text-xs">{t("advanced-config.optional")}</Badge>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                observability:<br/>
                &nbsp;&nbsp;logs:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;providers:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: loki-local<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: loki<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: http://localhost:3100<br/>
                &nbsp;&nbsp;traces:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;providers:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: tempo-local<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: tempo<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: http://localhost:3200
              </code>
            </div>
            <Button 
              variant="link" 
              size="sm" 
              className="p-0 h-auto"
              onClick={() => onSectionChange('observability-plugin')}
            >
              {t("advanced-config.see-full-guide")} →
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Security Warning */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("advanced-config.security-title")}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="space-y-2">
              <p><strong>{t("advanced-config.security-warning")}</strong></p>
              <ul className="text-sm space-y-1 mt-2">
                <li>• {t("advanced-config.plain-text")}</li>
                <li>• {t("advanced-config.no-encryption")}</li>
                <li>• {t("advanced-config.basic-auth")}</li>
                <li>• {t("advanced-config.testing-only")}</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="mt-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onSectionChange('setup-wizard')}
            >
              {t("advanced-config.prefer-ui")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

