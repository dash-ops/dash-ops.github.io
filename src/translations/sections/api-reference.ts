// API Reference translations
export const apiReferencePT = {
  // Common
  "api.beta-badge": "BETA",
  "api.beta-warning": "⚠️ Esta é uma API experimental. Endpoints podem mudar sem aviso prévio. Não recomendado para uso em produção.",
  "api.parameters": "Parâmetros",
  "api.response": "Resposta",

  // Main section
  "api.title": "Referência da API",
  "api.subtitle": "API RESTful completa para gerenciar infraestrutura e integrações",

  // Overview
  "api.overview.title": "Visão Geral da API",
  "api.overview.base-url": "URL Base",
  "api.overview.content-type": "Content-Type",
  "api.overview.auth-header": "Header de Autenticação",
  "api.overview.response-format": "Formato de Resposta",

  // Auth section
  "api.auth.page-title": "Autenticação da API",
  "api.auth.page-subtitle": "Como autenticar e usar a API do DashOps com OAuth2",
  "api.auth.title": "Autenticação",
  "api.auth.description": "DashOps usa OAuth2 com GitHub para autenticação",
  "api.auth.flow-title": "Fluxo OAuth2",
  "api.auth.flow-description": "Processo completo de autenticação com GitHub",
  "api.auth.security-note": "Todos os tokens são armazenados de forma segura e podem ser revogados a qualquer momento via GitHub.",
  "api.auth.endpoints-title": "Endpoints de Autenticação",
  "api.auth.endpoints-description": "APIs para gerenciar o fluxo de autenticação",
  "api.auth.authorize": "Inicia o fluxo OAuth2 e redireciona para GitHub",
  "api.auth.callback": "Callback do OAuth2 após autorização no GitHub",
  "api.auth.logout": "Invalida a sessão do usuário",
  "api.auth.user-info": "Retorna informações do usuário autenticado",
  "api.auth.header-title": "Cabeçalho de Autenticação",
  "api.auth.header-description": "Inclua este cabeçalho em todas as requisições protegidas",
  "api.auth.header-format": "Formato do Header",
  "api.auth.example-request": "Exemplo de Requisição",
  "api.auth.storage-warning": "⚠️ BETA: Tokens atualmente armazenados em localStorage. Não recomendado para produção.",

  // Core section
  "api.core.title": "APIs Core",
  "api.core.description": "Endpoints essenciais para health check e configuração",
  "api.core.health": "Retorna o status de saúde da aplicação",
  "api.core.version": "Retorna informações de versão e build",
  "api.core.plugins": "Lista todos os plugins habilitados",

  // AWS section
  "api.aws.title": "AWS Plugin",
  "api.aws.description": "Gerenciar contas e instâncias EC2 da AWS",
  "api.aws.accounts": "Lista todas as contas AWS configuradas",
  "api.aws.instances": "Lista instâncias EC2 de uma conta",
  "api.aws.start-instance": "Inicia uma instância EC2",
  "api.aws.stop-instance": "Para uma instância EC2",

  // Kubernetes section
  "api.k8s.title": "Kubernetes Plugin",
  "api.k8s.description": "Gerenciar clusters, deployments e pods",
  "api.k8s.clusters": "Lista todos os clusters configurados",
  "api.k8s.deployments": "Lista deployments de um cluster",
  "api.k8s.scale": "Escala um deployment",
  "api.k8s.pods": "Lista pods de um cluster",
  "api.k8s.logs": "Stream de logs de um pod",

  // Service Catalog section
  "api.catalog.title": "Service Catalog",
  "api.catalog.description": "Gerenciar catálogo de serviços (em breve)",
  "api.catalog.coming-soon": "🚧 Service Catalog API em desenvolvimento - Em breve!",

  // Errors
  "api.errors.title": "Códigos de Erro",
  "api.errors.description": "Códigos HTTP e suas interpretações",
  "api.errors.200": "Operação bem-sucedida",
  "api.errors.201": "Recurso criado com sucesso",
  "api.errors.400": "Parâmetros de requisição inválidos",
  "api.errors.401": "Autenticação necessária ou falhou",
  "api.errors.403": "Permissões insuficientes",
  "api.errors.404": "Recurso não encontrado",
  "api.errors.500": "Erro interno do servidor",
  "api.errors.example-401": "Exemplo de Erro 401",

  // Testing
  "api.testing.title": "Testando a API",
  "api.testing.description": "Como testar os endpoints da API",
  "api.testing.curl": "Usando cURL",
  "api.testing.postman": "Usando Postman",
  "api.testing.postman-step1": "Defina variáveis de ambiente (baseUrl, token)",
  "api.testing.postman-step2": "Configure Authorization Type como Bearer Token",
  "api.testing.postman-step3": "Teste os endpoints usando a documentação",

  // Roadmap
  "api.roadmap.title": "Roadmap da API",
  "api.roadmap.description": "Funcionalidades planejadas para a API",
  "api.roadmap.q1-2025": "Q1 2025",
  "api.roadmap.q2-2025": "Q2 2025",
  "api.roadmap.q3-2025": "Q3+ 2025",
  "api.roadmap.api-versioning": "Versionamento da API (/api/v1/)",
  "api.roadmap.enhanced-validation": "Validação aprimorada de schemas",
  "api.roadmap.better-errors": "Mensagens de erro detalhadas",
  "api.roadmap.rate-limiting": "Rate limiting básico",
  "api.roadmap.openapi": "Documentação OpenAPI",
  "api.roadmap.pagination": "Suporte a paginação",
  "api.roadmap.api-keys": "Gerenciamento de API keys",
  "api.roadmap.audit-logs": "Logs de auditoria completos",
  "api.roadmap.graphql": "Suporte GraphQL",
  "api.roadmap.webhooks": "Sistema de webhooks",
  "api.roadmap.analytics": "Analytics de uso da API",
  "api.roadmap.sdk": "SDKs para linguagens populares"
}

