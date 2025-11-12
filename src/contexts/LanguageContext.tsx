"use client"

import { createContext, useContext, useEffect, useState, ReactNode, useCallback, useMemo } from "react"
import { loadDictionary, type Language } from "@/translations/loadDictionary"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const dictionaryCache = new Map<Language, Record<string, string>>()

async function getTranslations(language: Language) {
  if (dictionaryCache.has(language)) {
    return dictionaryCache.get(language) as Record<string, string>
  }
  const dictionary = await loadDictionary(language)
  dictionaryCache.set(language, dictionary)
  return dictionary
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("pt")
  const [translations, setTranslations] = useState<Record<string, string>>({})

  useEffect(() => {
    let active = true

    getTranslations(language).then((dictionary) => {
      if (active) {
        setTranslations(dictionary)
      }
    })

    return () => {
      active = false
    }
  }, [language])

  const t = useCallback(
    (key: string): string => {
      return translations[key] ?? key
    },
    [translations]
  )

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
