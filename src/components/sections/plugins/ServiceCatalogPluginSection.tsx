import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Settings, AlertTriangle, Key, Users, Database, Activity } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/LanguageContext"

interface ServiceCatalogPluginSectionProps {
  onSectionChange: (section: string) => void
}

export function ServiceCatalogPluginSection({ onSectionChange }: ServiceCatalogPluginSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("service-catalog-plugin.title")}</h1>
        <p className="text-muted-foreground">
          {t("service-catalog-plugin.subtitle")}
        </p>
        <Badge variant="secondary" className="mt-2">🔄 {t("service-catalog-plugin.status")}</Badge>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("service-catalog-plugin.warning")}</strong>
        </AlertDescription>
      </Alert>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>{t("service-catalog-plugin.features.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("service-catalog-plugin.features.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex space-x-3">
              <Database className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("service-catalog-plugin.features.service-registry")}</h4>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.features.service-registry-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Activity className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("service-catalog-plugin.features.k8s-integration")}</h4>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.features.k8s-integration-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Users className="h-5 w-5 text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("service-catalog-plugin.features.team-organization")}</h4>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.features.team-organization-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Settings className="h-5 w-5 text-orange-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("service-catalog-plugin.features.service-tiers")}</h4>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.features.service-tiers-desc")}</p>
              </div>
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
        <CardContent className="space-y-6">
          {/* Basic Plugin Setup */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">1</Badge>
              <span>{t("service-catalog-plugin.config.basic-setup")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                plugins:<br/>
                &nbsp;&nbsp;- &apos;ServiceCatalog&apos;<br/>
                <br/>
                service-catalog:<br/>
                &nbsp;&nbsp;storage:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;provider: &apos;filesystem&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;filesystem:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;directory: &apos;./services&apos;<br/>
                &nbsp;&nbsp;versioning:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;enabled: true<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;provider: &apos;simple&apos;
              </code>
            </div>
          </div>

          {/* GitHub Integration */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">2</Badge>
              <span>{t("service-catalog-plugin.config.github-integration")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                plugins:<br/>
                &nbsp;&nbsp;- &apos;Auth&apos; # Required for GitHub teams<br/>
                &nbsp;&nbsp;- &apos;ServiceCatalog&apos;<br/>
                <br/>
                auth:<br/>
                &nbsp;&nbsp;github:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clientId: $&#123;GITHUB_CLIENT_ID&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clientSecret: $&#123;GITHUB_CLIENT_SECRET&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;org: &apos;your-organization&apos;
              </code>
            </div>
          </div>

          {/* Kubernetes Integration */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">3</Badge>
              <span>{t("service-catalog-plugin.config.k8s-integration")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                plugins:<br/>
                &nbsp;&nbsp;- &apos;Auth&apos;<br/>
                &nbsp;&nbsp;- &apos;Kubernetes&apos;<br/>
                &nbsp;&nbsp;- &apos;ServiceCatalog&apos;<br/>
                <br/>
                kubernetes:<br/>
                &nbsp;&nbsp;- name: &apos;Development&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;context: &apos;dev-cluster&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/config<br/>
                &nbsp;&nbsp;- name: &apos;Production&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;context: &apos;prod-cluster&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/config
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>{t("service-catalog-plugin.service-management.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("service-catalog-plugin.service-management.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">{t("service-catalog-plugin.service-management.structure")}</h4>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                apiVersion: v1<br/>
                kind: Service<br/>
                metadata:<br/>
                &nbsp;&nbsp;name: user-authentication<br/>
                &nbsp;&nbsp;tier: TIER-1<br/>
                &nbsp;&nbsp;created_at: &apos;2024-01-15T10:30:00Z&apos;<br/>
                &nbsp;&nbsp;created_by: &apos;john.doe&apos;<br/>
                &nbsp;&nbsp;version: 3<br/>
                <br/>
                spec:<br/>
                &nbsp;&nbsp;description: &apos;User authentication service&apos;<br/>
                &nbsp;&nbsp;team:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;github_team: &apos;auth-squad&apos;<br/>
                &nbsp;&nbsp;business:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;impact: &apos;high&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;sla_target: &apos;99.9%&apos;<br/>
                &nbsp;&nbsp;kubernetes:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;environments:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: &apos;production&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: &apos;prod-cluster&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;namespace: &apos;auth&apos;
              </code>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">{t("service-catalog-plugin.service-management.service-tiers")}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg">
                <Badge variant="destructive" className="mb-2">TIER-1</Badge>
                <h5 className="font-semibold">{t("service-catalog-plugin.service-management.tier1-title")}</h5>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.service-management.tier1-desc")}</p>
              </div>
              
              <div className="p-3 border rounded-lg">
                <Badge variant="default" className="mb-2">TIER-2</Badge>
                <h5 className="font-semibold">{t("service-catalog-plugin.service-management.tier2-title")}</h5>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.service-management.tier2-desc")}</p>
              </div>
              
              <div className="p-3 border rounded-lg">
                <Badge variant="secondary" className="mb-2">TIER-3</Badge>
                <h5 className="font-semibold">{t("service-catalog-plugin.service-management.tier3-title")}</h5>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.service-management.tier3-desc")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>{t("service-catalog-plugin.health.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("service-catalog-plugin.health.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">{t("service-catalog-plugin.health.k8s-integration")}</h4>
            <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.health.k8s-integration-desc")}</p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">{t("service-catalog-plugin.health.health-indicators")}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">{t("service-catalog-plugin.health.healthy")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">{t("service-catalog-plugin.health.drift")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium">{t("service-catalog-plugin.health.degraded")}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">{t("service-catalog-plugin.health.critical")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium">{t("service-catalog-plugin.health.down")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-sm font-medium">{t("service-catalog-plugin.health.unknown")}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Storage & Versioning */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>{t("service-catalog-plugin.storage.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("service-catalog-plugin.storage.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">{t("service-catalog-plugin.storage.providers")}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg">
                <h5 className="font-semibold">{t("service-catalog-plugin.storage.filesystem")}</h5>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.storage.filesystem-desc")}</p>
              </div>
              
              <div className="p-3 border rounded-lg">
                <h5 className="font-semibold">{t("service-catalog-plugin.storage.github")}</h5>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.storage.github-desc")}</p>
              </div>
              
              <div className="p-3 border rounded-lg">
                <h5 className="font-semibold">{t("service-catalog-plugin.storage.s3")}</h5>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.storage.s3-desc")}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">{t("service-catalog-plugin.storage.versioning-providers")}</h4>
            <div className="space-y-2">
              <div className="p-3 bg-muted rounded-lg">
                <h5 className="font-semibold">{t("service-catalog-plugin.storage.git-versioning")}</h5>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.storage.git-versioning-desc")}</p>
              </div>
              
              <div className="p-3 bg-muted rounded-lg">
                <h5 className="font-semibold">{t("service-catalog-plugin.storage.simple-versioning")}</h5>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.storage.simple-versioning-desc")}</p>
              </div>
              
              <div className="p-3 bg-muted rounded-lg">
                <h5 className="font-semibold">{t("service-catalog-plugin.storage.no-versioning")}</h5>
                <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.storage.no-versioning-desc")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security & Permissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5" />
            <span>{t("service-catalog-plugin.security.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("service-catalog-plugin.security.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">{t("service-catalog-plugin.security.authentication-requirements")}</h4>
            <p className="text-sm text-muted-foreground">{t("service-catalog-plugin.security.authentication-requirements-desc")}</p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">{t("service-catalog-plugin.security.permission-model")}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border rounded-lg">
                <h5 className="font-semibold text-green-600">{t("service-catalog-plugin.security.read-permissions")}</h5>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  <li>• {t("service-catalog-plugin.security.org-members")}</li>
                  <li>• {t("service-catalog-plugin.security.team-members")}</li>
                </ul>
              </div>
              
              <div className="p-3 border rounded-lg">
                <h5 className="font-semibold text-blue-600">{t("service-catalog-plugin.security.write-permissions")}</h5>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  <li>• {t("service-catalog-plugin.security.service-owners")}</li>
                  <li>• {t("service-catalog-plugin.security.github-teams")}</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Beta Limitations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("service-catalog-plugin.limitations.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("service-catalog-plugin.limitations.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-red-600">{t("service-catalog-plugin.limitations.not-production")}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t("service-catalog-plugin.limitations.basic-error-recovery")}</li>
              <li>• {t("service-catalog-plugin.limitations.no-data-persistence")}</li>
              <li>• {t("service-catalog-plugin.limitations.basic-security")}</li>
              <li>• {t("service-catalog-plugin.limitations.missing-monitoring")}</li>
              <li>• {t("service-catalog-plugin.limitations.no-plugin-isolation")}</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("service-catalog-plugin.troubleshooting.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("service-catalog-plugin.troubleshooting.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("service-catalog-plugin.troubleshooting.services-not-appearing")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("service-catalog-plugin.troubleshooting.check-github-auth")}</li>
                <li>• {t("service-catalog-plugin.troubleshooting.verify-org-membership")}</li>
                <li>• {t("service-catalog-plugin.troubleshooting.confirm-service-files")}</li>
                <li>• {t("service-catalog-plugin.troubleshooting.check-file-permissions")}</li>
              </ul>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("service-catalog-plugin.troubleshooting.health-status-unknown")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("service-catalog-plugin.troubleshooting.verify-k8s-plugin")}</li>
                <li>• {t("service-catalog-plugin.troubleshooting.check-k8s-context")}</li>
                <li>• {t("service-catalog-plugin.troubleshooting.confirm-deployment-names")}</li>
                <li>• {t("service-catalog-plugin.troubleshooting.validate-namespace-permissions")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
