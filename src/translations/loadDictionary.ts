const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  pt: () => import('./dictionaries/pt.json').then((module) => module.default),
} as const

export type Language = keyof typeof dictionaries

export async function loadDictionary(locale: Language) {
  return dictionaries[locale]()
}
