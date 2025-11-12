export const observabilityTranslations = {
  en: {
    // Observability Plugin Section
    "observability-plugin.title": "Observability Plugin",
    "observability-plugin.subtitle": "Unified interface for logs, traces, and metrics with service context integration",
    
    // Explorer Overview
    "observability-plugin.explorer.title": "Explorer",
    "observability-plugin.explorer.description": "Single endpoint that powers logs, traces, and metrics queries with contextual filters",
    "observability-plugin.explorer.modes": "Logs/Traces/Metrics modes",
    "observability-plugin.explorer.context": "Service-aware context",
    "observability-plugin.explorer.auto-refresh": "Auto-refresh & live tail",
    
    // Overview Cards
    "observability-plugin.logs.title": "Logs Mode",
    "observability-plugin.logs.description": "Search and analyze application logs inside the Explorer UI",
    "observability-plugin.logs.loki": "Loki Integration",
    "observability-plugin.logs.histogram": "Histogram Visualization",
    "observability-plugin.logs.filters": "Advanced Filters",
    
    "observability-plugin.traces.title": "Traces Mode",
    "observability-plugin.traces.description": "Investigate distributed traces with span timelines via Explorer",
    "observability-plugin.traces.tempo": "Tempo Integration",
    "observability-plugin.traces.spans": "Span Analysis",
    "observability-plugin.traces.timeline": "Timeline View",
    
    "observability-plugin.metrics.title": "Metrics Mode",
    "observability-plugin.metrics.description": "Prometheus metrics explorer (UI in development, API already available)",
    "observability-plugin.metrics.prometheus": "Prometheus Integration",
    "observability-plugin.metrics.in-development": "UI In Development",
    
    // Features
    "observability-plugin.features.title": "Key Features",
    "observability-plugin.features.unified-interface.title": "Unified Interface",
    "observability-plugin.features.unified-interface.description": "Single interface for all observability data with global controls",
    "observability-plugin.features.unified-interface.global-header": "Global header with service and time filters",
    "observability-plugin.features.unified-interface.tab-navigation": "Mode switching between logs, traces, and metrics",
    "observability-plugin.features.unified-interface.global-filters": "Global filters for service, time range, and auto-refresh",
    
    "observability-plugin.features.provider-support.title": "Provider Support",
    "observability-plugin.features.provider-support.description": "Support for multiple observability backends with provider selection",
    "observability-plugin.features.provider-support.multiple-backends": "Multiple backend support (Loki, Tempo, Prometheus)",
    "observability-plugin.features.provider-support.provider-selector": "Dynamic provider selection in UI",
    "observability-plugin.features.provider-support.service-context": "Service-aware filtering and context integration",
    
    // Configuration
    "observability-plugin.configuration.title": "Configuration",
    "observability-plugin.configuration.yaml.title": "YAML Configuration",
    "observability-plugin.configuration.yaml.description": "Configure observability providers and settings in your dash-ops.yaml file",
    
    // API Endpoints
    "observability-plugin.api-endpoints.title": "API Endpoints",
    "observability-plugin.api-endpoints.logs.title": "Explorer API",
    "observability-plugin.api-endpoints.logs.description": "Query logs, traces, and metrics using a unified endpoint (provider, mode, query, time range)",
    "observability-plugin.api-endpoints.traces.title": "Providers API",
    "observability-plugin.api-endpoints.traces.description": "List available providers for each mode (logs, traces, metrics) to build dynamic UIs",
    
    // Status
    "observability-plugin.status.title": "Development Status",
    "observability-plugin.status.current-version": "Current Version",
    "observability-plugin.status.next-version": "Next Version",
    "observability-plugin.status.completed": "Completed",
    "observability-plugin.status.in-development": "In Development",
    "observability-plugin.status.planned": "Planned",
    "observability-plugin.status.logs": "Logs Integration",
    "observability-plugin.status.traces": "Traces Integration",
    "observability-plugin.status.metrics": "Metrics Backend",
    "observability-plugin.status.metrics-frontend": "Metrics Frontend",
    "observability-plugin.status.alerts": "Alert Management",
    "observability-plugin.status.ai-analysis": "AI Analysis"
  },
  pt: {
    // Observability Plugin Section
    "observability-plugin.title": "Plugin de Observabilidade",
    "observability-plugin.subtitle": "Interface unificada para logs, traces e métricas com integração de contexto de serviços",
    
    // Explorer Overview
    "observability-plugin.explorer.title": "Explorer",
    "observability-plugin.explorer.description": "Um único endpoint que atende consultas de logs, traces e métricas com filtros contextuais",
    "observability-plugin.explorer.modes": "Modos Logs/Traces/Métricas",
    "observability-plugin.explorer.context": "Contexto consciente de serviço",
    "observability-plugin.explorer.auto-refresh": "Auto-refresh e live tail",
    
    // Overview Cards
    "observability-plugin.logs.title": "Modo Logs",
    "observability-plugin.logs.description": "Busque e analise logs diretamente na interface do Explorer",
    "observability-plugin.logs.loki": "Integração Loki",
    "observability-plugin.logs.histogram": "Visualização Histograma",
    "observability-plugin.logs.filters": "Filtros Avançados",
    
    "observability-plugin.traces.title": "Modo Traces",
    "observability-plugin.traces.description": "Investigue traces distribuídos com timeline de spans no Explorer",
    "observability-plugin.traces.tempo": "Integração Tempo",
    "observability-plugin.traces.spans": "Análise de Spans",
    "observability-plugin.traces.timeline": "Visualização Timeline",
    
    "observability-plugin.metrics.title": "Modo Métricas",
    "observability-plugin.metrics.description": "Explorer para métricas Prometheus (UI em desenvolvimento, API disponível)",
    "observability-plugin.metrics.prometheus": "Integração Prometheus",
    "observability-plugin.metrics.in-development": "UI em Desenvolvimento",
    
    // Features
    "observability-plugin.features.title": "Principais Funcionalidades",
    "observability-plugin.features.unified-interface.title": "Interface Unificada",
    "observability-plugin.features.unified-interface.description": "Interface única para todos os dados de observabilidade com controles globais",
    "observability-plugin.features.unified-interface.global-header": "Header global com filtros de serviço e tempo",
    "observability-plugin.features.unified-interface.tab-navigation": "Troca de modo entre logs, traces e métricas",
    "observability-plugin.features.unified-interface.global-filters": "Filtros globais para serviço, intervalo de tempo e auto-refresh",
    
    "observability-plugin.features.provider-support.title": "Suporte a Providers",
    "observability-plugin.features.provider-support.description": "Suporte a múltiplos backends de observabilidade com seleção de provider",
    "observability-plugin.features.provider-support.multiple-backends": "Suporte a múltiplos backends (Loki, Tempo, Prometheus)",
    "observability-plugin.features.provider-support.provider-selector": "Seleção dinâmica de provider na UI",
    "observability-plugin.features.provider-support.service-context": "Filtros baseados em serviço e integração de contexto",
    
    // Configuration
    "observability-plugin.configuration.title": "Configuração",
    "observability-plugin.configuration.yaml.title": "Configuração YAML",
    "observability-plugin.configuration.yaml.description": "Configure providers de observabilidade e ajustes no arquivo dash-ops.yaml",
    
    // API Endpoints
    "observability-plugin.api-endpoints.title": "Endpoints da API",
    "observability-plugin.api-endpoints.logs.title": "API do Explorer",
    "observability-plugin.api-endpoints.logs.description": "Consulte logs, traces e métricas usando um endpoint unificado (provider, modo, query, intervalo de tempo)",
    "observability-plugin.api-endpoints.traces.title": "API de Providers",
    "observability-plugin.api-endpoints.traces.description": "Lista os providers disponíveis por modo (logs, traces, métricas) para construir UIs dinâmicas",
    
    // Status
    "observability-plugin.status.title": "Status de Desenvolvimento",
    "observability-plugin.status.current-version": "Versão Atual",
    "observability-plugin.status.next-version": "Próxima Versão",
    "observability-plugin.status.completed": "Concluído",
    "observability-plugin.status.in-development": "Em Desenvolvimento",
    "observability-plugin.status.planned": "Planejado",
    "observability-plugin.status.logs": "Integração de Logs",
    "observability-plugin.status.traces": "Integração de Traces",
    "observability-plugin.status.metrics": "Backend de Métricas",
    "observability-plugin.status.metrics-frontend": "Frontend de Métricas",
    "observability-plugin.status.alerts": "Gerenciamento de Alertas",
    "observability-plugin.status.ai-analysis": "Análise com IA"
  }
}
