"use client"

import { Search, Github, Moon, Sun, Languages, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useDocSearch } from "@/hooks/useDocSearch"

interface DocHeaderProps {
  onNavigate?: (section: string) => void
}

export function DocHeader({ onNavigate }: DocHeaderProps) {
  const [isDark, setIsDark] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { searchQuery, setSearchQuery, searchResults, hasResults } = useDocSearch()
  const searchRef = useRef<HTMLDivElement>(null)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setIsSearchOpen(value.length > 0)
  }

  const handleResultClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section)
    }
    setSearchQuery('')
    setIsSearchOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4">
        <div className="mr-4 flex items-center">
          <SidebarTrigger className="mr-2" />
          <div className="mr-6 flex items-center space-x-2">
            <div className="h-6 w-6 rounded bg-primary"></div>
            <span className="hidden font-bold sm:inline-block">DashOPS</span>
            <Badge variant="secondary" className="text-xs">
              {t("experimental")}
            </Badge>
          </div>
        </div>
        
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none" ref={searchRef}>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={t("search.placeholder")}
                className="pl-8 md:w-[300px] lg:w-[400px]"
              />
              
              {/* Search Results Dropdown */}
              {isSearchOpen && hasResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                  <div className="p-2 space-y-1">
                    {searchResults.map((result) => (
                      <button
                        key={result.section}
                        onClick={() => handleResultClick(result.section)}
                        className="w-full text-left p-3 hover:bg-accent rounded-md transition-colors flex items-start gap-3"
                      >
                        <FileText className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{result.title}</p>
                          {result.description && (
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {result.description}
                            </p>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results Message */}
              {isSearchOpen && searchQuery.length > 0 && !hasResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50">
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    {t("search.no-results")}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                onClick={() => setLanguage("pt")}
                className={language === "pt" ? "bg-accent" : ""}
              >
                🇧🇷 Português
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-accent" : ""}
              >
                🇺🇸 English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/dashops" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
