import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Github, AlertTriangle, CheckCircle, ExternalLink, Key, Users } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

interface AuthPluginSectionProps {
  onSectionChange: (section: string) => void
}

export function AuthPluginSection({ onSectionChange }: AuthPluginSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("auth-plugin.title")}</h1>
        <p className="text-muted-foreground">
          {t("auth-plugin.subtitle")}
        </p>
        <Badge variant="secondary" className="mt-2">🔄 {t("auth-plugin.status")}</Badge>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("auth-plugin.warning")}</strong>
        </AlertDescription>
      </Alert>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>{t("auth-plugin.features.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("auth-plugin.features.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex space-x-3">
              <Github className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("auth-plugin.features.github-auth")}</h4>
                <p className="text-sm text-muted-foreground">{t("auth-plugin.features.github-auth-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Users className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("auth-plugin.features.org-validation")}</h4>
                <p className="text-sm text-muted-foreground">{t("auth-plugin.features.org-validation-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Key className="h-5 w-5 text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("auth-plugin.features.team-permissions")}</h4>
                <p className="text-sm text-muted-foreground">{t("auth-plugin.features.team-permissions-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Shield className="h-5 w-5 text-orange-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("auth-plugin.features.session-management")}</h4>
                <p className="text-sm text-muted-foreground">{t("auth-plugin.features.session-management-desc")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Github className="h-5 w-5" />
            <span>{t("auth-plugin.config.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("auth-plugin.config.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: GitHub OAuth Setup */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">1</Badge>
              <span>{t("auth-plugin.config.github-setup")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <div className="space-y-2">
                <p className="text-sm font-medium">{t("auth-plugin.config.github-step1")}</p>
                <code className="text-sm">
                  {t("auth-plugin.config.github-step1-desc")}
                </code>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="space-y-2">
                <p className="text-sm font-medium">{t("auth-plugin.config.github-step2")}</p>
                <div className="text-sm space-y-1">
                  <p><strong>{t("auth-plugin.config.app-name")}</strong> DashOPS</p>
                  <p><strong>{t("auth-plugin.config.homepage")}</strong> http://localhost:5173</p>
                  <p><strong>{t("auth-plugin.config.callback")}</strong> http://localhost:8080/api/oauth/redirect</p>
                </div>
              </div>
            </div>

            {/* GitHub OAuth Configuration Image */}
            <div className="border rounded-lg p-4 bg-white">
              <Image
                src="/img/github-config.png"
                alt="GitHub OAuth App Configuration"
                width={800}
                height={600}
                className="w-full h-auto rounded border shadow-sm"
              />
            </div>

            {/* Local Development Configuration */}
            <div className="bg-muted p-4 rounded-lg">
              <div className="space-y-2">
                <p className="text-sm font-medium">{t("auth-plugin.config.local-dev")}</p>
                <div className="text-sm space-y-1">
                  <p><strong>{t("auth-plugin.config.homepage")}</strong> http://localhost:5173</p>
                  <p><strong>{t("auth-plugin.config.callback")}</strong> http://localhost:8080/api/oauth/redirect</p>
                </div>
              </div>
            </div>

            {/* Local Development Configuration Image */}
            <div className="border rounded-lg p-4 bg-white">
              <Image
                src="/img/github-local-config.png"
                alt="GitHub Local Development Configuration"
                width={800}
                height={600}
                className="w-full h-auto rounded border shadow-sm"
              />
            </div>
          </div>

          {/* Step 2: DashOPS Configuration */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">2</Badge>
              <span>{t("auth-plugin.config.dashops-config")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                plugins:<br/>
                &nbsp;&nbsp;- &apos;Auth&apos;<br/>
                <br/>
                auth:<br/>
                &nbsp;&nbsp;- provider: github<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clientId: $&#123;GITHUB_CLIENT_ID&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clientSecret: $&#123;GITHUB_CLIENT_SECRET&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;authURL: &apos;https://github.com/login/oauth/authorize&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;tokenURL: &apos;https://github.com/login/oauth/access_token&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;redirectURL: &apos;http://localhost:8080/api/oauth/redirect&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;urlLoginSuccess: &apos;http://localhost:5173&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;orgPermission: &apos;your-github-org&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;scopes: [user, repo, read:org]
              </code>
            </div>
          </div>

          {/* Step 3: Environment Variables */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">3</Badge>
              <span>{t("auth-plugin.config.env-vars")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                export GITHUB_CLIENT_ID=&quot;your-github-oauth-client-id&quot;<br/>
                export GITHUB_CLIENT_SECRET=&quot;your-github-oauth-client-secret&quot;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security & Permissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>{t("auth-plugin.security.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("auth-plugin.security.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">{t("auth-plugin.security.org-access")}</h4>
            <p className="text-sm text-muted-foreground">{t("auth-plugin.security.org-access-desc")}</p>
            <div className="bg-muted p-3 rounded text-sm">
              <code>
                auth:<br/>
                &nbsp;&nbsp;- provider: github<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;orgPermission: &apos;dash-ops&apos; # Only members of &apos;dash-ops&apos; org can access
              </code>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">{t("auth-plugin.security.team-permissions")}</h4>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>{t("auth-plugin.security.team-permissions-warning")}</strong>
              </AlertDescription>
            </Alert>
            <div className="bg-muted p-3 rounded text-sm">
              <code>
                permission:<br/>
                &nbsp;&nbsp;feature:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;action: [&apos;org*team&apos;] # Format: organization*team-name
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Authentication Flow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ExternalLink className="h-5 w-5" />
            <span>{t("auth-plugin.flow.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("auth-plugin.flow.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6, 7].map((step) => (
              <div key={step} className="flex items-center space-x-3">
                <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">
                  {step}
                </Badge>
                <span className="text-sm">{t(`auth-plugin.flow.step${step}`)}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Beta Limitations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("auth-plugin.limitations.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("auth-plugin.limitations.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-red-600">{t("auth-plugin.limitations.not-production")}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t("auth-plugin.limitations.plain-text-storage")}</li>
              <li>• {t("auth-plugin.limitations.no-encryption")}</li>
              <li>• {t("auth-plugin.limitations.limited-audit")}</li>
              <li>• {t("auth-plugin.limitations.no-mfa")}</li>
              <li>• {t("auth-plugin.limitations.basic-permissions")}</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold">{t("auth-plugin.limitations.missing-features")}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t("auth-plugin.limitations.multiple-providers")}</li>
              <li>• {t("auth-plugin.limitations.advanced-rbac")}</li>
              <li>• {t("auth-plugin.limitations.server-sessions")}</li>
              <li>• {t("auth-plugin.limitations.token-refresh")}</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("auth-plugin.troubleshooting.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("auth-plugin.troubleshooting.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">{t("auth-plugin.troubleshooting.common-issues")}</h4>
            
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("auth-plugin.troubleshooting.login-fails")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("auth-plugin.troubleshooting.check-oauth-config")}</li>
                <li>• {t("auth-plugin.troubleshooting.verify-org-permission")}</li>
                <li>• {t("auth-plugin.troubleshooting.ensure-org-membership")}</li>
              </ul>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("auth-plugin.troubleshooting.token-errors")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("auth-plugin.troubleshooting.check-env-vars")}</li>
                <li>• {t("auth-plugin.troubleshooting.verify-callback-url")}</li>
                <li>• {t("auth-plugin.troubleshooting.clear-localstorage")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>{t("auth-plugin.next-steps.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("auth-plugin.next-steps.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-start space-y-2"
              onClick={() => onSectionChange('aws-plugin')}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span className="font-semibold">{t("auth-plugin.next-steps.configure-aws")}</span>
              </div>
              <span className="text-sm text-muted-foreground text-left">
                {t("auth-plugin.next-steps.configure-aws-desc")}
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-start space-y-2"
              onClick={() => onSectionChange('kubernetes-plugin')}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span className="font-semibold">{t("auth-plugin.next-steps.configure-k8s")}</span>
              </div>
              <span className="text-sm text-muted-foreground text-left">
                {t("auth-plugin.next-steps.configure-k8s-desc")}
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
