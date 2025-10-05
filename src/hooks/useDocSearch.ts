"use client"

import { useState, useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export interface SearchResult {
  section: string
  title: string
  description: string
  keywords: string[]
}

export function useDocSearch() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')

  // All searchable sections with keywords
  const searchableContent: SearchResult[] = useMemo(() => [
    // Getting Started
    {
      section: 'introduction',
      title: t('nav.introduction'),
      description: t('intro.subtitle'),
      keywords: ['introduction', 'overview', 'beta', 'ai', 'hub', 'introdução', 'visão geral']
    },
    {
      section: 'installation',
      title: t('nav.installation'),
      description: t('install.subtitle'),
      keywords: ['install', 'setup', 'docker', 'local', 'development', 'instalação', 'configurar']
    },
    {
      section: 'initial-setup',
      title: t('nav.initial-setup'),
      description: t('config.subtitle'),
      keywords: ['configuration', 'config', 'yaml', 'setup', 'environment', 'configuração', 'ambiente']
    },
    {
      section: 'first-deploy',
      title: t('nav.first-deploy'),
      description: 'Deploy your first DashOps instance',
      keywords: ['deploy', 'first', 'run', 'start', 'primeiro', 'executar', 'iniciar']
    },
    {
      section: 'helm-deploy',
      title: t('nav.helm-deploy'),
      description: t('helm.subtitle'),
      keywords: ['helm', 'kubernetes', 'k8s', 'deployment', 'chart', 'deploy']
    },
    // Plugins
    {
      section: 'plugins-overview',
      title: t('nav.plugins-overview'),
      description: 'Overview of available plugins',
      keywords: ['plugins', 'overview', 'modules', 'integrations', 'visão geral']
    },
    {
      section: 'auth-plugin',
      title: t('nav.auth-plugin'),
      keywords: ['auth', 'oauth', 'github', 'authentication', 'login', 'autenticação', 'login']
    },
    {
      section: 'aws-plugin',
      title: t('nav.aws-plugin'),
      description: 'AWS EC2 instance management',
      keywords: ['aws', 'ec2', 'cloud', 'amazon', 'instances', 'instâncias']
    },
    {
      section: 'kubernetes-plugin',
      title: t('nav.kubernetes-plugin'),
      description: 'Kubernetes cluster management',
      keywords: ['kubernetes', 'k8s', 'cluster', 'pods', 'deployments', 'containers']
    },
    {
      section: 'service-catalog-plugin',
      title: t('nav.service-catalog-plugin'),
      description: 'Service catalog management',
      keywords: ['service', 'catalog', 'services', 'catálogo', 'serviços']
    },
    // API Reference
    {
      section: 'api-intro',
      title: t('nav.api-intro'),
      description: 'API introduction and overview',
      keywords: ['api', 'rest', 'endpoints', 'reference', 'referência']
    },
    {
      section: 'api-auth',
      title: t('nav.api-auth'),
      description: 'API authentication with OAuth2',
      keywords: ['api', 'auth', 'oauth', 'authentication', 'token', 'bearer', 'autenticação']
    },
    // Developer Guide
    {
      section: 'contributing',
      title: t('nav.contributing'),
      description: 'How to contribute to DashOps',
      keywords: ['contribute', 'contributing', 'development', 'pull request', 'pr', 'contribuir']
    },
    {
      section: 'plugin-development',
      title: t('nav.plugin-development'),
      description: 'Create your own DashOps plugins',
      keywords: ['plugin', 'development', 'create', 'build', 'desenvolvimento', 'criar']
    },
  ], [t])

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return []
    }

    const query = searchQuery.toLowerCase()
    
    return searchableContent
      .filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query)
        const descMatch = item.description?.toLowerCase().includes(query)
        const keywordsMatch = item.keywords.some(k => k.toLowerCase().includes(query))
        
        return titleMatch || descMatch || keywordsMatch
      })
      .slice(0, 8) // Limit to 8 results
  }, [searchQuery, searchableContent])

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    hasResults: searchResults.length > 0
  }
}

