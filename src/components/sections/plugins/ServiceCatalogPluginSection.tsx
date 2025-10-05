import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Zap, Settings, Wrench } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface ServiceCatalogPluginSectionProps {
  onSectionChange: (section: string) => void
}

export function ServiceCatalogPluginSection({ onSectionChange }: ServiceCatalogPluginSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold tracking-tight">{t("service-catalog-plugin.title")}</h1>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {t("service-catalog-plugin.status")}
          </Badge>
        </div>
        <p className="text-muted-foreground text-lg">{t("service-catalog-plugin.subtitle")}</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-800">{t("service-catalog-plugin.warning")}</p>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>{t("service-catalog-plugin.features.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("service-catalog-plugin.features.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">{t("service-catalog-plugin.features.service-registry")}</h4>
              <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.features.service-registry-desc")}</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">{t("service-catalog-plugin.features.team-ownership")}</h4>
              <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.features.team-ownership-desc")}</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">{t("service-catalog-plugin.features.health-monitoring")}</h4>
              <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.features.health-monitoring-desc")}</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">{t("service-catalog-plugin.features.multi-environment")}</h4>
              <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.features.multi-environment-desc")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>{t("service-catalog-plugin.config.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("service-catalog-plugin.config.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">{t("service-catalog-plugin.config.storage")}</h4>
              <div className="bg-muted p-4 rounded-lg mt-2">
                <code className="text-sm">
                  service_catalog:<br/>
                  &nbsp;&nbsp;enabled: true<br/>
                  &nbsp;&nbsp;storage:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;type: &apos;filesystem&apos;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;path: &apos;./services&apos;<br/>
                  &nbsp;&nbsp;integrations:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;kubernetes:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabled: true<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;github:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabled: true
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wrench className="h-5 w-5" />
            <span>{t("service-catalog-plugin.troubleshooting.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("service-catalog-plugin.troubleshooting.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-red-600">{t("service-catalog-plugin.troubleshooting.service-not-found")}</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• {t("service-catalog-plugin.troubleshooting.verify-path")}</li>
                <li>• {t("service-catalog-plugin.troubleshooting.check-yaml")}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-600">{t("service-catalog-plugin.troubleshooting.permission-denied")}</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• {t("service-catalog-plugin.troubleshooting.verify-github-team")}</li>
                <li>• {t("service-catalog-plugin.troubleshooting.validate-team-membership")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Próximos Passos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Documentação Técnica</h4>
              <p className="text-sm text-muted-foreground">
                Para detalhes técnicos avançados, integrações e guias de desenvolvimento, 
                consulte a documentação no repositório principal.
              </p>
              <button 
                onClick={() => onSectionChange("plugin-development")}
                className="text-primary hover:underline text-sm"
              >
                Guia de Desenvolvimento →
              </button>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Contribuir</h4>
              <p className="text-sm text-muted-foreground">
                Este plugin está em desenvolvimento ativo. Contribuições são bem-vindas!
              </p>
              <button 
                onClick={() => onSectionChange("contributing")}
                className="text-primary hover:underline text-sm"
              >
                Como Contribuir →
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
