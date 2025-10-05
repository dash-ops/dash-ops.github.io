import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Play, Terminal, ExternalLink, ArrowRight, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/LanguageContext"

interface FirstDeploySectionProps {
  onSectionChange: (section: string) => void
}

export function FirstDeploySection({ onSectionChange }: FirstDeploySectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("deploy.title")}</h1>
        <p className="text-muted-foreground">
          {t("deploy.subtitle")}
        </p>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("deploy.warning")}</strong>
        </AlertDescription>
      </Alert>

      {/* Prerequisites */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>{t("deploy.prerequisites.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("deploy.prerequisites.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">{t("deploy.prerequisites.basic")}</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">✅</Badge>
                  <span className="text-sm">{t("deploy.prerequisites.auth-setup")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">✅</Badge>
                  <span className="text-sm">{t("deploy.prerequisites.config-file")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">✅</Badge>
                  <span className="text-sm">{t("deploy.prerequisites.env-vars")}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">{t("deploy.prerequisites.optional")}</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">AWS</Badge>
                  <span className="text-sm">{t("deploy.prerequisites.aws-plugin")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">K8s</Badge>
                  <span className="text-sm">{t("deploy.prerequisites.k8s-plugin")}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Deployment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>{t("deploy.steps.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("deploy.steps.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Start Backend */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">1</Badge>
              <span>{t("deploy.steps.start-backend")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">{t("deploy.steps.terminal-1")}</span>
              </div>
              <code className="text-sm">
                go run main.go
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("deploy.steps.backend-success")}
            </p>
          </div>

          {/* Step 2: Start Frontend */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">2</Badge>
              <span>{t("deploy.steps.start-frontend")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">{t("deploy.steps.terminal-2")}</span>
              </div>
              <code className="text-sm">
                cd front<br/>
                yarn dev
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("deploy.steps.frontend-success")}
            </p>
          </div>

          {/* Step 3: Access Application */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">3</Badge>
              <span>{t("deploy.steps.access-app")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm font-medium">{t("deploy.steps.open-browser")}</span>
              </div>
              <code className="text-sm">
                http://localhost:5173
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("deploy.steps.access-desc")}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What You'll See */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>{t("deploy.interface.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("deploy.interface.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="font-semibold">{t("deploy.interface.login-screen")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("deploy.interface.login-desc")}</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="font-semibold">{t("deploy.interface.dashboard")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("deploy.interface.dashboard-desc")}</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="font-semibold">{t("deploy.interface.plugins")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("deploy.interface.plugins-desc")}</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="font-semibold">{t("deploy.interface.navigation")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("deploy.interface.navigation-desc")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ArrowRight className="h-5 w-5" />
            <span>{t("deploy.next-steps.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("deploy.next-steps.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-start space-y-2"
              onClick={() => onSectionChange('plugins-overview')}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span className="font-semibold">{t("deploy.next-steps.configure-plugins")}</span>
              </div>
              <span className="text-sm text-muted-foreground text-left">
                {t("deploy.next-steps.configure-plugins-desc")}
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-start space-y-2"
              onClick={() => onSectionChange('api-intro')}
            >
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <span className="font-semibold">{t("deploy.next-steps.explore-api")}</span>
              </div>
              <span className="text-sm text-muted-foreground text-left">
                {t("deploy.next-steps.explore-api-desc")}
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("deploy.troubleshooting.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("deploy.troubleshooting.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">{t("deploy.troubleshooting.common-issues")}</h4>
            <div className="space-y-2">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium">{t("deploy.troubleshooting.port-in-use")}</p>
                <p className="text-sm text-muted-foreground">{t("deploy.troubleshooting.port-solution")}</p>
              </div>
              
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium">{t("deploy.troubleshooting.auth-fails")}</p>
                <p className="text-sm text-muted-foreground">{t("deploy.troubleshooting.auth-solution")}</p>
              </div>
              
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium">{t("deploy.troubleshooting.frontend-errors")}</p>
                <p className="text-sm text-muted-foreground">{t("deploy.troubleshooting.frontend-solution")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
