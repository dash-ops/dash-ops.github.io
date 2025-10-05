"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { DocHeader } from "@/components/layout/DocHeader"
import { DocSidebar } from "@/components/layout/DocSidebar"
import { DocContent } from "@/components/layout/DocContent"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { useHashRouter } from "@/hooks/useHashRouter"

export default function Home() {
  const { currentSection, navigate } = useHashRouter()

  return (
    <LanguageProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <DocSidebar 
            activeSection={currentSection} 
            onSectionChange={navigate} 
          />
          <SidebarInset className="flex flex-col flex-1">
            <DocHeader />
            <DocContent 
              activeSection={currentSection} 
              onSectionChange={navigate} 
            />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </LanguageProvider>
  )
}
