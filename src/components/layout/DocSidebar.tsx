import { 
  BookOpen, 
  Puzzle, 
  Code, 
  Rocket, 
  Cog, 
  Cloud,
  GitBranch,
  Cpu,
  Shield,
  Settings,
  Container,
  Activity,
  Layout,
  Wand2
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLanguage } from "@/contexts/LanguageContext"

interface NavigationItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
}

interface DocSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function DocSidebar({ activeSection, onSectionChange }: DocSidebarProps) {
  const { t } = useLanguage()
  
  const navigationItems = [
    {
      title: t("nav.getting-started"),
      items: [
        { title: t("nav.introduction"), icon: BookOpen, href: "#introduction" },
        { title: t("nav.installation"), icon: Rocket, href: "#installation" },
        { title: t("nav.setup-wizard"), icon: Wand2, href: "#setup-wizard" },
        { title: t("nav.initial-setup"), icon: Cog, href: "#initial-setup" },
        { title: t("nav.first-deploy"), icon: GitBranch, href: "#first-deploy" },
        { title: t("nav.helm-deploy"), icon: Container, href: "#helm-deploy" },
      ],
    },
    {
      title: t("nav.plugins"),
      items: [
        { title: t("nav.plugins-overview"), icon: Puzzle, href: "#plugins-overview" },
        { title: t("nav.kubernetes-plugin"), icon: Cpu, href: "#kubernetes-plugin" },
        { title: t("nav.aws-plugin"), icon: Cloud, href: "#aws-plugin" },
        { title: t("nav.service-catalog-plugin"), icon: Settings, href: "#service-catalog-plugin" },
        { title: t("nav.auth-plugin"), icon: Shield, href: "#auth-plugin" },
        { title: t("nav.observability-plugin"), icon: Activity, href: "#observability-plugin" },
      ],
    },
    {
      title: t("nav.api-reference"),
      items: [
        { title: t("nav.api-intro"), icon: Code, href: "#api-intro" },
        { title: t("nav.api-auth"), icon: Shield, href: "#api-auth" },
      ],
    },
    {
      title: t("nav.developer-guide"),
      items: [
        { title: t("nav.contributing"), icon: GitBranch, href: "#contributing" },
        { title: t("nav.plugin-development"), icon: Code, href: "#plugin-development" },
        { 
          title: t("nav.backend-guide"), 
          icon: BookOpen, 
          href: "https://github.com/dash-ops/dash-ops/blob/main/docs/backend-development-guide.md",
          external: true 
        },
        { 
          title: t("nav.frontend-guide"), 
          icon: Layout, 
          href: "https://github.com/dash-ops/dash-ops/blob/main/docs/frontend-development-guide.md",
          external: true 
        },
      ],
    },
  ]

  return (
    <Sidebar className="w-64">
      <SidebarContent>
        {navigationItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isExternal = (item as NavigationItem).external === true
                  
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild
                        isActive={!isExternal && activeSection === item.href.slice(1)}
                      >
                        <a 
                          href={item.href}
                          onClick={(e) => {
                            if (!isExternal) {
                              e.preventDefault()
                              onSectionChange(item.href.slice(1))
                            }
                          }}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
