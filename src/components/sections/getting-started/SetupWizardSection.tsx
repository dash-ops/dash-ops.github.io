import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Wand2, CheckCircle, Shield, Settings, AlertTriangle, Info, Code, RefreshCw } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface SetupWizardSectionProps {
  onSectionChange: (section: string) => void
}

export function SetupWizardSection({ onSectionChange }: SetupWizardSectionProps) {
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

      {/* Three Usage Scenarios */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">{t("setup.scenarios.title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Scenario 1: First-Time Setup */}
          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wand2 className="h-5 w-5 text-green-600" />
                <span>{t("setup.scenario-1-title")}</span>
              </CardTitle>
              <CardDescription>
                {t("setup.scenario-1-desc")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge variant="default">{t("setup.automatic")}</Badge>
              <p className="text-sm text-muted-foreground">
                {t("setup.scenario-1-details")}
              </p>
              <div className="bg-muted p-3 rounded text-sm space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>{t("setup.scenario-1-step-1")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>{t("setup.scenario-1-step-2")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>{t("setup.scenario-1-step-3")}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scenario 2: Update Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <RefreshCw className="h-5 w-5 text-blue-600" />
                <span>{t("setup.scenario-2-title")}</span>
              </CardTitle>
              <CardDescription>
                {t("setup.scenario-2-desc")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge variant="secondary">{t("setup.anytime")}</Badge>
              <p className="text-sm text-muted-foreground">
                {t("setup.scenario-2-details")}
              </p>
              <div className="bg-muted p-3 rounded text-sm">
                <code>
                  Dashboard → Settings → {t("setup.update-credentials")}
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Scenario 3: Manual YAML */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-orange-600" />
                <span>{t("setup.scenario-3-title")}</span>
              </CardTitle>
              <CardDescription>
                {t("setup.scenario-3-desc")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge variant="outline">{t("setup.advanced")}</Badge>
              <p className="text-sm text-muted-foreground">
                {t("setup.scenario-3-details")}
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onSectionChange('advanced-config')}
              >
                {t("setup.yaml-reference")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Setup Wizard Walkthrough */}
      <Card>
        <CardHeader>
          <CardTitle>{t("setup.wizard-walkthrough.title")}</CardTitle>
          <CardDescription>
            {t("setup.wizard-walkthrough.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tab Overview */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">{t("setup.configuration-tabs")}</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">1</Badge>
                  <span>{t("setup.tab-general")}</span>
                  <Badge variant="secondary" className="text-xs">{t("setup.basic")}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">2</Badge>
                  <span>{t("setup.tab-plugins")}</span>
                  <Badge variant="secondary" className="text-xs">{t("setup.select-features")}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">3</Badge>
                  <span>{t("setup.tab-auth")}</span>
                  <Badge variant="destructive" className="text-xs">{t("setup.required")}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">4</Badge>
                  <span>{t("setup.tab-kubernetes")}</span>
                  <Badge variant="outline" className="text-xs">{t("setup.optional")}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">5</Badge>
                  <span>{t("setup.tab-aws")}</span>
                  <Badge variant="outline" className="text-xs">{t("setup.optional")}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">6</Badge>
                  <span>{t("setup.tab-service-catalog")}</span>
                  <Badge variant="outline" className="text-xs">{t("setup.optional")}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">7</Badge>
                  <span>{t("setup.tab-observability")}</span>
                  <Badge variant="outline" className="text-xs">{t("setup.optional")}</Badge>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">{t("setup.key-features")}</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>{t("setup.feature-dynamic-tabs")}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>{t("setup.feature-live-validation")}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>{t("setup.feature-secret-masking")}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>{t("setup.feature-auto-save")}</span>
                </div>
              </div>
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

      {/* Configuration File */}
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

          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onSectionChange('advanced-config')}
          >
            {t("setup.view-yaml-reference")}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
