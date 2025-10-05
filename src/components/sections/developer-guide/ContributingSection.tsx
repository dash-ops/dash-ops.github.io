import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitBranch, GitPullRequest, Users, Book, CheckCircle, Code, ExternalLink } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/LanguageContext"

interface ContributingSectionProps {
  onSectionChange: (section: string) => void
}

export function ContributingSection({ onSectionChange }: ContributingSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("contributing.title")}</h1>
        <p className="text-muted-foreground">
          {t("contributing.subtitle")}
        </p>
      </div>

      <Alert>
        <Users className="h-4 w-4" />
        <AlertDescription>
          {t("contributing.welcome")}
        </AlertDescription>
      </Alert>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitBranch className="h-5 w-5" />
            <span>{t("contributing.getting-started.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("contributing.getting-started.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Badge variant="outline" className="mt-1">1</Badge>
              <div>
                <p className="font-semibold">{t("contributing.getting-started.step-1")}</p>
                <code className="text-sm text-muted-foreground">git clone https://github.com/yourusername/dash-ops.git</code>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Badge variant="outline" className="mt-1">2</Badge>
              <div>
                <p className="font-semibold">{t("contributing.getting-started.step-2")}</p>
                <code className="text-sm text-muted-foreground">git checkout -b feature/your-feature-name</code>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Badge variant="outline" className="mt-1">3</Badge>
              <div>
                <p className="font-semibold">{t("contributing.getting-started.step-3")}</p>
                <code className="text-sm text-muted-foreground">go mod download && cd front && yarn install</code>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Badge variant="outline" className="mt-1">4</Badge>
              <div>
                <p className="font-semibold">{t("contributing.getting-started.step-4")}</p>
                <p className="text-sm text-muted-foreground">{t("contributing.getting-started.step-4-desc")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Badge variant="outline" className="mt-1">5</Badge>
              <div>
                <p className="font-semibold">{t("contributing.getting-started.step-5")}</p>
                <code className="text-sm text-muted-foreground">git push origin feature/your-feature-name</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Style Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span>{t("contributing.code-style.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("contributing.code-style.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="backend" className="space-y-4">
            <TabsList>
              <TabsTrigger value="backend">{t("contributing.code-style.backend-tab")}</TabsTrigger>
              <TabsTrigger value="frontend">{t("contributing.code-style.frontend-tab")}</TabsTrigger>
              <TabsTrigger value="testing">{t("contributing.code-style.testing-tab")}</TabsTrigger>
            </TabsList>

            <TabsContent value="backend" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">{t("contributing.code-style.backend-title")}</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.backend-rule-1")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.backend-rule-2")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.backend-rule-3")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.backend-rule-4")}</span>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <code className="text-sm">
                    <pre>{`// Good example
type Service interface {
    GetUser(ctx context.Context, id string) (*User, error)
}

// Implementation
func (s *service) GetUser(ctx context.Context, id string) (*User, error) {
    // Always handle context cancellation
    select {
    case <-ctx.Done():
        return nil, ctx.Err()
    default:
    }

    // Business logic here
    return s.repo.FindByID(ctx, id)
}`}</pre>
                  </code>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="frontend" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">{t("contributing.code-style.frontend-title")}</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.frontend-rule-1")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.frontend-rule-2")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.frontend-rule-3")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.frontend-rule-4")}</span>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <code className="text-sm">
                    <pre>{`// Good component example
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  onClick: () => void
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  onClick,
  children
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded',
        variant === 'primary' && 'bg-blue-500',
        variant === 'secondary' && 'bg-gray-500'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}`}</pre>
                  </code>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="testing" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">{t("contributing.code-style.testing-title")}</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.testing-rule-1")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.testing-rule-2")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t("contributing.code-style.testing-rule-3")}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-semibold mb-2">Backend Tests</p>
                    <code className="text-xs">go test ./... -cover</code>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-semibold mb-2">Frontend Tests</p>
                    <code className="text-xs">yarn test</code>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Commit Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitPullRequest className="h-5 w-5" />
            <span>{t("contributing.commit.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("contributing.commit.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">{t("contributing.commit.format")}</h4>
            <code className="text-sm">
              <pre>{`<type>(<scope>): <subject>

<body>

<footer>`}</pre>
            </code>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <Badge variant="outline" className="mb-1">feat</Badge>
              <p className="text-xs text-muted-foreground">{t("contributing.commit.type-feat")}</p>
            </div>
            <div>
              <Badge variant="outline" className="mb-1">fix</Badge>
              <p className="text-xs text-muted-foreground">{t("contributing.commit.type-fix")}</p>
            </div>
            <div>
              <Badge variant="outline" className="mb-1">docs</Badge>
              <p className="text-xs text-muted-foreground">{t("contributing.commit.type-docs")}</p>
            </div>
            <div>
              <Badge variant="outline" className="mb-1">style</Badge>
              <p className="text-xs text-muted-foreground">{t("contributing.commit.type-style")}</p>
            </div>
            <div>
              <Badge variant="outline" className="mb-1">refactor</Badge>
              <p className="text-xs text-muted-foreground">{t("contributing.commit.type-refactor")}</p>
            </div>
            <div>
              <Badge variant="outline" className="mb-1">test</Badge>
              <p className="text-xs text-muted-foreground">{t("contributing.commit.type-test")}</p>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">{t("contributing.commit.examples")}</h4>
            <code className="text-sm">
              <pre>{`feat(kubernetes): add pod restart functionality

- Added restart button to pod details view
- Implemented restart API endpoint
- Added confirmation dialog

Closes #123`}</pre>
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Pull Request Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitPullRequest className="h-5 w-5" />
            <span>{t("contributing.pr.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("contributing.pr.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <h4 className="font-semibold text-sm mb-1">{t("contributing.pr.before-title")}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {t("contributing.pr.before-1")}</li>
                <li>• {t("contributing.pr.before-2")}</li>
                <li>• {t("contributing.pr.before-3")}</li>
                <li>• {t("contributing.pr.before-4")}</li>
              </ul>
            </div>

            <div className="p-3 border rounded-lg">
              <h4 className="font-semibold text-sm mb-1">{t("contributing.pr.template-title")}</h4>
              <p className="text-sm text-muted-foreground mb-2">{t("contributing.pr.template-desc")}</p>
              <div className="p-2 bg-muted rounded">
                <code className="text-xs">
                  <pre>{`## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings`}</pre>
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Community */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>{t("contributing.community.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("contributing.community.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-2">
                <Book className="h-4 w-4" />
                <span className="font-semibold">{t("contributing.community.docs")}</span>
              </div>
              <span className="text-sm text-muted-foreground text-left">
                {t("contributing.community.docs-desc")}
              </span>
            </Button>

            <Button variant="outline" className="h-auto p-4 flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-2">
                <GitPullRequest className="h-4 w-4" />
                <span className="font-semibold">{t("contributing.community.issues")}</span>
              </div>
              <span className="text-sm text-muted-foreground text-left">
                {t("contributing.community.issues-desc")}
              </span>
            </Button>

            <Button variant="outline" className="h-auto p-4 flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="font-semibold">{t("contributing.community.discussions")}</span>
              </div>
              <span className="text-sm text-muted-foreground text-left">
                {t("contributing.community.discussions-desc")}
              </span>
            </Button>

            <Button variant="outline" className="h-auto p-4 flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <span className="font-semibold">{t("contributing.community.slack")}</span>
              </div>
              <span className="text-sm text-muted-foreground text-left">
                {t("contributing.community.slack-desc")}
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}