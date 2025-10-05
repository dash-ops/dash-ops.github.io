// Import all section translations
import { pluginDevTranslations } from './plugin-dev'
import { contributingTranslations } from './contributing'
import { introTranslations } from './intro'
import { apiReferenceTranslations } from './api-reference'
import { backendGuideTranslations } from './backend-guide'
import { awsPluginTranslations } from './aws-plugin'
import { deployTranslations } from './deploy'
import { kubernetesPluginTranslations } from './kubernetes-plugin'
import { serviceCatalogPluginTranslations } from './service-catalog-plugin'
import { authPluginTranslations } from './auth-plugin'

// Re-export for individual access if needed
export {
  pluginDevTranslations,
  contributingTranslations,
  introTranslations,
  apiReferenceTranslations,
  backendGuideTranslations,
  awsPluginTranslations,
  deployTranslations,
  kubernetesPluginTranslations,
  serviceCatalogPluginTranslations,
  authPluginTranslations
}

// Function to merge all section translations
export function mergeSectionTranslations(lang: 'en' | 'pt') {
  return {
    ...introTranslations[lang],
    ...apiReferenceTranslations[lang],
    ...backendGuideTranslations[lang],
    ...awsPluginTranslations[lang],
    ...kubernetesPluginTranslations[lang],
    ...serviceCatalogPluginTranslations[lang],
    ...authPluginTranslations[lang],
    ...deployTranslations[lang],
    ...pluginDevTranslations[lang],
    ...contributingTranslations[lang],
  }
}