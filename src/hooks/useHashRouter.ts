import { useState, useEffect } from 'react'

export function useHashRouter() {
  const [currentSection, setCurrentSection] = useState<string>(() => {
    // Get initial section from hash or default to 'introduction'
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1)
      return hash || 'introduction'
    }
    return 'introduction'
  })

  const navigate = (section: string) => {
    setCurrentSection(section)
    if (typeof window !== 'undefined') {
      window.location.hash = section
      // Update browser history without page reload
      window.history.replaceState(null, '', `#${section}`)
    }
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash && hash !== currentSection) {
        setCurrentSection(hash)
      }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    // Also listen for popstate (back/forward buttons)
    window.addEventListener('popstate', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [currentSection])

  return { currentSection, navigate }
}
