import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useLanguage } from "@/contexts/LanguageContext"
import {
  Code,
  FileCode,
  Layers,
  GitBranch,
  TestTube,
  Package,
  Settings,
  BookOpen,
  Workflow,
  Database,
  Shield,
  Zap,
  CheckCircle,
  Info,
  AlertTriangle,
  Terminal,
  Folder,
  ArrowRight
} from "lucide-react"

interface BackendGuideSectionProps {
  onSectionChange?: (section: string) => void
}

export function BackendGuideSection({ onSectionChange }: BackendGuideSectionProps) {
  const { t } = useLanguage()

  const CodeBlock = ({ children, language = "bash" }: { children: string, language?: string }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
      <code className={`language-${language} text-sm`}>{children}</code>
    </pre>
  )

  const FileStructure = ({ structure }: { structure: { [key: string]: unknown } }) => {
    const renderTree = (tree: unknown, level: number = 0) => {
      if (typeof tree !== 'object' || tree === null) return null;
      return Object.entries(tree as { [key: string]: unknown }).map(([key, value]) => (
        <div key={key} style={{ marginLeft: `${level * 20}px` }} className="py-1">
          <div className="flex items-center gap-2">
            {typeof value === 'object' ? (
              <Folder className="h-4 w-4 text-blue-500" />
            ) : (
              <FileCode className="h-4 w-4 text-gray-500" />
            )}
            <span className="font-mono text-sm">
              {key}
              {typeof value === 'string' && <span className="text-muted-foreground ml-2">{/* */} {value}</span>}
            </span>
          </div>
          {typeof value === 'object' && renderTree(value, level + 1)}
        </div>
      ))
    }
    return <div className="bg-muted rounded-lg p-4">{renderTree(structure)}</div>
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          {t("backend.title")}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t("backend.subtitle")}
        </p>
      </div>

      {/* Quick Navigation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            {t("backend.quick-nav.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-left p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <Layers className="h-4 w-4 text-blue-500" />
                <span className="font-semibold">{t("backend.quick-nav.architecture")}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("backend.quick-nav.architecture-desc")}
              </p>
            </button>

            <button
              onClick={() => document.getElementById('development')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-left p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <Code className="h-4 w-4 text-green-500" />
                <span className="font-semibold">{t("backend.quick-nav.development")}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("backend.quick-nav.development-desc")}
              </p>
            </button>

            <button
              onClick={() => document.getElementById('testing')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-left p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <TestTube className="h-4 w-4 text-purple-500" />
                <span className="font-semibold">{t("backend.quick-nav.testing")}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("backend.quick-nav.testing-desc")}
              </p>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Architecture Section */}
      <div id="architecture" className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Layers className="h-8 w-8" />
          {t("backend.architecture.title")}
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>{t("backend.architecture.hexagonal.title")}</CardTitle>
            <CardDescription>
              {t("backend.architecture.hexagonal.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Core Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                  title: t("backend.architecture.principles.consistency"),
                  desc: t("backend.architecture.principles.consistency-desc")
                },
                {
                  icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                  title: t("backend.architecture.principles.testability"),
                  desc: t("backend.architecture.principles.testability-desc")
                },
                {
                  icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                  title: t("backend.architecture.principles.maintainability"),
                  desc: t("backend.architecture.principles.maintainability-desc")
                },
                {
                  icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                  title: t("backend.architecture.principles.modularity"),
                  desc: t("backend.architecture.principles.modularity-desc")
                }
              ].map((principle, idx) => (
                <div key={idx} className="flex gap-3">
                  {principle.icon}
                  <div>
                    <h4 className="font-semibold text-sm">{principle.title}</h4>
                    <p className="text-sm text-muted-foreground">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Module Structure */}
            <div className="space-y-2">
              <h4 className="font-semibold">{t("backend.architecture.structure")}</h4>
              <FileStructure structure={{
                "pkg/{module}/": {
                  "adapters/": {
                    "http/": "HTTP request/response adapters",
                    "storage/": "Database/filesystem adapters",
                    "external/": "External service adapters"
                  },
                  "integrations/": {
                    "external/": "External APIs (GitHub, AWS, K8s)",
                    "{module}/": "Inter-module communication"
                  },
                  "controllers/": "Business logic orchestration",
                  "handlers/": "HTTP endpoints",
                  "logic/": "Pure business logic (100% tested)",
                  "models/": "Domain entities",
                  "ports/": "Interfaces & contracts",
                  "wire/": "API DTOs",
                  "module.go": "Factory & DI setup"
                }
              }} />
            </div>

            {/* Data Flow */}
            <Alert>
              <Workflow className="h-4 w-4" />
              <AlertDescription>
                <strong>{t("backend.architecture.data-flow")}:</strong>
                <code className="ml-2 text-sm">
                  HTTP Request → Handler → Adapter → Controller → Logic → Repository
                </code>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Layer Responsibilities */}
        <Card>
          <CardHeader>
            <CardTitle>{t("backend.architecture.layers.title")}</CardTitle>
            <CardDescription>
              {t("backend.architecture.layers.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  layer: "handlers",
                  purpose: t("backend.architecture.layers.handlers"),
                  testing: "Integration tests",
                  color: "blue"
                },
                {
                  layer: "controllers",
                  purpose: t("backend.architecture.layers.controllers"),
                  testing: "Integration with mocks",
                  color: "green"
                },
                {
                  layer: "logic",
                  purpose: t("backend.architecture.layers.logic"),
                  testing: "100% unit test coverage",
                  color: "purple"
                },
                {
                  layer: "models",
                  purpose: t("backend.architecture.layers.models"),
                  testing: "Unit tests for methods",
                  color: "orange"
                },
                {
                  layer: "adapters",
                  purpose: t("backend.architecture.layers.adapters"),
                  testing: "Unit tests",
                  color: "pink"
                },
                {
                  layer: "integrations",
                  purpose: t("backend.architecture.layers.integrations"),
                  testing: "Unit tests with mocks",
                  color: "yellow"
                },
                {
                  layer: "ports",
                  purpose: t("backend.architecture.layers.ports"),
                  testing: "No tests (interfaces)",
                  color: "gray"
                },
                {
                  layer: "wire",
                  purpose: t("backend.architecture.layers.wire"),
                  testing: "No tests (DTOs)",
                  color: "gray"
                }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 items-center p-3 rounded-lg border">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      {item.layer}
                    </Badge>
                  </div>
                  <div className="text-sm">{item.purpose}</div>
                  <div className="text-sm text-muted-foreground">{item.testing}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Development Workflow */}
      <div id="development" className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Code className="h-8 w-8" />
          {t("backend.development.title")}
        </h2>

        <Tabs defaultValue="feature" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="feature">
              <Zap className="h-4 w-4 mr-2" />
              {t("backend.development.new-feature")}
            </TabsTrigger>
            <TabsTrigger value="di">
              <Package className="h-4 w-4 mr-2" />
              {t("backend.development.dependency-injection")}
            </TabsTrigger>
            <TabsTrigger value="patterns">
              <Settings className="h-4 w-4 mr-2" />
              {t("backend.development.patterns")}
            </TabsTrigger>
          </TabsList>

          {/* New Feature Tab */}
          <TabsContent value="feature" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t("backend.development.feature.title")}</CardTitle>
                <CardDescription>
                  {t("backend.development.feature.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Step 1: Define Model */}
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Badge>1</Badge>
                    {t("backend.development.feature.step1")}
                  </h4>
                  <CodeBlock language="go">{`// models/entities.go
type Service struct {
    Metadata ServiceMetadata \`yaml:"metadata" json:"metadata"\`
    Spec     ServiceSpec     \`yaml:"spec" json:"spec"\`
}

// Add domain behavior
func (s *Service) Validate() error {
    if s.Metadata.Name == "" {
        return fmt.Errorf("service name is required")
    }
    return nil
}

func (s *Service) IsProduction() bool {
    return s.Metadata.Tier == TierCritical
}`}</CodeBlock>
                </div>

                {/* Step 2: Write Tests */}
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Badge>2</Badge>
                    {t("backend.development.feature.step2")}
                  </h4>
                  <CodeBlock language="go">{`// logic/service_processor_test.go
func TestServiceProcessor_PrepareForCreation_WithValidService_PreparesCorrectly(t *testing.T) {
    // Arrange
    processor := NewServiceProcessor()
    service := &Service{
        Metadata: ServiceMetadata{
            Name: "test-service",
            Tier: TierStandard,
        },
    }
    user := &UserContext{Username: "john.doe"}

    // Act
    result, err := processor.PrepareForCreation(service, user)

    // Assert
    assert.NoError(t, err)
    assert.NotNil(t, result)
    assert.Equal(t, "john.doe", result.Metadata.CreatedBy)
}`}</CodeBlock>
                </div>

                {/* Step 3: Implement Logic */}
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Badge>3</Badge>
                    {t("backend.development.feature.step3")}
                  </h4>
                  <CodeBlock language="go">{`// logic/service_processor.go
type ServiceProcessor struct{}

func NewServiceProcessor() *ServiceProcessor {
    return &ServiceProcessor{}
}

func (sp *ServiceProcessor) PrepareForCreation(
    service *Service,
    user *UserContext,
) (*Service, error) {
    // Pure business logic - no external dependencies
    prepared := *service
    prepared.Metadata.CreatedAt = time.Now()
    prepared.Metadata.CreatedBy = user.Username
    prepared.Metadata.Version = 1

    // Apply business rules
    if err := sp.validateBusinessRules(&prepared); err != nil {
        return nil, fmt.Errorf("validation failed: %w", err)
    }

    return &prepared, nil
}`}</CodeBlock>
                </div>

                {/* Step 4: Create Controller */}
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Badge>4</Badge>
                    {t("backend.development.feature.step4")}
                  </h4>
                  <CodeBlock language="go">{`// controllers/service_controller.go
type ServiceController struct {
    serviceRepo ServiceRepository
    processor   *ServiceProcessor
    validator   *ServiceValidator
}

func NewServiceController(
    serviceRepo ServiceRepository,
    processor *ServiceProcessor,
    validator *ServiceValidator,
) *ServiceController {
    return &ServiceController{
        serviceRepo: serviceRepo,
        processor:   processor,
        validator:   validator,
    }
}

func (sc *ServiceController) CreateService(
    ctx context.Context,
    service *Service,
    user *UserContext,
) (*Service, error) {
    // Validation
    if err := sc.validator.ValidateForCreation(service); err != nil {
        return nil, fmt.Errorf("validation failed: %w", err)
    }

    // Process
    prepared, err := sc.processor.PrepareForCreation(service, user)
    if err != nil {
        return nil, fmt.Errorf("preparation failed: %w", err)
    }

    // Store
    return sc.serviceRepo.Create(ctx, prepared)
}`}</CodeBlock>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dependency Injection Tab */}
          <TabsContent value="di" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t("backend.development.di.title")}</CardTitle>
                <CardDescription>
                  {t("backend.development.di.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Module Initialization */}
                <Alert className="mb-4">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <strong>{t("backend.development.di.phases")}:</strong>
                    {t("backend.development.di.phases-desc")}
                  </AlertDescription>
                </Alert>

                <div className="space-y-2">
                  <h4 className="font-semibold">{t("backend.development.di.phase1")}</h4>
                  <CodeBlock language="go">{`// main.go - Phase 1: Module Initialization
modules := make(map[string]interface{})

if dashConfig.Plugins.Has("Auth") {
    authModule, err := auth.NewModule(fileConfig)
    if err != nil {
        log.Fatalf("Failed to create auth module: %v", err)
    }
    modules["auth"] = authModule
}

if dashConfig.Plugins.Has("ServiceCatalog") {
    scModule, err := servicecatalog.NewModule(fileConfig)
    if err != nil {
        log.Fatalf("Failed to create service catalog module: %v", err)
    }
    modules["service-catalog"] = scModule
}`}</CodeBlock>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">{t("backend.development.di.phase2")}</h4>
                  <CodeBlock language="go">{`// main.go - Phase 2: Route Registration
for name, module := range modules {
    if m, ok := module.(interface{ RegisterRoutes(*mux.Router) }); ok {
        m.RegisterRoutes(internal)
        log.Printf("Routes registered for %s module", name)
    }
}`}</CodeBlock>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">{t("backend.development.di.phase3")}</h4>
                  <CodeBlock language="go">{`// main.go - Phase 3: Cross-Module Dependencies
for name, module := range modules {
    if m, ok := module.(interface{
        LoadDependencies(map[string]interface{}) error
    }); ok {
        if err := m.LoadDependencies(modules); err != nil {
            log.Printf("Warning: Failed to load dependencies for %s: %v",
                name, err)
        }
    }
}`}</CodeBlock>
                </div>

                {/* Cross-Module Example */}
                <div className="space-y-2">
                  <h4 className="font-semibold">{t("backend.development.di.cross-module")}</h4>
                  <CodeBlock language="go">{`// pkg/service-catalog/module.go
func (m *Module) LoadDependencies(modules map[string]interface{}) error {
    // Load kubernetes dependency if available
    if k8sModule, exists := modules["kubernetes"]; exists {
        if k8s, ok := k8sModule.(interface{
            GetExposedAPI() k8sPorts.ExposedAPI
        }); ok {
            if api := k8s.GetExposedAPI(); api != nil {
                // Create internal integration
                k8sIntegration := integrations.NewKubernetesIntegration(api)
                m.controller.SetKubernetesIntegration(k8sIntegration)
            }
        }
    }
    return nil
}

// Expose API for other modules
func (m *Module) GetExposedAPI() ports.ExposedAPI {
    return &exposedAPI{
        controller: m.controller,
    }
}`}</CodeBlock>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t("backend.development.patterns.title")}</CardTitle>
                <CardDescription>
                  {t("backend.development.patterns.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Repository Pattern */}
                <div className="space-y-2">
                  <h4 className="font-semibold">{t("backend.development.patterns.repository")}</h4>
                  <CodeBlock language="go">{`// ports/repositories.go
type ServiceRepository interface {
    Create(ctx context.Context, service *Service) (*Service, error)
    GetByName(ctx context.Context, name string) (*Service, error)
    Update(ctx context.Context, service *Service) (*Service, error)
    Delete(ctx context.Context, name string) error
}

// adapters/storage/filesystem_repository.go
type FilesystemRepository struct {
    directory string
}

func (fr *FilesystemRepository) Create(
    ctx context.Context,
    service *Service,
) (*Service, error) {
    // Implementation
    path := filepath.Join(fr.directory, service.Metadata.Name+".yaml")
    data, err := yaml.Marshal(service)
    if err != nil {
        return nil, err
    }
    return service, os.WriteFile(path, data, 0644)
}`}</CodeBlock>
                </div>

                {/* Factory Pattern */}
                <div className="space-y-2">
                  <h4 className="font-semibold">{t("backend.development.patterns.factory")}</h4>
                  <CodeBlock language="go">{`// module.go
type Module struct {
    controller *ServiceController
    handler    *HTTPHandler
}

func NewModule(config *Config, deps Dependencies) (*Module, error) {
    // Create components
    processor := logic.NewServiceProcessor()
    validator := logic.NewServiceValidator()

    // Create repository based on config
    repo, err := createRepository(config)
    if err != nil {
        return nil, err
    }

    // Create controller
    controller := controllers.NewServiceController(
        repo,
        deps.KubernetesService,
        processor,
        validator,
    )

    // Create handler
    handler := handlers.NewHTTPHandler(controller)

    return &Module{
        controller: controller,
        handler:    handler,
    }, nil
}`}</CodeBlock>
                </div>

                {/* Adapter Pattern */}
                <div className="space-y-2">
                  <h4 className="font-semibold">{t("backend.development.patterns.adapter")}</h4>
                  <CodeBlock language="go">{`// adapters/external/kubernetes_adapter.go
type KubernetesAdapter struct {
    client kubernetes.Interface
}

func (ka *KubernetesAdapter) GetDeploymentHealth(
    ctx context.Context,
    namespace, name string,
) (*DeploymentHealth, error) {
    // Transform K8s API response to domain model
    deployment, err := ka.client.AppsV1().
        Deployments(namespace).
        Get(ctx, name, metav1.GetOptions{})
    if err != nil {
        return nil, err
    }

    return &DeploymentHealth{
        Name:            deployment.Name,
        ReadyReplicas:   deployment.Status.ReadyReplicas,
        DesiredReplicas: *deployment.Spec.Replicas,
        Status:          ka.calculateStatus(deployment),
    }, nil
}`}</CodeBlock>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Testing Section */}
      <div id="testing" className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <TestTube className="h-8 w-8" />
          {t("backend.testing.title")}
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>{t("backend.testing.standards.title")}</CardTitle>
            <CardDescription>
              {t("backend.testing.standards.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Testing Philosophy */}
            <div className="space-y-2">
              <h4 className="font-semibold">{t("backend.testing.philosophy")}</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>{t("backend.testing.philosophy.behavior")}</li>
                <li>{t("backend.testing.philosophy.descriptive")}</li>
                <li>{t("backend.testing.philosophy.aaa")}</li>
                <li>{t("backend.testing.philosophy.one-assertion")}</li>
                <li>{t("backend.testing.philosophy.testify")}</li>
              </ul>
            </div>

            {/* Coverage Requirements */}
            <div className="space-y-2">
              <h4 className="font-semibold">{t("backend.testing.coverage.title")}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { layer: "logic/", coverage: "100%", type: "Unit tests" },
                  { layer: "models/", coverage: "100%", type: "Unit tests for methods" },
                  { layer: "controllers/", coverage: "80%+", type: "Integration with mocks" },
                  { layer: "handlers/", coverage: "70%+", type: "HTTP integration tests" },
                  { layer: "adapters/", coverage: "80%+", type: "Unit tests" },
                  { layer: "ports/", coverage: "N/A", type: "Interfaces only" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-2">
                      <code className="text-sm font-mono">{item.layer}</code>
                      <Badge variant={
                        item.coverage === "100%" ? "default" :
                        item.coverage === "N/A" ? "outline" :
                        "secondary"
                      }>
                        {item.coverage}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Test Examples */}
            <Tabs defaultValue="unit" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="unit">Unit Tests</TabsTrigger>
                <TabsTrigger value="integration">Integration Tests</TabsTrigger>
                <TabsTrigger value="commands">Commands</TabsTrigger>
              </TabsList>

              <TabsContent value="unit" className="space-y-2">
                <h5 className="font-semibold text-sm">{t("backend.testing.unit.title")}</h5>
                <CodeBlock language="go">{`// Test naming: Test{Struct}_{Method}_{Scenario}_{ExpectedResult}
func TestServiceValidator_ValidateForCreation_WithEmptyName_ReturnsError(t *testing.T) {
    // Arrange
    validator := NewServiceValidator()
    service := &Service{
        Metadata: ServiceMetadata{
            Name: "", // Empty name
        },
    }

    // Act
    err := validator.ValidateForCreation(service)

    // Assert
    assert.Error(t, err)
    assert.Contains(t, err.Error(), "name is required")
}`}</CodeBlock>
              </TabsContent>

              <TabsContent value="integration" className="space-y-2">
                <h5 className="font-semibold text-sm">{t("backend.testing.integration.title")}</h5>
                <CodeBlock language="go">{`func TestServiceController_CreateService_WithValidInput_CreatesSuccessfully(t *testing.T) {
    // Arrange
    mockRepo := &MockServiceRepository{
        ExistsFunc: func(ctx context.Context, name string) (bool, error) {
            return false, nil
        },
        CreateFunc: func(ctx context.Context, service *Service) (*Service, error) {
            service.Metadata.CreatedAt = time.Now()
            return service, nil
        },
    }

    controller := NewServiceController(
        mockRepo,
        NewServiceProcessor(),
        NewServiceValidator(),
    )

    service := &Service{
        Metadata: ServiceMetadata{
            Name: "test-service",
            Tier: TierStandard,
        },
    }

    // Act
    result, err := controller.CreateService(
        context.Background(),
        service,
        &UserContext{Username: "john.doe"},
    )

    // Assert
    assert.NoError(t, err)
    assert.NotNil(t, result)
    assert.Equal(t, "test-service", result.Metadata.Name)
    assert.Equal(t, "john.doe", result.Metadata.CreatedBy)
}`}</CodeBlock>
              </TabsContent>

              <TabsContent value="commands" className="space-y-2">
                <h5 className="font-semibold text-sm">{t("backend.testing.commands.title")}</h5>
                <CodeBlock language="bash">{`# Run all tests
go test ./...

# Run tests with coverage
go test -cover ./...

# Run tests for specific package
go test ./pkg/service-catalog/...

# Run tests with verbose output
go test -v ./...

# Generate coverage report
go test -coverprofile=coverage.out ./...
go tool cover -html=coverage.out

# Run specific test
go test -run TestServiceProcessor_PrepareForCreation \\
  ./pkg/service-catalog/logic`}</CodeBlock>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Mock Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>{t("backend.testing.mocks.title")}</CardTitle>
            <CardDescription>
              {t("backend.testing.mocks.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock language="go">{`// Create focused mocks for each interface
type MockServiceRepository struct {
    CreateFunc     func(ctx context.Context, service *Service) (*Service, error)
    GetByNameFunc  func(ctx context.Context, name string) (*Service, error)
    ExistsFunc     func(ctx context.Context, name string) (bool, error)
}

func (m *MockServiceRepository) Create(
    ctx context.Context,
    service *Service,
) (*Service, error) {
    if m.CreateFunc != nil {
        return m.CreateFunc(ctx, service)
    }
    return service, nil // Default behavior
}

func (m *MockServiceRepository) Exists(
    ctx context.Context,
    name string,
) (bool, error) {
    if m.ExistsFunc != nil {
        return m.ExistsFunc(ctx, name)
    }
    return false, nil // Default behavior
}`}</CodeBlock>
          </CardContent>
        </Card>
      </div>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            {t("backend.best-practices.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Do's */}
            <div className="space-y-2">
              <h4 className="font-semibold text-green-600 dark:text-green-400">
                ✅ {t("backend.best-practices.do")}
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• {t("backend.best-practices.do1")}</li>
                <li>• {t("backend.best-practices.do2")}</li>
                <li>• {t("backend.best-practices.do3")}</li>
                <li>• {t("backend.best-practices.do4")}</li>
                <li>• {t("backend.best-practices.do5")}</li>
                <li>• {t("backend.best-practices.do6")}</li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="space-y-2">
              <h4 className="font-semibold text-red-600 dark:text-red-400">
                ❌ {t("backend.best-practices.dont")}
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• {t("backend.best-practices.dont1")}</li>
                <li>• {t("backend.best-practices.dont2")}</li>
                <li>• {t("backend.best-practices.dont3")}</li>
                <li>• {t("backend.best-practices.dont4")}</li>
                <li>• {t("backend.best-practices.dont5")}</li>
                <li>• {t("backend.best-practices.dont6")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            {t("backend.reference.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold">{t("backend.reference.commands")}</h4>
            <CodeBlock language="bash">{`# Development
go run main.go -config ../workspace-dash-ops.yaml  # Run with workspace config
go build                                            # Build binary
go mod tidy                                        # Clean dependencies

# Testing
go test ./...                                      # Run all tests
go test -cover ./...                              # Run with coverage
go test -v ./pkg/{module}/...                    # Test specific module

# Code Quality
go fmt ./...                                      # Format code
go vet ./...                                      # Run static analysis
golangci-lint run                                # Run linter (if installed)`}</CodeBlock>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>{t("backend.reference.resources")}:</strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• CLAUDE.md - AI assistant context</li>
                <li>• ROADMAP.md - Project vision and roadmap</li>
                <li>• Frontend Guide - Frontend development guide</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
