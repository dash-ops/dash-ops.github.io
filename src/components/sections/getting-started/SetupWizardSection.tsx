import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Wand2, CheckCircle, Shield, Settings, AlertTriangle, Info } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

export function SetupWizardSection() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          {t("setup.title")}
        </h1>
        <p className="text-muted-foreground">
          {t("setup.subtitle")}
        </p>
        <Badge variant="secondary" className="mt-2">
          ✨ {t("setup.new-badge")}
        </Badge>
      </div>

      {/* Overview */}
      <Alert>
        <Wand2 className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("setup.overview")}</strong> {t("setup.overview-desc")}
        </AlertDescription>
      </Alert>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wand2 className="h-5 w-5" />
            <span>{t("setup.getting-started")}</span>
          </CardTitle>
          <CardDescription>
            {t("setup.getting-started-desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">
              # {t("setup.step-1-backend")}<br/>
              go run main.go<br/><br/>
              
              # {t("setup.step-2-frontend")}<br/>
              cd front<br/>
              yarn && yarn dev<br/><br/>
              
              # {t("setup.step-3-open")}<br/>
              # Open http://localhost:5173 in your browser
            </code>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              {t("setup.first-time-info")}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Setup Wizard Steps */}
      <Card>
        <CardHeader>
          <CardTitle>{t("setup.wizard-steps")}</CardTitle>
          <CardDescription>
            {t("setup.wizard-steps-desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tab 1: General Settings */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">
                1
              </Badge>
              <h3 className="text-lg font-semibold">{t("setup.tab-general")}</h3>
            </div>
            <div className="pl-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                {t("setup.tab-general-desc")}
              </p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li><strong>{t("setup.field-port")}</strong> - {t("setup.field-port-desc")}</li>
                <li><strong>{t("setup.field-origin")}</strong> - {t("setup.field-origin-desc")}</li>
                <li><strong>{t("setup.field-frontend-path")}</strong> - {t("setup.field-frontend-path-desc")}</li>
              </ul>
            </div>
          </div>

          {/* Tab 2: Plugin Selection */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">
                2
              </Badge>
              <h3 className="text-lg font-semibold">{t("setup.tab-plugins")}</h3>
            </div>
            <div className="pl-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                {t("setup.tab-plugins-desc")}
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-muted p-3 rounded">
                  <strong className="text-sm">🔐 Authentication</strong>
                  <p className="text-xs text-muted-foreground">GitHub OAuth2</p>
                </div>
                <div className="bg-muted p-3 rounded">
                  <strong className="text-sm">☁️ AWS</strong>
                  <p className="text-xs text-muted-foreground">EC2 operations</p>
                </div>
                <div className="bg-muted p-3 rounded">
                  <strong className="text-sm">⚙️ Kubernetes</strong>
                  <p className="text-xs text-muted-foreground">Multi-cluster</p>
                </div>
                <div className="bg-muted p-3 rounded">
                  <strong className="text-sm">📋 Service Catalog</strong>
                  <p className="text-xs text-muted-foreground">Service registry</p>
                </div>
                <div className="bg-muted p-3 rounded">
                  <strong className="text-sm">📊 Observability</strong>
                  <p className="text-xs text-muted-foreground">Logs & Traces</p>
                </div>
              </div>
              <Alert className="mt-3">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  {t("setup.plugin-selection-tip")}
                </AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Tab 3: Authentication */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">
                3
              </Badge>
              <h3 className="text-lg font-semibold">{t("setup.tab-auth")}</h3>
            </div>
            <div className="pl-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                {t("setup.tab-auth-desc")}
              </p>
              <div className="bg-muted p-4 rounded-lg mt-2">
                <p className="text-sm font-medium mb-2">{t("setup.auth-fields")}</p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>{t("setup.field-client-id")}</strong> - {t("setup.field-client-id-desc")}</li>
                  <li>• <strong>{t("setup.field-client-secret")}</strong> - {t("setup.field-client-secret-desc")}</li>
                  <li>• <strong>{t("setup.field-org-permission")}</strong> - {t("setup.field-org-permission-desc")}</li>
                  <li>• <strong>{t("setup.field-scopes")}</strong> - {t("setup.field-scopes-desc")}</li>
                </ul>
              </div>
              <Alert className="mt-3">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  {t("setup.github-oauth-setup-required")}
                </AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Tab 4: Kubernetes */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">
                4
              </Badge>
              <h3 className="text-lg font-semibold">{t("setup.tab-kubernetes")}</h3>
            </div>
            <div className="pl-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                {t("setup.tab-kubernetes-desc")}
              </p>
              <div className="bg-muted p-4 rounded-lg mt-2">
                <p className="text-sm font-medium mb-2">{t("setup.k8s-cluster-fields")}</p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>{t("setup.field-cluster-name")}</strong> - {t("setup.field-cluster-name-desc")}</li>
                  <li>• <strong>{t("setup.field-kubeconfig")}</strong> - {t("setup.field-kubeconfig-desc")}</li>
                  <li>• <strong>{t("setup.field-context")}</strong> - {t("setup.field-context-desc")}</li>
                </ul>
              </div>
              <Alert className="mt-3">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  {t("setup.k8s-multiple-clusters")}
                </AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Tab 5: AWS */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">
                5
              </Badge>
              <h3 className="text-lg font-semibold">{t("setup.tab-aws")}</h3>
            </div>
            <div className="pl-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                {t("setup.tab-aws-desc")}
              </p>
              <div className="bg-muted p-4 rounded-lg mt-2">
                <p className="text-sm font-medium mb-2">{t("setup.aws-account-fields")}</p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>{t("setup.field-account-name")}</strong> - {t("setup.field-account-name-desc")}</li>
                  <li>• <strong>{t("setup.field-region")}</strong> - {t("setup.field-region-desc")}</li>
                  <li>• <strong>{t("setup.field-access-key")}</strong> - {t("setup.field-access-key-desc")}</li>
                  <li>• <strong>{t("setup.field-secret-key")}</strong> - {t("setup.field-secret-key-desc")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tab 6: Service Catalog */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">
                6
              </Badge>
              <h3 className="text-lg font-semibold">{t("setup.tab-service-catalog")}</h3>
            </div>
            <div className="pl-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                {t("setup.tab-service-catalog-desc")}
              </p>
              <div className="bg-muted p-4 rounded-lg mt-2">
                <p className="text-sm font-medium mb-2">{t("setup.catalog-storage-options")}</p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>{t("setup.storage-filesystem")}</strong> - {t("setup.storage-filesystem-desc")}</li>
                  <li>• <strong>{t("setup.storage-github")}</strong> - {t("setup.storage-github-desc")}</li>
                  <li>• <strong>{t("setup.storage-s3")}</strong> - {t("setup.storage-s3-desc")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tab 7: Observability */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">
                7
              </Badge>
              <h3 className="text-lg font-semibold">{t("setup.tab-observability")}</h3>
            </div>
            <div className="pl-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                {t("setup.tab-observability-desc")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                <div className="bg-muted p-3 rounded">
                  <strong className="text-sm">📝 Logs (Loki)</strong>
                  <p className="text-xs text-muted-foreground mt-1">{t("setup.logs-provider-desc")}</p>
                </div>
                <div className="bg-muted p-3 rounded">
                  <strong className="text-sm">🔍 Traces (Tempo)</strong>
                  <p className="text-xs text-muted-foreground mt-1">{t("setup.traces-provider-desc")}</p>
                </div>
                <div className="bg-muted p-3 rounded">
                  <strong className="text-sm">📊 Metrics (Prometheus)</strong>
                  <p className="text-xs text-muted-foreground mt-1">{t("setup.metrics-provider-desc")}</p>
                </div>
              </div>
              <Alert className="mt-3">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  {t("setup.observability-multiple-providers")}
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security & Secrets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>{t("setup.security-title")}</span>
          </CardTitle>
          <CardDescription>
            {t("setup.security-desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>{t("setup.secrets-masked-title")}</strong> {t("setup.secrets-masked-desc")}
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("setup.how-secrets-work")}</h4>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>{t("setup.secrets-point-1")}</li>
              <li>{t("setup.secrets-point-2")}</li>
              <li>{t("setup.secrets-point-3")}</li>
              <li>{t("setup.secrets-point-4")}</li>
            </ul>
          </div>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>{t("setup.security-warning-title")}</strong> {t("setup.security-warning-beta")}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Configuration File Output */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>{t("setup.config-file-title")}</span>
          </CardTitle>
          <CardDescription>
            {t("setup.config-file-desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("setup.where-saved")}</h4>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                # {t("setup.default-path")}<br/>
                ./dash-ops.yaml<br/><br/>
                
                # {t("setup.custom-path")}<br/>
                export DASH_CONFIG=/path/to/custom/config.yaml
              </code>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              {t("setup.manual-edit-allowed")}
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("setup.example-output")}</h4>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                port: 8080<br/>
                origin: http://localhost:5173<br/>
                headers:<br/>
                &nbsp;&nbsp;- Content-Type<br/>
                &nbsp;&nbsp;- Authorization<br/>
                front: front/dist<br/><br/>
                
                plugins:<br/>
                &nbsp;&nbsp;- Auth<br/>
                &nbsp;&nbsp;- Kubernetes<br/>
                &nbsp;&nbsp;- AWS<br/><br/>
                
                auth:<br/>
                &nbsp;&nbsp;- provider: github<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clientId: $&#123;GITHUB_CLIENT_ID&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clientSecret: $&#123;GITHUB_CLIENT_SECRET&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;# ...additional auth config
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Updating Settings Later */}
      <Card>
        <CardHeader>
          <CardTitle>{t("setup.updating-settings-title")}</CardTitle>
          <CardDescription>
            {t("setup.updating-settings-desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm">{t("setup.settings-page-access")}</p>
            <p className="text-sm font-medium mt-2">
              {t("setup.sidebar-menu")} → Settings → {t("setup.update-providers")}
            </p>
          </div>

          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              {t("setup.settings-same-forms")}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>{t("setup.next-steps-title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium">{t("setup.next-step-1-title")}</p>
                <p className="text-sm text-muted-foreground">{t("setup.next-step-1-desc")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium">{t("setup.next-step-2-title")}</p>
                <p className="text-sm text-muted-foreground">{t("setup.next-step-2-desc")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium">{t("setup.next-step-3-title")}</p>
                <p className="text-sm text-muted-foreground">{t("setup.next-step-3-desc")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

