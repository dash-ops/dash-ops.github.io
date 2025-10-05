import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Cloud, 
  Cpu, 
  GitBranch, 
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface PluginsOverviewSectionProps {
  onSectionChange: (section: string) => void
}

export function PluginsOverviewSection({ onSectionChange }: PluginsOverviewSectionProps) {
  const { t } = useLanguage()
  
  const plugins = [
    {
      id: "auth-plugin",
      name: "Auth Plugin",
      description: "GitHub authentication, organization validation",
      icon: Shield,
      status: "beta",
      statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      statusIcon: AlertTriangle,
      productionReady: false,
      features: ["GitHub OAuth", "Organization validation", "Role-based access"]
    },
    {
      id: "service-catalog-plugin",
      name: "Service Catalog",
      description: "Service registry, health monitoring, K8s integration",
      icon: Settings,
      status: "beta",
      statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      statusIcon: AlertTriangle,
      productionReady: false,
      features: ["Service registry", "Health monitoring", "K8s integration"]
    },
    {
      id: "aws-plugin",
      name: "AWS Plugin",
      description: "EC2 management, multi-account, optimized UI",
      icon: Cloud,
      status: "alpha",
      statusColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      statusIcon: Clock,
      productionReady: false,
      features: ["EC2 management", "Multi-account support", "Cost optimization"]
    },
    {
      id: "kubernetes-plugin",
      name: "Kubernetes Plugin",
      description: "Multi-cluster management, enhanced UI, pod operations",
      icon: Cpu,
      status: "alpha",
      statusColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      statusIcon: Clock,
      productionReady: false,
      features: ["Multi-cluster", "Pod management", "Scaling operations"]
    }
  ]

  const getStatusText = (status: string) => {
    switch (status) {
      case "stable": return t("plugins.status.stable")
      case "beta": return t("plugins.status.beta")
      case "alpha": return t("plugins.status.alpha")
      default: return t("plugins.status.unknown")
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("plugins.title")}</h1>
        <p className="text-muted-foreground">{t("plugins.subtitle")}</p>
      </div>

      {/* Plugin System Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>{t("plugins.system.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("plugins.system.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto flex items-center justify-center">
                <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold">{t("plugins.system.modular.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("plugins.system.modular.desc")}
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold">{t("plugins.system.config.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("plugins.system.config.desc")}
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto flex items-center justify-center">
                <GitBranch className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold">{t("plugins.system.extensible.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("plugins.system.extensible.desc")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Plugins */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{t("plugins.available")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plugins.map((plugin) => (
            <Card key={plugin.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <plugin.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{plugin.name}</CardTitle>
                      <CardDescription>{plugin.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={plugin.statusColor}>
                    <plugin.statusIcon className="h-3 w-3 mr-1" />
                    {getStatusText(plugin.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">{t("plugins.key-features")}:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {plugin.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{t("plugins.production-ready")}:</span>
                    {plugin.productionReady ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    )}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onSectionChange(plugin.id)}
                  >
                    {t("common.view-docs")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Setup */}
      <Card>
        <CardHeader>
          <CardTitle>{t("plugins.quick-setup.title")}</CardTitle>
          <CardDescription>
            {t("plugins.quick-setup.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">
              plugins:<br/>
              &nbsp;&nbsp;- &apos;Auth&apos; # Required - Authentication<br/>
              &nbsp;&nbsp;- &apos;ServiceCatalog&apos; # Optional - Service registry<br/>
              &nbsp;&nbsp;- &apos;AWS&apos; # Optional - AWS operations<br/>
              &nbsp;&nbsp;- &apos;Kubernetes&apos; # Optional - K8s operations
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
