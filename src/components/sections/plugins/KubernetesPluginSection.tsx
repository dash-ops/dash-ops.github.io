import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, AlertTriangle, CheckCircle, ExternalLink, Key, Settings, Server, Activity } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/LanguageContext"

interface KubernetesPluginSectionProps {
  onSectionChange: (section: string) => void
}

export function KubernetesPluginSection({ onSectionChange }: KubernetesPluginSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("k8s-plugin.title")}</h1>
        <p className="text-muted-foreground">
          {t("k8s-plugin.subtitle")}
        </p>
        <Badge variant="secondary" className="mt-2">🔄 {t("k8s-plugin.status")}</Badge>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("k8s-plugin.warning")}</strong>
        </AlertDescription>
      </Alert>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Cpu className="h-5 w-5" />
            <span>{t("k8s-plugin.features.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.features.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex space-x-3">
              <Server className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("k8s-plugin.features.multi-cluster")}</h4>
                <p className="text-sm text-muted-foreground">{t("k8s-plugin.features.multi-cluster-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Activity className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("k8s-plugin.features.workload")}</h4>
                <p className="text-sm text-muted-foreground">{t("k8s-plugin.features.workload-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Cpu className="h-5 w-5 text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("k8s-plugin.features.logs")}</h4>
                <p className="text-sm text-muted-foreground">{t("k8s-plugin.features.logs-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Settings className="h-5 w-5 text-orange-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("k8s-plugin.features.deployment")}</h4>
                <p className="text-sm text-muted-foreground">{t("k8s-plugin.features.deployment-desc")}</p>
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
            <span>{t("k8s-plugin.config.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.config.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Cluster Access Setup */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">1</Badge>
              <span>{t("k8s-plugin.config.cluster-access")}</span>
            </h3>
            
            <div className="space-y-3">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t("k8s-plugin.config.external")}</h4>
                <code className="text-sm">
                  plugins:<br/>
                  &nbsp;&nbsp;- &apos;Kubernetes&apos;<br/>
                  <br/>
                  kubernetes:<br/>
                  &nbsp;&nbsp;- name: &apos;Development Cluster&apos;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/config<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;context: &apos;dev-cluster-context&apos;
                </code>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t("k8s-plugin.config.in-cluster")}</h4>
                <code className="text-sm">
                  kubernetes:<br/>
                  &nbsp;&nbsp;- name: &apos;Current Cluster&apos;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: # Empty - uses in-cluster service account
                </code>
              </div>
            </div>
          </div>

          {/* Permission Configuration */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">2</Badge>
              <span>{t("k8s-plugin.config.permissions")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                kubernetes:<br/>
                &nbsp;&nbsp;- name: &apos;Development Cluster&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/config<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;context: &apos;dev&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;permission:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deployments:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;namespaces: [&apos;default&apos;, &apos;dev&apos;, &apos;staging&apos;]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restart: [&apos;dash-ops*developers&apos;, &apos;dash-ops*sre&apos;]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scale: [&apos;dash-ops*developers&apos;, &apos;dash-ops*sre&apos;]
              </code>
            </div>
          </div>

          {/* Multi-Environment Setup */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">3</Badge>
              <span>{t("k8s-plugin.config.multi-env")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                kubernetes:<br/>
                &nbsp;&nbsp;- name: &apos;Development&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/config<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;context: &apos;dev&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;permission:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deployments:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;namespaces: [&apos;default&apos;, &apos;dev&apos;]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restart: [&apos;dash-ops*developers&apos;]<br/>
                <br/>
                &nbsp;&nbsp;- name: &apos;Production (Read-Only)&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/config<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;context: &apos;prod&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;# No permission block = read-only access
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cluster Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Server className="h-5 w-5" />
            <span>{t("k8s-plugin.operations.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.operations.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">{t("k8s-plugin.operations.cluster-overview")}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• {t("k8s-plugin.operations.node-status")}</li>
                <li>• {t("k8s-plugin.operations.namespace-list")}</li>
                <li>• {t("k8s-plugin.operations.cluster-info")}</li>
                <li>• {t("k8s-plugin.operations.resource-quotas")}</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">{t("k8s-plugin.operations.workload-management")}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• {t("k8s-plugin.operations.deployments")}</li>
                <li>• {t("k8s-plugin.operations.pods")}</li>
                <li>• {t("k8s-plugin.operations.services")}</li>
                <li>• {t("k8s-plugin.operations.ingress")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monitoring & Observability */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>{t("k8s-plugin.monitoring.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.monitoring.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">{t("k8s-plugin.monitoring.real-time-metrics")}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• {t("k8s-plugin.monitoring.cluster-health")}</li>
                <li>• {t("k8s-plugin.monitoring.resource-usage")}</li>
                <li>• {t("k8s-plugin.monitoring.pod-status")}</li>
                <li>• {t("k8s-plugin.monitoring.event-monitoring")}</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">{t("k8s-plugin.monitoring.log-management")}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• {t("k8s-plugin.monitoring.pod-log-streaming")}</li>
                <li>• {t("k8s-plugin.monitoring.multi-container-support")}</li>
                <li>• {t("k8s-plugin.monitoring.log-filtering")}</li>
                <li>• {t("k8s-plugin.monitoring.download-logs")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security & Permissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5" />
            <span>{t("k8s-plugin.security.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.security.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">{t("k8s-plugin.security.rbac-requirements")}</h4>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                apiVersion: rbac.authorization.k8s.io/v1<br/>
                kind: ClusterRole<br/>
                metadata:<br/>
                &nbsp;&nbsp;name: dashops-reader<br/>
                rules:<br/>
                &nbsp;&nbsp;- apiGroups: [&apos;&apos;]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;resources: [&apos;pods&apos;, &apos;nodes&apos;, &apos;namespaces&apos;, &apos;services&apos;]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;verbs: [&apos;get&apos;, &apos;list&apos;, &apos;watch&apos;]<br/>
                &nbsp;&nbsp;- apiGroups: [&apos;apps&apos;]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;resources: [&apos;deployments&apos;, &apos;replicasets&apos;]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;verbs: [&apos;get&apos;, &apos;list&apos;, &apos;watch&apos;]
              </code>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">{t("k8s-plugin.security.team-access-control")}</h4>
            <div className="bg-muted p-3 rounded text-sm">
              <code>
                kubernetes:<br/>
                &nbsp;&nbsp;- name: &apos;Production Cluster&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;permission:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deployments:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;namespaces: [&apos;api&apos;, &apos;worker&apos;]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restart: [&apos;dash-ops*sre&apos;]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scale: [&apos;dash-ops*sre&apos;, &apos;dash-ops*ops&apos;]
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alpha Limitations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("k8s-plugin.limitations.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.limitations.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-red-600">{t("k8s-plugin.limitations.not-production")}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t("k8s-plugin.limitations.limited-operations")}</li>
              <li>• {t("k8s-plugin.limitations.no-resource-quotas")}</li>
              <li>• {t("k8s-plugin.limitations.basic-error-handling")}</li>
              <li>• {t("k8s-plugin.limitations.no-backup-restore")}</li>
              <li>• {t("k8s-plugin.limitations.missing-monitoring")}</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold">{t("k8s-plugin.limitations.security-limitations")}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t("k8s-plugin.limitations.basic-rbac")}</li>
              <li>• {t("k8s-plugin.limitations.no-audit-trail")}</li>
              <li>• {t("k8s-plugin.limitations.credential-exposure")}</li>
              <li>• {t("k8s-plugin.limitations.no-network-policies")}</li>
              <li>• {t("k8s-plugin.limitations.no-admission-control")}</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Testing Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>{t("k8s-plugin.testing.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.testing.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>{t("k8s-plugin.testing.warning")}</strong>
            </AlertDescription>
          </Alert>
          
          <div className="space-y-3">
            <h4 className="font-semibold">{t("k8s-plugin.testing.safe-practices")}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t("k8s-plugin.testing.dedicated-test-clusters")}</li>
              <li>• {t("k8s-plugin.testing.limited-permissions")}</li>
              <li>• {t("k8s-plugin.testing.resource-limits")}</li>
              <li>• {t("k8s-plugin.testing.monitoring")}</li>
            </ul>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{t("k8s-plugin.testing.test-config")}</h4>
            <code className="text-sm">
              kubernetes:<br/>
              &nbsp;&nbsp;- name: &apos;Development Testing&apos;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;kubeconfig: $&#123;HOME&#125;/.kube/dev-config<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;context: &apos;dev-cluster&apos;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;permission:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deployments:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;namespaces: [&apos;test&apos;, &apos;development&apos;]<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restart: [&apos;dash-ops*developers&apos;]<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scale: [&apos;dash-ops*developers&apos;]
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("k8s-plugin.troubleshooting.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("k8s-plugin.troubleshooting.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("k8s-plugin.troubleshooting.connection-failed")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("k8s-plugin.troubleshooting.verify-kubeconfig")}</li>
                <li>• {t("k8s-plugin.troubleshooting.check-context")}</li>
                <li>• {t("k8s-plugin.troubleshooting.test-cluster-access")}</li>
              </ul>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("k8s-plugin.troubleshooting.permission-denied")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("k8s-plugin.troubleshooting.verify-rbac")}</li>
                <li>• {t("k8s-plugin.troubleshooting.check-service-account")}</li>
                <li>• {t("k8s-plugin.troubleshooting.validate-team-membership")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
