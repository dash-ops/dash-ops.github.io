import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, FileCode, Package, Puzzle, Settings, TestTube } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/LanguageContext"

interface PluginDevelopmentSectionProps {
  onSectionChange: (section: string) => void
}

export function PluginDevelopmentSection({ }: PluginDevelopmentSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("plugin-dev.title")}</h1>
        <p className="text-muted-foreground">
          {t("plugin-dev.subtitle")}
        </p>
      </div>

      <Alert>
        <Puzzle className="h-4 w-4" />
        <AlertDescription>
          {t("plugin-dev.intro")}
        </AlertDescription>
      </Alert>

      {/* Plugin Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5" />
            <span>{t("plugin-dev.architecture.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("plugin-dev.architecture.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">{t("plugin-dev.architecture.structure")}</h4>
              <code className="text-sm">
                <pre>{`pkg/your-plugin/
├── adapters/     # Data transformation & external integrations
├── controllers/  # Business logic orchestration
├── handlers/     # HTTP endpoints (entry points)
├── logic/        # Pure business logic (100% tested)
├── models/       # Domain entities with behavior
├── ports/        # Interfaces & contracts
├── wire/         # API DTOs (request/response)
└── module.go     # Factory + DI setup`}</pre>
              </code>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">{t("plugin-dev.architecture.principles")}</h4>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">1</Badge>
                    <span className="text-sm">{t("plugin-dev.architecture.principle-1")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">2</Badge>
                    <span className="text-sm">{t("plugin-dev.architecture.principle-2")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">3</Badge>
                    <span className="text-sm">{t("plugin-dev.architecture.principle-3")}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">{t("plugin-dev.architecture.benefits")}</h4>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">✓</Badge>
                    <span className="text-sm">{t("plugin-dev.architecture.benefit-1")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">✓</Badge>
                    <span className="text-sm">{t("plugin-dev.architecture.benefit-2")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">✓</Badge>
                    <span className="text-sm">{t("plugin-dev.architecture.benefit-3")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Creating a Plugin */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileCode className="h-5 w-5" />
            <span>{t("plugin-dev.creating.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("plugin-dev.creating.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="module" className="space-y-4">
            <TabsList>
              <TabsTrigger value="module">{t("plugin-dev.creating.module-tab")}</TabsTrigger>
              <TabsTrigger value="handler">{t("plugin-dev.creating.handler-tab")}</TabsTrigger>
              <TabsTrigger value="logic">{t("plugin-dev.creating.logic-tab")}</TabsTrigger>
              <TabsTrigger value="registration">{t("plugin-dev.creating.registration-tab")}</TabsTrigger>
            </TabsList>

            <TabsContent value="module" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">{t("plugin-dev.creating.module-title")}</h4>
                <p className="text-sm text-muted-foreground">{t("plugin-dev.creating.module-desc")}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <code className="text-sm">
                  <pre>{`// pkg/your-plugin/module.go
package yourplugin

import (
    "github.com/gin-gonic/gin"
)

type Module struct {
    config     Config
    controller *Controller
    handler    *Handler
}

type Config struct {
    Enabled bool
    ApiKey  string
}

func NewModule(cfg Config, deps Dependencies) (*Module, error) {
    // Initialize your plugin components
    logic := NewLogic()
    controller := NewController(logic)
    handler := NewHandler(controller)

    return &Module{
        config:     cfg,
        controller: controller,
        handler:    handler,
    }, nil
}

func (m *Module) RegisterRoutes(router *gin.RouterGroup) {
    router.GET("/your-plugin", m.handler.List)
    router.POST("/your-plugin", m.handler.Create)
}`}</pre>
                </code>
              </div>
            </TabsContent>

            <TabsContent value="handler" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">{t("plugin-dev.creating.handler-title")}</h4>
                <p className="text-sm text-muted-foreground">{t("plugin-dev.creating.handler-desc")}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <code className="text-sm">
                  <pre>{`// pkg/your-plugin/handlers/handler.go
package handlers

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

type Handler struct {
    controller Controller
}

func NewHandler(controller Controller) *Handler {
    return &Handler{controller: controller}
}

func (h *Handler) List(c *gin.Context) {
    items, err := h.controller.ListItems(c.Request.Context())
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{
            "error": err.Error(),
        })
        return
    }

    c.JSON(http.StatusOK, items)
}`}</pre>
                </code>
              </div>
            </TabsContent>

            <TabsContent value="logic" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">{t("plugin-dev.creating.logic-title")}</h4>
                <p className="text-sm text-muted-foreground">{t("plugin-dev.creating.logic-desc")}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <code className="text-sm">
                  <pre>{`// pkg/your-plugin/logic/logic.go
package logic

type Logic struct {
    // Pure business logic, no external dependencies
}

func NewLogic() *Logic {
    return &Logic{}
}

func (l *Logic) ProcessItem(item Item) (Result, error) {
    // Pure business logic implementation
    // No database calls, no HTTP requests
    // Just data transformation and validation

    if err := l.validateItem(item); err != nil {
        return Result{}, err
    }

    result := Result{
        ID:     item.ID,
        Status: "processed",
    }

    return result, nil
}`}</pre>
                </code>
              </div>
            </TabsContent>

            <TabsContent value="registration" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">{t("plugin-dev.creating.registration-title")}</h4>
                <p className="text-sm text-muted-foreground">{t("plugin-dev.creating.registration-desc")}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <code className="text-sm">
                  <pre>{`// main.go
package main

import (
    yourplugin "github.com/yourusername/dashops/pkg/your-plugin"
)

func main() {
    // Initialize your plugin
    pluginConfig := yourplugin.Config{
        Enabled: true,
        ApiKey:  os.Getenv("YOUR_PLUGIN_API_KEY"),
    }

    plugin, err := yourplugin.NewModule(pluginConfig, dependencies)
    if err != nil {
        log.Fatal(err)
    }

    // Register routes
    apiGroup := router.Group("/api/v1")
    plugin.RegisterRoutes(apiGroup)
}`}</pre>
                </code>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Testing Your Plugin */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TestTube className="h-5 w-5" />
            <span>{t("plugin-dev.testing.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("plugin-dev.testing.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">{t("plugin-dev.testing.unit-tests")}</h4>
              <div className="p-3 bg-muted rounded-lg">
                <code className="text-sm">
                  <pre>{`// logic/logic_test.go
func TestProcessItem(t *testing.T) {
    logic := NewLogic()

    item := Item{ID: "123"}
    result, err := logic.ProcessItem(item)

    assert.NoError(t, err)
    assert.Equal(t, "processed", result.Status)
}`}</pre>
                </code>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">{t("plugin-dev.testing.integration-tests")}</h4>
              <div className="p-3 bg-muted rounded-lg">
                <code className="text-sm">
                  <pre>{`// handlers/handler_test.go
func TestListEndpoint(t *testing.T) {
    router := gin.New()
    handler := NewHandler(mockController)

    router.GET("/test", handler.List)

    req := httptest.NewRequest("GET", "/test", nil)
    w := httptest.NewRecorder()

    router.ServeHTTP(w, req)
    assert.Equal(t, 200, w.Code)
}`}</pre>
                </code>
              </div>
            </div>
          </div>

          <Alert>
            <Code className="h-4 w-4" />
            <AlertDescription>
              {t("plugin-dev.testing.coverage-note")}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>{t("plugin-dev.configuration.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("plugin-dev.configuration.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">{t("plugin-dev.configuration.yaml-title")}</h4>
            <code className="text-sm">
              <pre>{`# workspace-dash-ops.yaml
plugins:
  your-plugin:
    enabled: true
    api_key: ${"{YOUR_PLUGIN_API_KEY}"}
    endpoint: "https://api.yourservice.com"
    timeout: 30s
    retry_attempts: 3`}</pre>
            </code>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">{t("plugin-dev.configuration.env-title")}</h4>
            <code className="text-sm">
              <pre>{`# Environment variables
export YOUR_PLUGIN_API_KEY="your-secret-key"
export YOUR_PLUGIN_ENABLED=true
export YOUR_PLUGIN_DEBUG=false`}</pre>
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge className="h-5 w-5" />
            <span>{t("plugin-dev.best-practices.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("plugin-dev.best-practices.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">1</Badge>
              <div>
                <p className="font-semibold text-sm">{t("plugin-dev.best-practices.practice-1-title")}</p>
                <p className="text-sm text-muted-foreground">{t("plugin-dev.best-practices.practice-1-desc")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">2</Badge>
              <div>
                <p className="font-semibold text-sm">{t("plugin-dev.best-practices.practice-2-title")}</p>
                <p className="text-sm text-muted-foreground">{t("plugin-dev.best-practices.practice-2-desc")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">3</Badge>
              <div>
                <p className="font-semibold text-sm">{t("plugin-dev.best-practices.practice-3-title")}</p>
                <p className="text-sm text-muted-foreground">{t("plugin-dev.best-practices.practice-3-desc")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">4</Badge>
              <div>
                <p className="font-semibold text-sm">{t("plugin-dev.best-practices.practice-4-title")}</p>
                <p className="text-sm text-muted-foreground">{t("plugin-dev.best-practices.practice-4-desc")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="mt-1">5</Badge>
              <div>
                <p className="font-semibold text-sm">{t("plugin-dev.best-practices.practice-5-title")}</p>
                <p className="text-sm text-muted-foreground">{t("plugin-dev.best-practices.practice-5-desc")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
