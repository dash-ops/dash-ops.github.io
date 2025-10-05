// Import all sections from the organized structure
import {
  IntroductionSection,
  InstallationSection,
  ConfigurationSection,
  FirstDeploySection,
  PluginsOverviewSection,
  AuthPluginSection,
  AWSPluginSection,
  KubernetesPluginSection,
  ServiceCatalogPluginSection,
  ApiReferenceSection,
  BackendGuideSection
} from "../sections"
import { Breadcrumbs } from "./Breadcrumbs"
import { useLanguage } from "@/contexts/LanguageContext"

interface DocContentProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function DocContent({ activeSection, onSectionChange }: DocContentProps) {
  const { t } = useLanguage()
  
      const getBreadcrumbs = () => {
        switch (activeSection) {
          case "introduction":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.introduction") }]
          case "installation":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.getting-started") }, { label: t("nav.installation") }]
          case "initial-setup":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.getting-started") }, { label: t("nav.initial-setup") }]
          case "first-deploy":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.getting-started") }, { label: t("nav.first-deploy") }]
          case "plugins-overview":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.plugins") }, { label: t("nav.plugins-overview") }]
          case "auth-plugin":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.plugins") }, { label: t("nav.auth-plugin") }]
          case "aws-plugin":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.plugins") }, { label: t("nav.aws-plugin") }]
          case "kubernetes-plugin":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.plugins") }, { label: t("nav.kubernetes-plugin") }]
          case "service-catalog-plugin":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.plugins") }, { label: t("nav.service-catalog-plugin") }]
          case "api-intro":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.api-reference") }, { label: t("nav.api-intro") }]
          case "api-auth":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.api-reference") }, { label: t("nav.api-auth") }]
          case "backend-guide":
            return [{ label: t("breadcrumb.home") }, { label: t("nav.api-reference") }, { label: t("nav.backend-guide") }]
          default:
            return [{ label: t("breadcrumb.home") }, { label: t("nav.introduction") }]
        }
      }

      const renderSection = () => {
        switch (activeSection) {
          case "installation":
            return <InstallationSection />
          case "initial-setup":
            return <ConfigurationSection />
          case "first-deploy":
            return <FirstDeploySection onSectionChange={onSectionChange} />
          case "plugins-overview":
            return <PluginsOverviewSection onSectionChange={onSectionChange} />
          case "auth-plugin":
            return <AuthPluginSection onSectionChange={onSectionChange} />
          case "aws-plugin":
            return <AWSPluginSection onSectionChange={onSectionChange} />
          case "kubernetes-plugin":
            return <KubernetesPluginSection onSectionChange={onSectionChange} />
          case "service-catalog-plugin":
            return <ServiceCatalogPluginSection onSectionChange={onSectionChange} />
          case "api-intro":
          case "api-auth":
          case "api-endpoints":
            return <ApiReferenceSection onSectionChange={onSectionChange} />
          case "backend-guide":
            return <BackendGuideSection onSectionChange={onSectionChange} />
          case "introduction":
          default:
            return <IntroductionSection onSectionChange={onSectionChange} />
        }
      }


      const renderSectionContent = () => {
        switch (activeSection) {
          case "introduction":
          case "installation":
          case "initial-setup":
          case "first-deploy":
          case "plugins-overview":
          case "auth-plugin":
          case "aws-plugin":
          case "kubernetes-plugin":
          case "service-catalog-plugin":
          case "api-intro":
          case "api-auth":
          case "api-endpoints":
          case "backend-guide":
            return renderSection()

          default:
            return renderSection()
        }
      }

  return (
    <main className="flex-1 p-6 overflow-auto">
      <div className="max-w-4xl mx-auto space-y-6">
        <Breadcrumbs items={getBreadcrumbs()} />
        {renderSectionContent()}
      </div>
    </main>
  )
}
