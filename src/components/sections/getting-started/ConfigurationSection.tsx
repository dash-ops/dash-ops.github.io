import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Settings, Github, Key, FileText, AlertTriangle, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function ConfigurationSection() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("config.title")}</h1>
        <p className="text-muted-foreground">
          {t("config.subtitle")}
        </p>
        <Badge variant="secondary" className="mt-2">⚙️ {t("config.beta-badge")}</Badge>
      </div>

      {/* Configuration Overview */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("config.overview.desc")}</strong>
        </AlertDescription>
      </Alert>

      {/* Basic Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>{t("config.file.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("config.file.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold">{t("config.file.example")}</h4>
            <p className="text-sm text-muted-foreground">{t("config.basic-config-desc")}</p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">
              # {t("config.server-settings")}<br/>
              port: 8080<br/>
              origin: http://localhost:8080<br/>
              headers:<br/>
              &nbsp;&nbsp;- &apos;Content-Type&apos;<br/>
              &nbsp;&nbsp;- &apos;Authorization&apos;<br/>
              front: app<br/><br/>

              # {t("config.enable-plugins")} ({t("config.start-with-auth")})<br/>
              plugins:<br/>
              &nbsp;&nbsp;- &apos;Auth&apos;<br/><br/>

              # {t("config.github-auth-setup")} ({t("config.required")})<br/>
              auth:<br/>
              &nbsp;&nbsp;- provider: github<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;clientId: $&#123;GITHUB_CLIENT_ID&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;clientSecret: $&#123;GITHUB_CLIENT_SECRET&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;authURL: &apos;https://github.com/login/oauth/authorize&apos;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;tokenURL: &apos;https://github.com/login/oauth/access_token&apos;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;redirectURL: &apos;http://localhost:8080/api/oauth/redirect&apos;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;urlLoginSuccess: &apos;http://localhost:5173&apos;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;orgPermission: &apos;your-github-org&apos; # {t("config.replace-org")}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;scopes: [user, repo, read:org]
            </code>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              {t("config.minimal-config-warning")}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* GitHub OAuth Setup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Github className="h-5 w-5" />
            <span>{t("config.github.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("config.github.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Go to GitHub Organization Settings */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">1</Badge>
              <span>{t("config.github.app.title")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <div className="space-y-2">
                <p className="text-sm font-medium">{t("config.github.app.step-1")}</p>
                <p className="text-sm font-medium">{t("config.github.app.step-2")}</p>
              </div>
            </div>
          </div>

          {/* Step 2: Fill Application Details */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">2</Badge>
              <span>{t("config.github.app.step-3")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>{t("config.github.app-name")}</strong> DashOPS</p>
                <p><strong>{t("config.github.homepage")}</strong> http://localhost:5173</p>
                <p><strong>{t("config.github.callback")}</strong> http://localhost:8080/api/oauth/redirect</p>
              </div>
            </div>
          </div>

          {/* Step 3: Save Credentials */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">3</Badge>
              <span>{t("config.github.app.step-5")}</span>
            </h3>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                {t("config.github.credentials-warning")}
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Environment Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5" />
            <span>{t("config.env.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("config.env.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">{t("config.env.required")}</h4>
              <code className="text-sm">
                export GITHUB_CLIENT_ID=&quot;your-github-oauth-client-id&quot;<br/>
                export GITHUB_CLIENT_SECRET=&quot;your-github-oauth-client-secret&quot;
              </code>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">{t("config.env.optional")}</h4>
              <code className="text-sm">
                # {t("config.for-aws-plugin")}<br/>
                export AWS_ACCESS_KEY_ID=&quot;your-aws-access-key&quot;<br/>
                export AWS_SECRET_ACCESS_KEY=&quot;your-aws-secret-key&quot;<br/><br/>
                # {t("config.for-kubernetes-plugin")}<br/>
                export KUBECONFIG=&quot;$HOME/.kube/config&quot;<br/><br/>
                # {t("config.frontend-api-url")}<br/>
                export VITE_API_URL=&quot;http://localhost:8080/api&quot;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Adding More Plugins */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>{t("config.adding-plugins")}</span>
          </CardTitle>
          <CardDescription>
            {t("config.plugins-desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              {t("config.start-basic-then-add")}
            </AlertDescription>
          </Alert>

          {/* AWS Plugin */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{t("config.adding-aws-plugin")}</h3>
              <Badge variant="secondary">{t("config.optional")}</Badge>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">{t("config.step1-add-to-plugins")}</p>
              <code className="text-sm">
                plugins:<br/>
                &nbsp;&nbsp;- &apos;Auth&apos;<br/>
                &nbsp;&nbsp;- &apos;AWS&apos; # {t("config.add-this-line")}
              </code>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">{t("config.step2-add-aws-config")}</p>
              <code className="text-sm">
                aws:<br/>
                &nbsp;&nbsp;- name: &apos;Development Account&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;region: us-east-1<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;accessKeyId: $&#123;AWS_ACCESS_KEY_ID&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;secretAccessKey: $&#123;AWS_SECRET_ACCESS_KEY&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;ec2Config:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skipList:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- &apos;EKSWorkerAutoScalingGroupSpot&apos;
              </code>
            </div>
          </div>

          {/* Kubernetes Plugin */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{t("config.adding-kubernetes-plugin")}</h3>
              <Badge variant="secondary">{t("config.optional")}</Badge>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">{t("config.step1-add-to-plugins")}</p>
              <code className="text-sm">
                plugins:<br/>
                &nbsp;&nbsp;- &apos;Auth&apos;<br/>
                &nbsp;&nbsp;- &apos;Kubernetes&apos; # {t("config.add-this-line")}
              </code>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">{t("config.step2-add-k8s-config")}</p>
              <code className="text-sm">
                kubernetes:<br/>
                &nbsp;&nbsp;- name: &apos;Development Cluster&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/config<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;context: &apos;dev-cluster-context&apos;<br/>
                &nbsp;&nbsp;- name: &apos;Production Cluster&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/config<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;context: &apos;prod-cluster-context&apos;
              </code>
            </div>
          </div>

          {/* Service Catalog Plugin */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{t("config.service-catalog-plugin")}</h3>
              <Badge variant="outline">{t("config.beta")}</Badge>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                plugins:<br/>
                &nbsp;&nbsp;- &apos;Auth&apos;<br/>
                &nbsp;&nbsp;- &apos;ServiceCatalog&apos; # {t("config.service-registry")}
              </code>
            </div>

            <p className="text-sm text-muted-foreground">{t("config.service-catalog-desc")}</p>
          </div>

          {/* Restart Instructions */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">{t("config.restart-and-verify")}</h4>
            <div className="bg-muted p-3 rounded text-sm">
              <code>
                # {t("config.restart-backend")}<br/>
                # Ctrl+C {t("config.to-stop")}, {t("config.then")}:<br/>
                go run main.go<br/><br/>

                # {t("config.frontend-auto-reloads")}<br/>
                # {t("config.check-sidebar-menu")}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Warning */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("config.security-considerations")}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="space-y-2">
              <p><strong>{t("config.security-warning")}</strong></p>
              <ul className="text-sm space-y-1 mt-2">
                <li>• {t("config.plain-text-credentials")}</li>
                <li>• {t("config.no-encryption")}</li>
                <li>• {t("config.basic-auth-only")}</li>
                <li>• {t("config.testing-only")}</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
