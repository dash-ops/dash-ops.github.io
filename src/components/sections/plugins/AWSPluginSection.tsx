import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cloud, AlertTriangle, ExternalLink, Key, Settings, Server } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/LanguageContext"

interface AWSPluginSectionProps {
  onSectionChange: (section: string) => void
}

export function AWSPluginSection({ onSectionChange }: AWSPluginSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("aws-plugin.title")}</h1>
        <p className="text-muted-foreground">
          {t("aws-plugin.subtitle")}
        </p>
        <Badge variant="secondary" className="mt-2">🔄 {t("aws-plugin.status")}</Badge>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>{t("aws-plugin.warning")}</strong>
        </AlertDescription>
      </Alert>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Cloud className="h-5 w-5" />
            <span>{t("aws-plugin.features.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("aws-plugin.features.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex space-x-3">
              <Server className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("aws-plugin.features.ec2-management")}</h4>
                <p className="text-sm text-muted-foreground">{t("aws-plugin.features.ec2-management-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Cloud className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("aws-plugin.features.multi-account")}</h4>
                <p className="text-sm text-muted-foreground">{t("aws-plugin.features.multi-account-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Settings className="h-5 w-5 text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("aws-plugin.features.optimized-performance")}</h4>
                <p className="text-sm text-muted-foreground">{t("aws-plugin.features.optimized-performance-desc")}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Key className="h-5 w-5 text-orange-600 mt-1" />
              <div>
                <h4 className="font-semibold">{t("aws-plugin.features.permission-controls")}</h4>
                <p className="text-sm text-muted-foreground">{t("aws-plugin.features.permission-controls-desc")}</p>
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
            <span>{t("aws-plugin.config.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("aws-plugin.config.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* AWS Credentials Setup */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">1</Badge>
              <span>{t("aws-plugin.config.credentials-setup")}</span>
            </h3>
            
            <div className="space-y-3">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t("aws-plugin.config.method1-env-vars")}</h4>
                <code className="text-sm">
                  export AWS_ACCESS_KEY_ID=&quot;your-aws-access-key&quot;<br/>
                  export AWS_SECRET_ACCESS_KEY=&quot;your-aws-secret-key&quot;
                </code>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t("aws-plugin.config.method2-aws-cli")}</h4>
                <code className="text-sm">
                  aws configure<br/>
                  # Follow prompts to set credentials
                </code>
              </div>
            </div>
          </div>

          {/* DashOPS Configuration */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">2</Badge>
              <span>{t("aws-plugin.config.dashops-config")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                plugins:<br/>
                &nbsp;&nbsp;- &apos;AWS&apos;<br/>
                <br/>
                aws:<br/>
                &nbsp;&nbsp;- name: &apos;Production Account&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;region: us-east-1<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;accessKeyId: $&#123;AWS_ACCESS_KEY_ID&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;secretAccessKey: $&#123;AWS_SECRET_ACCESS_KEY&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;ec2Config:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skipList:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- &apos;EKSWorkerAutoScalingGroupSpot&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- &apos;DatabaseReplica&apos;
              </code>
            </div>
          </div>

          {/* Multi-Account Configuration */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">3</Badge>
              <span>{t("aws-plugin.config.multi-account")}</span>
            </h3>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                aws:<br/>
                &nbsp;&nbsp;- name: &apos;Production US-East&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;region: us-east-1<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;accessKeyId: $&#123;AWS_PROD_EAST_KEY_ID&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;secretAccessKey: $&#123;AWS_PROD_EAST_SECRET&#125;<br/>
                <br/>
                &nbsp;&nbsp;- name: &apos;Development&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;region: us-west-2<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;accessKeyId: $&#123;AWS_DEV_KEY_ID&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;secretAccessKey: $&#123;AWS_DEV_SECRET&#125;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* EC2 Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Server className="h-5 w-5" />
            <span>{t("aws-plugin.ec2.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("aws-plugin.ec2.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">{t("aws-plugin.ec2.viewing-instances")}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t("aws-plugin.ec2.instance-list")}</li>
              <li>• {t("aws-plugin.ec2.real-time-status")}</li>
              <li>• {t("aws-plugin.ec2.instance-details")}</li>
              <li>• {t("aws-plugin.ec2.filtering")}</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">{t("aws-plugin.ec2.instance-actions")}</h4>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>{t("aws-plugin.ec2.warning")}</strong>
              </AlertDescription>
            </Alert>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t("aws-plugin.ec2.start-instance")}</li>
              <li>• {t("aws-plugin.ec2.stop-instance")}</li>
              <li>• {t("aws-plugin.ec2.instance-logs")}</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Security & Permissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5" />
            <span>{t("aws-plugin.security.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("aws-plugin.security.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">{t("aws-plugin.security.iam-requirements")}</h4>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                &#123;<br/>
                &nbsp;&nbsp;&quot;Version&quot;: &quot;2012-10-17&quot;,<br/>
                &nbsp;&nbsp;&quot;Statement&quot;: [<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Effect&quot;: &quot;Allow&quot;,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: [<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;ec2:DescribeInstances&quot;,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;ec2:DescribeInstanceStatus&quot;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: &quot;*&quot;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;]<br/>
                &#125;
              </code>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">{t("aws-plugin.security.team-access-control")}</h4>
            <div className="bg-muted p-3 rounded text-sm">
              <code>
                aws:<br/>
                &nbsp;&nbsp;- name: &apos;Development Account&apos;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;permission:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ec2:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start: [&apos;dash-ops*developers&apos;]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stop: [&apos;dash-ops*developers&apos;, &apos;dash-ops*sre&apos;]
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Beta Limitations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("aws-plugin.limitations.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("aws-plugin.limitations.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-red-600">{t("aws-plugin.limitations.not-production")}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t("aws-plugin.limitations.limited-services")}</li>
              <li>• {t("aws-plugin.limitations.basic-permissions")}</li>
              <li>• {t("aws-plugin.limitations.no-cost-controls")}</li>
              <li>• {t("aws-plugin.limitations.missing-audit")}</li>
              <li>• {t("aws-plugin.limitations.credential-exposure")}</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold">{t("aws-plugin.limitations.security-concerns")}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t("aws-plugin.limitations.plain-text-credentials")}</li>
              <li>• {t("aws-plugin.limitations.no-credential-rotation")}</li>
              <li>• {t("aws-plugin.limitations.limited-rbac")}</li>
              <li>• {t("aws-plugin.limitations.no-mfa")}</li>
              <li>• {t("aws-plugin.limitations.missing-rate-limiting")}</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ExternalLink className="h-5 w-5" />
            <span>{t("aws-plugin.roadmap.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("aws-plugin.roadmap.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-blue-600">{t("aws-plugin.roadmap.short-term")}</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• {t("aws-plugin.roadmap.enhanced-ec2")}</li>
                <li>• {t("aws-plugin.roadmap.auto-scaling")}</li>
                <li>• {t("aws-plugin.roadmap.cloudwatch")}</li>
                <li>• {t("aws-plugin.roadmap.improved-permissions")}</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-green-600">{t("aws-plugin.roadmap.medium-term")}</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• {t("aws-plugin.roadmap.additional-services")}</li>
                <li>• {t("aws-plugin.roadmap.cost-management")}</li>
                <li>• {t("aws-plugin.roadmap.resource-discovery")}</li>
                <li>• {t("aws-plugin.roadmap.compliance")}</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-purple-600">{t("aws-plugin.roadmap.long-term")}</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• {t("aws-plugin.roadmap.finops")}</li>
                <li>• {t("aws-plugin.roadmap.advanced-automation")}</li>
                <li>• {t("aws-plugin.roadmap.multi-cloud")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>{t("aws-plugin.troubleshooting.title")}</span>
          </CardTitle>
          <CardDescription>
            {t("aws-plugin.troubleshooting.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("aws-plugin.troubleshooting.access-denied")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("aws-plugin.troubleshooting.verify-iam")}</li>
                <li>• {t("aws-plugin.troubleshooting.check-env-vars")}</li>
                <li>• {t("aws-plugin.troubleshooting.ensure-credentials-valid")}</li>
              </ul>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">{t("aws-plugin.troubleshooting.instances-not-appearing")}</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• {t("aws-plugin.troubleshooting.check-skip-list")}</li>
                <li>• {t("aws-plugin.troubleshooting.verify-region")}</li>
                <li>• {t("aws-plugin.troubleshooting.confirm-instances-exist")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
