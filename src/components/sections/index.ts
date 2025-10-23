// Central export file for all sections
// This allows importing from '@/components/sections' directly

// Getting Started sections
export {
  IntroductionSection,
  InstallationSection,
  ConfigurationSection,
  FirstDeploySection,
  HelmDeploymentSection
} from './getting-started'

// Plugin sections
export {
  PluginsOverviewSection,
  KubernetesPluginSection,
  AWSPluginSection,
  ServiceCatalogPluginSection,
  AuthPluginSection,
  ObservabilityPluginSection
} from './plugins'

// API Reference sections
export {
  ApiReferenceSection,
  ApiAuthSection
} from './api-reference'

// Developer Guide sections
export {
  PluginDevelopmentSection,
  ContributingSection
} from './developer-guide'
