import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Rocket, CheckCircle, Terminal, Wand2, AlertTriangle, ExternalLink, Github, Code } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface QuickStartSectionProps {
  onSectionChange: (section: string) => void
}

export function QuickStartSection({ onSectionChange }: QuickStartSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("quick-start.title")}</h1>
        <p className="text-muted-foreground">
          {t("quick-start.subtitle")}
        </p>
        <Badge variant="secondary" className="mt-2">⚡ {t("quick-start.fast-badge")}</Badge>
      </div>

      {/* Beta Warning */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("quick-start.beta-warning")}</strong>
        </AlertDescription>
      </Alert>

      {/* Prerequisites */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>{t("quick-start.prerequisites.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("quick-start.prerequisites.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 border rounded-lg">
              <Badge variant="outline" className="mb-2">Go 1.24+</Badge>
              <p className="text-xs text-muted-foreground">{t("quick-start.prereq-go")}</p>
            </div>
            <div className="p-3 border rounded-lg">
              <Badge variant="outline" className="mb-2">Node 18+</Badge>
              <p className="text-xs text-muted-foreground">{t("quick-start.prereq-node")}</p>
            </div>
            <div className="p-3 border rounded-lg">
              <Badge variant="outline" className="mb-2">Yarn 1.22+</Badge>
              <p className="text-xs text-muted-foreground">{t("quick-start.prereq-yarn")}</p>
            </div>
            <div className="p-3 border rounded-lg">
              <Badge variant="destructive" className="mb-2">{t("quick-start.required")}</Badge>
              <p className="text-xs text-muted-foreground">{t("quick-start.prereq-github")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3-Step Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Rocket className="h-5 w-5" />
            <span>{t("quick-start.steps.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("quick-start.steps.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Clone */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-7 h-7 rounded-full p-0 flex items-center justify-center text-base">
                1
              </Badge>
              <h3 className="text-lg font-semibold">{t("quick-start.step-1-title")}</h3>
            </div>
            <div className="pl-9 space-y-2">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Terminal className="h-4 w-4" />
                  <span className="text-sm font-medium">{t("quick-start.clone-repo")}</span>
                </div>
                <code className="text-sm">
                  git clone https://github.com/dash-ops/dash-ops.git<br/>
                  cd dash-ops
                </code>
              </div>
            </div>
          </div>

          {/* Step 2: Start Backend */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-7 h-7 rounded-full p-0 flex items-center justify-center text-base">
                2
              </Badge>
              <h3 className="text-lg font-semibold">{t("quick-start.step-2-title")}</h3>
            </div>
            <div className="pl-9 space-y-2">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Terminal className="h-4 w-4" />
                  <span className="text-sm font-medium">{t("quick-start.terminal-1")}</span>
                </div>
                <code className="text-sm">
                  go run main.go
                </code>
              </div>
              <p className="text-sm text-muted-foreground">{t("quick-start.backend-running")}</p>
            </div>
          </div>

          {/* Step 3: Start Frontend */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-7 h-7 rounded-full p-0 flex items-center justify-center text-base">
                3
              </Badge>
              <h3 className="text-lg font-semibold">{t("quick-start.step-3-title")}</h3>
            </div>
            <div className="pl-9 space-y-2">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Terminal className="h-4 w-4" />
                  <span className="text-sm font-medium">{t("quick-start.terminal-2")}</span>
                </div>
                <code className="text-sm">
                  cd front<br/>
                  yarn && yarn dev
                </code>
              </div>
              <p className="text-sm text-muted-foreground">{t("quick-start.frontend-running")}</p>
            </div>
          </div>

          {/* What happens next */}
          <Alert className="border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
            <Wand2 className="h-4 w-4 text-green-600" />
            <AlertDescription>
              <strong className="text-green-900 dark:text-green-100">{t("quick-start.wizard-launches")}</strong> {t("quick-start.wizard-launches-desc")}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* What Happens Next */}
      <Card>
        <CardHeader>
          <CardTitle>{t("quick-start.what-next.title")}</CardTitle>
          <CardDescription>
            {t("quick-start.what-next.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {/* First Time User */}
            <div className="p-4 border-2 border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Wand2 className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold">{t("quick-start.first-time-user")}</h4>
                <Badge variant="default">{t("quick-start.automatic")}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {t("quick-start.first-time-desc")}
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onSectionChange('setup-wizard')}
              >
                {t("quick-start.learn-setup")} <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>

            {/* Returning User */}
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold">{t("quick-start.returning-user")}</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("quick-start.returning-desc")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GitHub OAuth Setup (Critical) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Github className="h-5 w-5" />
            <span>{t("quick-start.github-setup.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("quick-start.github-setup.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              {t("quick-start.github-setup.warning")}
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">1</Badge>
              <span className="text-sm font-medium">{t("quick-start.github-setup.step-1")}</span>
            </div>
            <div className="pl-8">
              <code className="text-sm bg-muted p-2 rounded">
                https://github.com/settings/developers
              </code>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">2</Badge>
              <span className="text-sm font-medium">{t("quick-start.github-setup.step-2")}</span>
            </div>
            <div className="pl-8 space-y-2">
              <div className="text-sm">
                <strong>{t("quick-start.github-setup.homepage")}</strong> <code className="bg-muted px-1 rounded">http://localhost:5173</code>
              </div>
              <div className="text-sm">
                <strong>{t("quick-start.github-setup.callback")}</strong> <code className="bg-muted px-1 rounded">http://localhost:8080/api/oauth/redirect</code>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">3</Badge>
              <span className="text-sm font-medium">{t("quick-start.github-setup.step-3")}</span>
            </div>
            <div className="pl-8">
              <p className="text-sm text-muted-foreground">{t("quick-start.github-setup.credentials-info")}</p>
            </div>
          </div>

          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer">
              {t("quick-start.github-setup.create-app")} <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>{t("quick-start.next-steps.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-start space-y-2"
              onClick={() => onSectionChange('setup-wizard')}
            >
              <div className="flex items-center space-x-2">
                <Wand2 className="h-4 w-4" />
                <span className="font-semibold">{t("quick-start.next-setup-wizard")}</span>
              </div>
              <span className="text-sm text-muted-foreground text-left">
                {t("quick-start.next-setup-wizard-desc")}
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-start space-y-2"
              onClick={() => onSectionChange('advanced-config')}
            >
              <div className="flex items-center space-x-2">
                <Code className="h-4 w-4" />
                <span className="font-semibold">{t("quick-start.next-advanced-config")}</span>
              </div>
              <span className="text-sm text-muted-foreground text-left">
                {t("quick-start.next-advanced-config-desc")}
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

