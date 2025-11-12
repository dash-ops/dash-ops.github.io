// Import all section translations
import { pluginDevTranslations } from './plugin-dev'
import { contributingTranslations } from './contributing'
import { introTranslations } from './intro'
import { setupTranslations } from './setup'
import { apiReferenceTranslations } from './api-reference'
import { backendGuideTranslations } from './backend-guide'
import { awsPluginTranslations } from './aws-plugin'
import { deployTranslations } from './deploy'
import { kubernetesPluginTranslations } from './kubernetes-plugin'
import { serviceCatalogPluginTranslations } from './service-catalog-plugin'
import { authPluginTranslations } from './auth-plugin'
import { helmTranslations } from './helm'
import { observabilityTranslations } from './observability'

// Re-export for individual access if needed
export {
  pluginDevTranslations,
  contributingTranslations,
  introTranslations,
  setupTranslations,
  apiReferenceTranslations,
  backendGuideTranslations,
  awsPluginTranslations,
  deployTranslations,
  kubernetesPluginTranslations,
  serviceCatalogPluginTranslations,
  authPluginTranslations,
  helmTranslations,
  observabilityTranslations
}

// Function to merge all section translations
export function mergeSectionTranslations(lang: 'en' | 'pt') {
  return {
    ...introTranslations[lang],
    ...setupTranslations[lang],
    ...apiReferenceTranslations[lang],
    ...backendGuideTranslations[lang],
    ...awsPluginTranslations[lang],
    ...kubernetesPluginTranslations[lang],
    ...serviceCatalogPluginTranslations[lang],
    ...authPluginTranslations[lang],
    ...deployTranslations[lang],
    ...helmTranslations[lang],
    ...observabilityTranslations[lang],
    ...pluginDevTranslations[lang],
    ...contributingTranslations[lang],
  }
}