export const apiReferenceEN = {
  // Common
  "api.beta-badge": "BETA",
  "api.beta-warning": "⚠️ This is an experimental API. Endpoints may change without notice. Not recommended for production use.",
  "api.parameters": "Parameters",
  "api.response": "Response",

  // Main section
  "api.title": "API Reference",
  "api.subtitle": "Complete RESTful API for managing infrastructure and integrations",

  // Overview
  "api.overview.title": "API Overview",
  "api.overview.base-url": "Base URL",
  "api.overview.content-type": "Content-Type",
  "api.overview.auth-header": "Authentication Header",
  "api.overview.response-format": "Response Format",

  // Auth section
  "api.auth.page-title": "API Authentication",
  "api.auth.page-subtitle": "How to authenticate and use DashOps API with OAuth2",
  "api.auth.title": "Authentication",
  "api.auth.description": "DashOps uses OAuth2 with GitHub for authentication",
  "api.auth.flow-title": "OAuth2 Flow",
  "api.auth.flow-description": "Complete authentication process with GitHub",
  "api.auth.security-note": "All tokens are stored securely and can be revoked at any time via GitHub.",
  "api.auth.endpoints-title": "Authentication Endpoints",
  "api.auth.endpoints-description": "APIs to manage the authentication flow",
  "api.auth.authorize": "Initiates OAuth2 flow and redirects to GitHub",
  "api.auth.callback": "OAuth2 callback after GitHub authorization",
  "api.auth.logout": "Invalidates user session",
  "api.auth.user-info": "Returns authenticated user information",
  "api.auth.header-title": "Authentication Header",
  "api.auth.header-description": "Include this header in all protected requests",
  "api.auth.header-format": "Header Format",
  "api.auth.example-request": "Example Request",
  "api.auth.storage-warning": "⚠️ BETA: Tokens currently stored in localStorage. Not recommended for production.",

  // Core section
  "api.core.title": "Core APIs",
  "api.core.description": "Essential endpoints for health checks and configuration",
  "api.core.health": "Returns application health status",
  "api.core.version": "Returns version and build information",
  "api.core.plugins": "Lists all enabled plugins",

  // AWS section
  "api.aws.title": "AWS Plugin",
  "api.aws.description": "Manage AWS accounts and EC2 instances",
  "api.aws.accounts": "Lists all configured AWS accounts",
  "api.aws.instances": "Lists EC2 instances from an account",
  "api.aws.start-instance": "Starts an EC2 instance",
  "api.aws.stop-instance": "Stops an EC2 instance",

  // Kubernetes section
  "api.k8s.title": "Kubernetes Plugin",
  "api.k8s.description": "Manage clusters, deployments and pods",
  "api.k8s.clusters": "Lists all configured clusters",
  "api.k8s.deployments": "Lists deployments from a cluster",
  "api.k8s.scale": "Scales a deployment",
  "api.k8s.pods": "Lists pods from a cluster",
  "api.k8s.logs": "Stream logs from a pod",

  // Service Catalog section
  "api.catalog.title": "Service Catalog",
  "api.catalog.description": "Manage service catalog (coming soon)",
  "api.catalog.coming-soon": "🚧 Service Catalog API in development - Coming soon!",

  // Errors
  "api.errors.title": "Error Codes",
  "api.errors.description": "HTTP codes and their interpretations",
  "api.errors.200": "Successful operation",
  "api.errors.201": "Resource created successfully",
  "api.errors.400": "Invalid request parameters",
  "api.errors.401": "Authentication required or failed",
  "api.errors.403": "Insufficient permissions",
  "api.errors.404": "Resource not found",
  "api.errors.500": "Internal server error",
  "api.errors.example-401": "401 Error Example",

  // Testing
  "api.testing.title": "Testing the API",
  "api.testing.description": "How to test API endpoints",
  "api.testing.curl": "Using cURL",
  "api.testing.postman": "Using Postman",
  "api.testing.postman-step1": "Set environment variables (baseUrl, token)",
  "api.testing.postman-step2": "Configure Authorization Type as Bearer Token",
  "api.testing.postman-step3": "Test endpoints using the documentation",

  // Roadmap
  "api.roadmap.title": "API Roadmap",
  "api.roadmap.description": "Planned features for the API",
  "api.roadmap.q1-2025": "Q1 2025",
  "api.roadmap.q2-2025": "Q2 2025",
  "api.roadmap.q3-2025": "Q3+ 2025",
  "api.roadmap.api-versioning": "API Versioning (/api/v1/)",
  "api.roadmap.enhanced-validation": "Enhanced schema validation",
  "api.roadmap.better-errors": "Detailed error messages",
  "api.roadmap.rate-limiting": "Basic rate limiting",
  "api.roadmap.openapi": "OpenAPI documentation",
  "api.roadmap.pagination": "Pagination support",
  "api.roadmap.api-keys": "API key management",
  "api.roadmap.audit-logs": "Complete audit logs",
  "api.roadmap.graphql": "GraphQL support",
  "api.roadmap.webhooks": "Webhook system",
  "api.roadmap.analytics": "API usage analytics",
  "api.roadmap.sdk": "SDKs for popular languages"
}


export const apiReferenceTranslations = {
  pt: apiReferencePT,
  en: apiReferenceEN
}
