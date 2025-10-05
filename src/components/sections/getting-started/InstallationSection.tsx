import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Download, Terminal, Container, AlertTriangle, Github } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function InstallationSection() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("install.title")}</h1>
        <p className="text-muted-foreground">
          {t("install.subtitle")}
        </p>
        <Badge variant="secondary" className="mt-2">🚧 {t("install.beta-badge")}</Badge>
      </div>

      {/* Beta Warning */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("install.beta-warning")}</strong>
        </AlertDescription>
      </Alert>

      {/* Prerequisites */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>{t("install.prerequisites.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("install.prerequisites.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* System Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("install.system-requirements")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Go</Badge>
                  <span className="text-sm">1.21+</span>
                </div>
                <p className="text-sm text-muted-foreground">{t("install.prerequisites.go")}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Node.js</Badge>
                  <span className="text-sm">18.0+</span>
                </div>
                <p className="text-sm text-muted-foreground">{t("install.prerequisites.node")}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Yarn</Badge>
                  <span className="text-sm">1.22+</span>
                </div>
                <p className="text-sm text-muted-foreground">{t("install.prerequisites.yarn")}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Docker</Badge>
                  <span className="text-sm">20.0+</span>
                </div>
                <p className="text-sm text-muted-foreground">{t("install.prerequisites.docker")}</p>
              </div>
            </div>
          </div>

          {/* Cloud Access Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("install.cloud-requirements")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Github className="h-4 w-4 text-blue-600" />
                  <span className="font-semibold">{t("install.prerequisites.github")}</span>
                  <Badge variant="destructive" className="text-xs">{t("install.required")}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{t("install.github-oauth-desc")}</p>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold">{t("install.aws-credentials")}</span>
                  <Badge variant="secondary" className="text-xs">{t("install.optional")}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{t("install.aws-desc")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installation Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>{t("install.steps.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("install.methods-desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Option 1: Local Development */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold">{t("install.local-development")}</h3>
              <Badge variant="default">{t("install.recommended")}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{t("install.local-development-desc")}</p>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">1. Clone repository</p>
                <code className="text-sm">
                  git clone https://github.com/dash-ops/dash-ops.git<br/>
                  cd dash-ops
                </code>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">2. Create configuration</p>
                <code className="text-sm">
                  cp local.sample.yaml dash-ops.yaml
                </code>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">3. Set environment variables</p>
                <code className="text-sm">
                  export GITHUB_CLIENT_ID=&quot;your-github-oauth-app-id&quot;<br/>
                  export GITHUB_CLIENT_SECRET=&quot;your-github-oauth-secret&quot;
                </code>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">4. Run backend (Terminal 1)</p>
                <code className="text-sm">
                  go run main.go
                </code>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">5. Run frontend (Terminal 2)</p>
                <code className="text-sm">
                  cd front<br/>
                  yarn && yarn dev
                </code>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">6. Access: http://localhost:5173</p>
                <code className="text-sm">
                  # Login Screen → Dashboard → AWS Module → Kubernetes Module
                </code>
              </div>
            </div>
          </div>

          {/* Option 2: Docker Installation */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Container className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">{t("install.docker-setup")}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t("install.docker-desc")}</p>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">{t("install.docker-command")}</p>
              <code className="text-sm">
                # {t("install.clone-and-config")}<br/>
                git clone https://github.com/dash-ops/dash-ops.git<br/>
                cd dash-ops<br/>
                cp local.sample.yaml dash-ops.yaml<br/><br/>

                # {t("install.run-with-docker")}<br/>
                docker run --rm \<br/>
                &nbsp;&nbsp;-v $(pwd)/dash-ops.yaml:/dash-ops.yaml \<br/>
                &nbsp;&nbsp;-v $&#123;HOME&#125;/.kube/config:/.kube/config \<br/>
                &nbsp;&nbsp;-p 8080:8080 \<br/>
                &nbsp;&nbsp;dashops/dash-ops<br/><br/>

                # {t("install.access")}: http://localhost:8080
              </code>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                {t("install.docker-warning")}
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* What You'll See After Installation */}
      <Card>
        <CardHeader>
          <CardTitle>{t("install.what-youll-see")}</CardTitle>
          <CardDescription>
            {t("install.what-youll-see.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="font-semibold">{t("install.login-screen")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("install.login-screen.desc")}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="font-semibold">{t("install.dashboard")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("install.dashboard.desc")}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="font-semibold">{t("install.aws-module")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("install.aws-module.desc")}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="font-semibold">{t("install.k8s-module")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("install.k8s-module.desc")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("install.troubleshooting.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("install.troubleshooting.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("install.troubleshooting.backend-wont-start")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("install.troubleshooting.check-go-version")}</li>
                <li>• {t("install.troubleshooting.verify-config")}</li>
                <li>• {t("install.troubleshooting.check-yaml-errors")}</li>
              </ul>
            </div>

            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("install.troubleshooting.frontend-build-errors")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("install.troubleshooting.check-node-version")}</li>
                <li>• {t("install.troubleshooting.clear-cache")}</li>
                <li>• {t("install.troubleshooting.reinstall-deps")}</li>
              </ul>
            </div>

            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("install.troubleshooting.auth-login-fails")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("install.troubleshooting.check-github-oauth")}</li>
                <li>• {t("install.troubleshooting.verify-callback-url")}</li>
                <li>• {t("install.troubleshooting.ensure-org-membership")}</li>
                <li>• {t("install.troubleshooting.check-browser-console")}</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">{t("install.troubleshooting.debug-mode")}</h4>
            <div className="bg-muted p-3 rounded text-sm">
              <code>
                # {t("install.troubleshooting.backend-debug")}<br/>
                LOG_LEVEL=debug go run main.go<br/><br/>

                # {t("install.troubleshooting.frontend-debug")}<br/>
                # {t("install.troubleshooting.browser-console")}:<br/>
                localStorage.setItem(&apos;dash-ops:debug&apos;, &apos;true&apos;)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
