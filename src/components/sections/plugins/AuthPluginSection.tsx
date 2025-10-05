import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Zap, Settings, Wrench } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface AuthPluginSectionProps {
  onSectionChange: (section: string) => void
}

export function AuthPluginSection({ onSectionChange }: AuthPluginSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold tracking-tight">{t("auth-plugin.title")}</h1>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {t("auth-plugin.status")}
          </Badge>
        </div>
        <p className="text-muted-foreground text-lg">{t("auth-plugin.subtitle")}</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-800">{t("auth-plugin.warning")}</p>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>{t("auth-plugin.features.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("auth-plugin.features.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">{t("auth-plugin.features.github-oauth")}</h4>
              <p className="text-sm text-muted-foreground">{t("auth-plugin.features.github-oauth-desc")}</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">{t("auth-plugin.features.session-management")}</h4>
              <p className="text-sm text-muted-foreground">{t("auth-plugin.features.session-management-desc")}</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">{t("auth-plugin.features.team-permissions")}</h4>
              <p className="text-sm text-muted-foreground">{t("auth-plugin.features.team-permissions-desc")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>{t("auth-plugin.config.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("auth-plugin.config.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">{t("auth-plugin.config.oauth-provider")}</h4>
              <div className="bg-muted p-4 rounded-lg mt-2">
                <code className="text-sm">
                  auth:<br/>
                  &nbsp;&nbsp;enabled: true<br/>
                  &nbsp;&nbsp;providers:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;github:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clientId: $&#123;GITHUB_CLIENT_ID&#125;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clientSecret: $&#123;GITHUB_CLIENT_SECRET&#125;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;organization: &apos;your-org&apos;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scopes: [&apos;read:org&apos;, &apos;read:user&apos;]
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Notice */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <span>Importante: Segurança Beta</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <p className="text-sm text-orange-800 font-semibold">
                  ⚠️ Aviso Beta: A implementação de segurança atual é básica e NÃO é adequada para ambientes de produção.
                </p>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Tokens armazenados em localStorage (inseguro para produção)</li>
                  <li>• Sistema de permissão rudimentar</li>
                  <li>• Sem limitação de taxa nos endpoints da API</li>
                  <li>• Log de auditoria limitado</li>
                </ul>
                <p className="text-sm text-orange-800 mt-2">
                  <strong>Use apenas para testes e desenvolvimento!</strong>
                </p>
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
            <span>{t("auth-plugin.troubleshooting.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("auth-plugin.troubleshooting.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-red-600">{t("auth-plugin.troubleshooting.login-failed")}</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• {t("auth-plugin.troubleshooting.verify-credentials")}</li>
                <li>• {t("auth-plugin.troubleshooting.check-callback-url")}</li>
                <li>• {t("auth-plugin.troubleshooting.check-backend-logs")}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-600">{t("auth-plugin.troubleshooting.permission-denied")}</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• {t("auth-plugin.troubleshooting.verify-org-membership")}</li>
                <li>• {t("auth-plugin.troubleshooting.validate-team-membership")}</li>
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
                Para detalhes técnicos avançados, configurações de segurança e guias de desenvolvimento, 
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
