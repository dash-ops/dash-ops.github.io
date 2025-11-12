import { useState, useEffect } from 'react'

export function useHashRouter() {
  const [currentSection, setCurrentSection] = useState<string>('introduction')
  const [hydrated, setHydrated] = useState(false)

  const updateHash = (section: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = section
      window.history.replaceState(null, '', `#${section}`)
    }
  }

  const navigate = (section: string) => {
    setCurrentSection(section)
    updateHash(section)
  }

  useEffect(() => {
    setHydrated(true)

    const hash = window.location.hash.slice(1)
    if (hash) {
      setCurrentSection(hash)
    } else {
      setCurrentSection('quick-start')
      updateHash('quick-start')
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1)
      if (newHash) {
        setCurrentSection(newHash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [])

  return { currentSection: hydrated ? currentSection : 'introduction', navigate }
}
