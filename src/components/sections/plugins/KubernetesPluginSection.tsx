import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Zap, Settings, Wrench } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface KubernetesPluginSectionProps {
  onSectionChange: (section: string) => void
}

export function KubernetesPluginSection({ onSectionChange }: KubernetesPluginSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold tracking-tight">{t("k8s-plugin.title")}</h1>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            {t("k8s-plugin.status")}
          </Badge>
        </div>
        <p className="text-muted-foreground text-lg">{t("k8s-plugin.subtitle")}</p>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-orange-800">{t("k8s-plugin.warning")}</p>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>{t("k8s-plugin.features.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.features.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">{t("k8s-plugin.features.multi-cluster")}</h4>
              <p className="text-sm text-muted-foreground">{t("k8s-plugin.features.multi-cluster-desc")}</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">{t("k8s-plugin.features.workload")}</h4>
              <p className="text-sm text-muted-foreground">{t("k8s-plugin.features.workload-desc")}</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">{t("k8s-plugin.features.logs")}</h4>
              <p className="text-sm text-muted-foreground">{t("k8s-plugin.features.logs-desc")}</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">{t("k8s-plugin.features.deployment")}</h4>
              <p className="text-sm text-muted-foreground">{t("k8s-plugin.features.deployment-desc")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>{t("k8s-plugin.config.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.config.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">{t("k8s-plugin.config.cluster-access")}</h4>
              <div className="bg-muted p-4 rounded-lg mt-2">
                <code className="text-sm">
                  kubernetes:<br/>
                  &nbsp;&nbsp;enabled: true<br/>
                  &nbsp;&nbsp;clusters:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- name: &apos;Development&apos;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: &quot;/path/to/kubeconfig&quot;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;team_permissions:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- team: &apos;developers&apos;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;namespaces: [&apos;default&apos;, &apos;dev&apos;]<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restart: [&apos;dash-ops*developers&apos;]
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
            <span>{t("k8s-plugin.troubleshooting.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.troubleshooting.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-red-600">{t("k8s-plugin.troubleshooting.connection-failed")}</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• {t("k8s-plugin.troubleshooting.verify-kubeconfig")}</li>
                <li>• {t("k8s-plugin.troubleshooting.check-context")}</li>
                <li>• {t("k8s-plugin.troubleshooting.test-cluster-access")}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-600">{t("k8s-plugin.troubleshooting.permission-denied")}</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• {t("k8s-plugin.troubleshooting.verify-rbac")}</li>
                <li>• {t("k8s-plugin.troubleshooting.check-service-account")}</li>
                <li>• {t("k8s-plugin.troubleshooting.validate-team-membership")}</li>
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
                Para detalhes técnicos avançados, configurações RBAC, e guias de desenvolvimento, 
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
