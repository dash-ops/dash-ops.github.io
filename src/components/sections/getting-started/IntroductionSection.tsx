import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FeatureCard } from "@/components/layout/FeatureCard"
import { Rocket, Puzzle, Code, Zap, Shield, Cloud } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/LanguageContext"

interface IntroductionSectionProps {
  onSectionChange: (section: string) => void
}

export function IntroductionSection({ onSectionChange }: IntroductionSectionProps) {
  const { t } = useLanguage()
  
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Badge variant="destructive" className="mb-4">
            {t("intro.beta-badge")}
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          {t("intro.title")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t("intro.subtitle")}
        </p>
      </div>

      {/* Alert */}
      <Alert>
        <Zap className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("intro.experimental-warning")}</strong>
        </AlertDescription>
      </Alert>

      {/* Quick Start Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title={t("intro.getting-started.title")}
          description={t("intro.getting-started.desc")}
          icon={Rocket}
          actionText={t("intro.getting-started.action")}
          onAction={() => onSectionChange('installation')}
          variant="primary"
        />
        
        <FeatureCard
          title={t("intro.plugins.title")}
          description={t("intro.plugins.desc")}
          icon={Puzzle}
          actionText={t("intro.plugins.action")}
          onAction={() => onSectionChange('plugins-overview')}
        />
        
        <FeatureCard
          title={t("intro.api.title")}
          description={t("intro.api.desc")}
          icon={Code}
          actionText={t("intro.api.action")}
          onAction={() => onSectionChange('api-intro')}
        />
      </div>

      {/* Features Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>{t("intro.features.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("intro.features.subtitle")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Cloud className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold">{t("intro.features.multi-cloud.title")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("intro.features.multi-cloud.desc")}
                </p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold">{t("intro.features.security.title")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("intro.features.security.desc")}
                </p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold">{t("intro.features.ai.title")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("intro.features.ai.desc")}
                </p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Puzzle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h4 className="font-semibold">{t("intro.features.plugins.title")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("intro.features.plugins.desc")}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
