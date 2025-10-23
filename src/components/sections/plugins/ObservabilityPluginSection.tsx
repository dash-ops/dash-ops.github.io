import { useLanguage } from "@/contexts/LanguageContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Activity, 
  BarChart3, 
  Database, 
  GitBranch, 
  Server,
  FileText
} from "lucide-react"

interface ObservabilityPluginSectionProps {
  onSectionChange?: (section: string) => void
}

export function ObservabilityPluginSection({ }: ObservabilityPluginSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          {t("observability-plugin.title")}
        </h1>
        <p className="text-muted-foreground">
          {t("observability-plugin.subtitle")}
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              {t("observability-plugin.logs.title")}
            </CardTitle>
            <CardDescription>
              {t("observability-plugin.logs.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">{t("observability-plugin.logs.loki")}</Badge>
              <Badge variant="secondary">{t("observability-plugin.logs.histogram")}</Badge>
              <Badge variant="secondary">{t("observability-plugin.logs.filters")}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              {t("observability-plugin.traces.title")}
            </CardTitle>
            <CardDescription>
              {t("observability-plugin.traces.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">{t("observability-plugin.traces.tempo")}</Badge>
              <Badge variant="secondary">{t("observability-plugin.traces.spans")}</Badge>
              <Badge variant="secondary">{t("observability-plugin.traces.timeline")}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              {t("observability-plugin.metrics.title")}
            </CardTitle>
            <CardDescription>
              {t("observability-plugin.metrics.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">{t("observability-plugin.metrics.prometheus")}</Badge>
              <Badge variant="outline">{t("observability-plugin.metrics.in-development")}</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">
          {t("observability-plugin.features.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                {t("observability-plugin.features.unified-interface.title")}
              </CardTitle>
              <CardDescription>
                {t("observability-plugin.features.unified-interface.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  {t("observability-plugin.features.unified-interface.global-header")}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  {t("observability-plugin.features.unified-interface.tab-navigation")}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  {t("observability-plugin.features.unified-interface.global-filters")}
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                {t("observability-plugin.features.provider-support.title")}
              </CardTitle>
              <CardDescription>
                {t("observability-plugin.features.provider-support.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  {t("observability-plugin.features.provider-support.multiple-backends")}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  {t("observability-plugin.features.provider-support.provider-selector")}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  {t("observability-plugin.features.provider-support.service-context")}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Configuration */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">
          {t("observability-plugin.configuration.title")}
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>{t("observability-plugin.configuration.yaml.title")}</CardTitle>
            <CardDescription>
              {t("observability-plugin.configuration.yaml.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
{`observability:
  enabled: true
  logs:
    providers:
      - name: "loki-local"
        type: "loki"
        url: "http://localhost:30100"
        timeout: "30s"
        enabled: true
        auth:
          type: "none"
        labels:
          environment: "local"
          cluster: "kind-dashops-dev"
    retention: "30d"
    query_limit: 1000
    stream_limit: 100
    levels: ["debug", "info", "warn", "error"]
  traces:
    providers:
      - name: "tempo-local"
        type: "tempo"
        url: "http://localhost:30200"
        timeout: "30s"
        enabled: true
        auth:
          type: "none"
    retention: "7d"
    query_limit: 100
    sampling_rate: 1.0
  metrics:
    providers:
      - name: "prometheus-local"
        type: "prometheus"
        url: "http://localhost:30090"
        timeout: "30s"
        enabled: true
        auth:
          type: "none"
    retention: "90d"
    query_limit: 1000
    scrape_interval: "15s"`}
              </code>
            </pre>
          </CardContent>
        </Card>
      </div>

      {/* API Endpoints */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">
          {t("observability-plugin.api-endpoints.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                {t("observability-plugin.api-endpoints.logs.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="font-mono bg-muted px-2 py-1 rounded">
                  GET /api/v1/observability/logs
                </div>
                <p className="text-muted-foreground">
                  {t("observability-plugin.api-endpoints.logs.description")}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5" />
                {t("observability-plugin.api-endpoints.traces.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="font-mono bg-muted px-2 py-1 rounded">
                  GET /api/v1/observability/traces
                </div>
                <p className="text-muted-foreground">
                  {t("observability-plugin.api-endpoints.traces.description")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Status */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">
          {t("observability-plugin.status.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="default">v0.1</Badge>
                {t("observability-plugin.status.current-version")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t("observability-plugin.status.logs")}</span>
                  <Badge variant="secondary">{t("observability-plugin.status.completed")}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t("observability-plugin.status.traces")}</span>
                  <Badge variant="secondary">{t("observability-plugin.status.completed")}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t("observability-plugin.status.metrics")}</span>
                  <Badge variant="outline">{t("observability-plugin.status.in-development")}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">v0.2</Badge>
                {t("observability-plugin.status.next-version")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t("observability-plugin.status.metrics-frontend")}</span>
                  <Badge variant="outline">{t("observability-plugin.status.planned")}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t("observability-plugin.status.alerts")}</span>
                  <Badge variant="outline">{t("observability-plugin.status.planned")}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t("observability-plugin.status.ai-analysis")}</span>
                  <Badge variant="outline">{t("observability-plugin.status.planned")}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
