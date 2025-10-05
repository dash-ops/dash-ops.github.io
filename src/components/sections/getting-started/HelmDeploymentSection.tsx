import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/LanguageContext"
import {
  Container,
  Rocket,
  AlertTriangle,
  CheckCircle,
  Settings,
  FileCode,
  Terminal,
  ExternalLink
} from "lucide-react"

interface HelmDeploymentSectionProps {
  onSectionChange?: (section: string) => void
}

export function HelmDeploymentSection({ onSectionChange }: HelmDeploymentSectionProps) {
  const { t } = useLanguage()

  const CodeBlock = ({ children, language = "bash" }: { children: string, language?: string }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
      <code className={`language-${language} text-sm`}>{children}</code>
    </pre>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">
            <Container className="h-3 w-3 mr-1" />
            {t("helm.badge")}
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          {t("helm.title")}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t("helm.subtitle")}
        </p>
      </div>

      {/* Beta Warning */}
      <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800 dark:text-orange-200">
          {t("helm.beta-warning")}
        </AlertDescription>
      </Alert>

      {/* Prerequisites */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            {t("helm.prerequisites.title")}
          </CardTitle>
          <CardDescription>
            {t("helm.prerequisites.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              { name: "Kubernetes Cluster", version: "v1.24+", desc: t("helm.prerequisites.k8s") },
              { name: "Helm", version: "v3.8+", desc: t("helm.prerequisites.helm") },
              { name: "kubectl", version: "v1.24+", desc: t("helm.prerequisites.kubectl") }
            ].map((req, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{req.name}</span>
                    <Badge variant="outline" className="text-xs">{req.version}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            {t("helm.quickstart.title")}
          </CardTitle>
          <CardDescription>
            {t("helm.quickstart.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm flex items-center gap-2">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</span>
              {t("helm.quickstart.step1-title")}
            </h4>
            <CodeBlock>{`# Clone o repositório
git clone https://github.com/dash-ops/helm-charts.git
cd helm-charts`}</CodeBlock>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm flex items-center gap-2">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">2</span>
              {t("helm.quickstart.step2-title")}
            </h4>
            <CodeBlock language="yaml">{`# values.yaml
replicaCount: 1

image:
  repository: ghcr.io/dash-ops/dash-ops
  tag: latest
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 8080

ingress:
  enabled: true
  className: nginx
  hosts:
    - host: dash-ops.your-domain.com
      paths:
        - path: /
          pathType: Prefix

config:
  github:
    clientId: "your-github-client-id"
    clientSecret: "your-github-client-secret"
    orgPermission: "your-github-org"
  
  aws:
    enabled: true
    accounts:
      - name: "Production"
        region: us-east-1
  
  kubernetes:
    enabled: true
    # Will use in-cluster config by default`}</CodeBlock>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm flex items-center gap-2">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">3</span>
              {t("helm.quickstart.step3-title")}
            </h4>
            <CodeBlock>{`# Criar namespace
kubectl create namespace dash-ops

# Criar secrets para credenciais
kubectl create secret generic dash-ops-secrets \\
  --from-literal=github-client-id=\${GITHUB_CLIENT_ID} \\
  --from-literal=github-client-secret=\${GITHUB_CLIENT_SECRET} \\
  --from-literal=aws-access-key-id=\${AWS_ACCESS_KEY_ID} \\
  --from-literal=aws-secret-access-key=\${AWS_SECRET_ACCESS_KEY} \\
  -n dash-ops`}</CodeBlock>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm flex items-center gap-2">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">4</span>
              {t("helm.quickstart.step4-title")}
            </h4>
            <CodeBlock>{`# Instalar DashOps
helm install dash-ops ./dash-ops \\
  --namespace dash-ops \\
  --values values.yaml

# Verificar instalação
kubectl get pods -n dash-ops
kubectl get svc -n dash-ops`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Configuration Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            {t("helm.config.title")}
          </CardTitle>
          <CardDescription>
            {t("helm.config.description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="core">{t("helm.config.tabs.core")}</TabsTrigger>
              <TabsTrigger value="ingress">{t("helm.config.tabs.ingress")}</TabsTrigger>
              <TabsTrigger value="plugins">{t("helm.config.tabs.plugins")}</TabsTrigger>
              <TabsTrigger value="security">{t("helm.config.tabs.security")}</TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">{t("helm.config.core.title")}</h4>
                <CodeBlock language="yaml">{`# Configurações principais
replicaCount: 2  # Número de réplicas

image:
  repository: ghcr.io/dash-ops/dash-ops
  tag: "v0.3.0"  # Versão específica
  pullPolicy: IfNotPresent

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 250m
    memory: 256Mi

service:
  type: ClusterIP
  port: 8080
  annotations: {}

# Configurações da aplicação
config:
  port: 8080
  logLevel: info
  origin: "https://dash-ops.your-domain.com"`}</CodeBlock>
              </div>
            </TabsContent>

            <TabsContent value="ingress" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">{t("helm.config.ingress.title")}</h4>
                <CodeBlock language="yaml">{`# Ingress com NGINX
ingress:
  enabled: true
  className: nginx
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
  hosts:
    - host: dash-ops.your-domain.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: dash-ops-tls
      hosts:
        - dash-ops.your-domain.com

# Ou com Traefik
# ingress:
#   className: traefik
#   annotations:
#     traefik.ingress.kubernetes.io/router.entrypoints: websecure`}</CodeBlock>
              </div>
            </TabsContent>

            <TabsContent value="plugins" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">{t("helm.config.plugins.title")}</h4>
                <CodeBlock language="yaml">{`# Plugins e integrações
config:
  plugins:
    - OAuth2
    - Kubernetes
    - AWS
    - ServiceCatalog
  
  # GitHub OAuth2
  github:
    clientId: "from-secret"
    clientSecret: "from-secret"
    authURL: https://github.com/login/oauth/authorize
    tokenURL: https://github.com/login/oauth/access_token
    redirectURL: https://dash-ops.your-domain.com/api/oauth/redirect
    orgPermission: "your-org"
    scopes:
      - user
      - repo
      - read:org
  
  # AWS Configuration
  aws:
    enabled: true
    accounts:
      - name: Production
        region: us-east-1
        # Credenciais via secrets
      - name: Development
        region: us-west-2
  
  # Service Catalog
  serviceCatalog:
    enabled: true
    storage:
      type: git  # ou 'filesystem'
      repository: https://github.com/your-org/services
      branch: main`}</CodeBlock>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">{t("helm.config.security.title")}</h4>
                <CodeBlock language="yaml">{`# Configurações de segurança
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  fsGroup: 1000
  capabilities:
    drop:
      - ALL

podSecurityContext:
  seccompProfile:
    type: RuntimeDefault

# Network Policies
networkPolicy:
  enabled: true
  ingress:
    - from:
      - namespaceSelector:
          matchLabels:
            name: ingress-nginx
  egress:
    - to:
      - namespaceSelector: {}
      ports:
        - protocol: TCP
          port: 443  # HTTPS externo

# RBAC
serviceAccount:
  create: true
  annotations: {}
  name: dash-ops

rbac:
  create: true
  rules:
    - apiGroups: [""]
      resources: ["pods", "services"]
      verbs: ["get", "list", "watch"]`}</CodeBlock>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Access & Testing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            {t("helm.access.title")}
          </CardTitle>
          <CardDescription>
            {t("helm.access.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("helm.access.port-forward")}</h4>
            <CodeBlock>{`# Port-forward para acesso local
kubectl port-forward -n dash-ops svc/dash-ops 8080:8080

# Acesse: http://localhost:8080`}</CodeBlock>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("helm.access.ingress")}</h4>
            <CodeBlock>{`# Verificar ingress
kubectl get ingress -n dash-ops

# Obter URL
kubectl get ingress dash-ops -n dash-ops -o jsonpath='{.spec.rules[0].host}'`}</CodeBlock>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("helm.access.logs")}</h4>
            <CodeBlock>{`# Ver logs
kubectl logs -n dash-ops -l app=dash-ops --tail=100 -f

# Status dos pods
kubectl get pods -n dash-ops -w`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade & Maintenance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5" />
            {t("helm.maintenance.title")}
          </CardTitle>
          <CardDescription>
            {t("helm.maintenance.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("helm.maintenance.upgrade")}</h4>
            <CodeBlock>{`# Atualizar valores
helm upgrade dash-ops ./dash-ops \\
  --namespace dash-ops \\
  --values values.yaml \\
  --reuse-values

# Atualizar para nova versão
helm upgrade dash-ops ./dash-ops \\
  --namespace dash-ops \\
  --set image.tag=v0.3.1`}</CodeBlock>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("helm.maintenance.rollback")}</h4>
            <CodeBlock>{`# Ver histórico
helm history dash-ops -n dash-ops

# Rollback para versão anterior
helm rollback dash-ops -n dash-ops

# Rollback para revisão específica
helm rollback dash-ops 2 -n dash-ops`}</CodeBlock>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{t("helm.maintenance.uninstall")}</h4>
            <CodeBlock>{`# Desinstalar DashOps
helm uninstall dash-ops -n dash-ops

# Limpar namespace
kubectl delete namespace dash-ops`}</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            {t("helm.troubleshooting.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              {
                issue: t("helm.troubleshooting.issue1"),
                solution: t("helm.troubleshooting.solution1")
              },
              {
                issue: t("helm.troubleshooting.issue2"),
                solution: t("helm.troubleshooting.solution2")
              },
              {
                issue: t("helm.troubleshooting.issue3"),
                solution: t("helm.troubleshooting.solution3")
              }
            ].map((item, idx) => (
              <div key={idx} className="p-4 border rounded-lg space-y-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                  <p className="font-semibold text-sm">{item.issue}</p>
                </div>
                <p className="text-sm text-muted-foreground ml-6">{item.solution}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            {t("helm.resources.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm">
              <ExternalLink className="h-4 w-4" />
              <a href="https://github.com/dash-ops/helm-charts" className="text-primary hover:underline">
                {t("helm.resources.helm-repo")}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <ExternalLink className="h-4 w-4" />
              <a href="https://helm.sh/docs/" className="text-primary hover:underline">
                {t("helm.resources.helm-docs")}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <ExternalLink className="h-4 w-4" />
              <a href="https://kubernetes.io/docs/home/" className="text-primary hover:underline">
                {t("helm.resources.k8s-docs")}
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

