export const authPluginTranslations = {
  en: {
    "auth-plugin.title": "Authentication Plugin",
    "auth-plugin.subtitle": "Secure GitHub OAuth authentication with organization validation",
    "auth-plugin.status": "Beta",
    "auth-plugin.warning": "Beta Plugin: Basic authentication features only. Not production-ready.",

    // Overview
    "auth-plugin.overview.title": "Overview",
    "auth-plugin.overview.desc": "The Auth plugin provides secure authentication using GitHub OAuth with optional organization validation.",
    "auth-plugin.overview.intro": "GitHub-based authentication for DashOPS, enabling secure access control and organization-level permissions.",

    // Features
    "auth-plugin.features.title": "Key Features",
    "auth-plugin.features.desc": "Authentication and authorization capabilities",
    "auth-plugin.features.github-auth": "GitHub Authentication",
    "auth-plugin.features.github-auth-desc": "Integration with GitHub OAuth for secure login",
    "auth-plugin.features.org-validation": "Organization Validation",
    "auth-plugin.features.org-validation-desc": "Restrict access to specific GitHub organizations",
    "auth-plugin.features.team-permissions": "Team-based Permissions",
    "auth-plugin.features.team-permissions-desc": "Basic role assignment via GitHub teams",
    "auth-plugin.features.session": "Session Management",
    "auth-plugin.features.session-desc": "Token-based authentication with browser storage",

    // Configuration
    "auth-plugin.config.title": "Configuration",
    "auth-plugin.config.desc": "Set up GitHub OAuth for authentication",
    "auth-plugin.config.github-setup": "GitHub OAuth App Setup",
    "auth-plugin.config.step-1": "Navigate to GitHub Settings",
    "auth-plugin.config.step-1-desc": "Go to your GitHub organization → Settings → Developer settings → OAuth Apps",
    "auth-plugin.config.step-2": "Register New Application",
    "auth-plugin.config.step-2-desc": "Fill in application details with appropriate URLs",
    "auth-plugin.config.step-3": "Copy Credentials",
    "auth-plugin.config.step-3-desc": "Save the generated Client ID and Client Secret",
    "auth-plugin.config.app-name": "Application name",
    "auth-plugin.config.homepage-url": "Homepage URL",
    "auth-plugin.config.callback-url": "Authorization callback URL",
    "auth-plugin.config.local-dev": "For Local Development",
    "auth-plugin.config.local-urls": "Use localhost URLs for testing",

    // DashOPS Configuration
    "auth-plugin.dashops-config.title": "DashOPS Configuration",
    "auth-plugin.dashops-config.desc": "Add Auth configuration to your dash-ops.yaml",
    "auth-plugin.dashops-config.enable": "Enable Auth Plugin",
    "auth-plugin.dashops-config.provider": "Authentication Provider",
    "auth-plugin.dashops-config.client-id": "GitHub Client ID",
    "auth-plugin.dashops-config.client-secret": "GitHub Client Secret",
    "auth-plugin.dashops-config.redirect": "Redirect URL",
    "auth-plugin.dashops-config.org-permission": "Organization Permission",
    "auth-plugin.dashops-config.scopes": "OAuth Scopes",

    // Environment Variables
    "auth-plugin.env.title": "Environment Variables",
    "auth-plugin.env.desc": "Required environment variables for authentication",
    "auth-plugin.env.client-id": "GitHub OAuth Client ID",
    "auth-plugin.env.client-secret": "GitHub OAuth Client Secret",

    // Security & Permissions
    "auth-plugin.security.title": "Security & Permissions",
    "auth-plugin.security.desc": "Access control and security features",
    "auth-plugin.security.org-level": "Organization-level Access",
    "auth-plugin.security.org-level-desc": "Only members of specified GitHub organization can access",
    "auth-plugin.security.team-roles": "Team-based Roles",
    "auth-plugin.security.team-roles-desc": "Map GitHub teams to DashOPS permissions",
    "auth-plugin.security.token-storage": "Token Storage",
    "auth-plugin.security.token-storage-desc": "Secure token management in browser storage",

    // Login Flow
    "auth-plugin.login.title": "Login Flow",
    "auth-plugin.login.step-1": "User clicks login button",
    "auth-plugin.login.step-2": "Redirect to GitHub OAuth",
    "auth-plugin.login.step-3": "User authorizes application",
    "auth-plugin.login.step-4": "Callback to DashOPS",
    "auth-plugin.login.step-5": "Validate organization membership",
    "auth-plugin.login.step-6": "Create session and redirect",

    // API Endpoints
    "auth-plugin.api.title": "API Endpoints",
    "auth-plugin.api.login": "Initiate OAuth login",
    "auth-plugin.api.redirect": "OAuth callback handler",
    "auth-plugin.api.user": "Get current user profile",
    "auth-plugin.api.logout": "End user session",
    "auth-plugin.api.teams": "List user's GitHub teams",

    // Troubleshooting
    "auth-plugin.troubleshooting.title": "Troubleshooting",
    "auth-plugin.troubleshooting.login-fails": "Login Fails",
    "auth-plugin.troubleshooting.login-fails-fix": "Check GitHub OAuth app configuration and callback URL",
    "auth-plugin.troubleshooting.org-denied": "Organization Access Denied",
    "auth-plugin.troubleshooting.org-denied-fix": "Verify user is member of configured organization",
    "auth-plugin.troubleshooting.token-expired": "Token Expired",
    "auth-plugin.troubleshooting.token-expired-fix": "Clear browser storage and login again",
    "auth-plugin.troubleshooting.redirect-loop": "Redirect Loop",
    "auth-plugin.troubleshooting.redirect-loop-fix": "Ensure redirect URLs match configuration",

    // Limitations
    "auth-plugin.limitations.title": "Beta Limitations",
    "auth-plugin.limitations.basic-auth": "Basic authentication only",
    "auth-plugin.limitations.no-sso": "No SSO integration",
    "auth-plugin.limitations.no-mfa": "No multi-factor authentication",
    "auth-plugin.limitations.token-storage": "Token stored in browser (not server-side)",
    "auth-plugin.limitations.basic-rbac": "Simple role-based access control",
  },
  pt: {
    "auth-plugin.title": "Plugin de Autenticação",
    "auth-plugin.subtitle": "Autenticação segura GitHub OAuth com validação de organização",
    "auth-plugin.status": "Beta",
    "auth-plugin.warning": "Plugin Beta: Apenas recursos básicos de autenticação. Não pronto para produção.",

    // Overview
    "auth-plugin.overview.title": "Visão Geral",
    "auth-plugin.overview.desc": "O plugin Auth fornece autenticação segura usando GitHub OAuth com validação opcional de organização.",
    "auth-plugin.overview.intro": "Autenticação baseada em GitHub para DashOPS, permitindo controle de acesso seguro e permissões em nível de organização.",

    // Features
    "auth-plugin.features.title": "Recursos Principais",
    "auth-plugin.features.desc": "Capacidades de autenticação e autorização",
    "auth-plugin.features.github-auth": "Autenticação GitHub",
    "auth-plugin.features.github-auth-desc": "Integração com GitHub OAuth para login seguro",
    "auth-plugin.features.org-validation": "Validação de Organização",
    "auth-plugin.features.org-validation-desc": "Restringir acesso a organizações GitHub específicas",
    "auth-plugin.features.team-permissions": "Permissões Baseadas em Equipe",
    "auth-plugin.features.team-permissions-desc": "Atribuição básica de papéis via equipes GitHub",
    "auth-plugin.features.session": "Gerenciamento de Sessão",
    "auth-plugin.features.session-desc": "Autenticação baseada em token com armazenamento no navegador",

    // Configuration
    "auth-plugin.config.title": "Configuração",
    "auth-plugin.config.desc": "Configure o GitHub OAuth para autenticação",
    "auth-plugin.config.github-setup": "Configuração do App OAuth GitHub",
    "auth-plugin.config.step-1": "Navegar para Configurações GitHub",
    "auth-plugin.config.step-1-desc": "Vá para sua organização GitHub → Configurações → Configurações do desenvolvedor → Apps OAuth",
    "auth-plugin.config.step-2": "Registrar Nova Aplicação",
    "auth-plugin.config.step-2-desc": "Preencha detalhes da aplicação com URLs apropriadas",
    "auth-plugin.config.step-3": "Copiar Credenciais",
    "auth-plugin.config.step-3-desc": "Salve o Client ID e Client Secret gerados",
    "auth-plugin.config.app-name": "Nome da aplicação",
    "auth-plugin.config.homepage-url": "URL da Homepage",
    "auth-plugin.config.callback-url": "URL de callback de autorização",
    "auth-plugin.config.local-dev": "Para Desenvolvimento Local",
    "auth-plugin.config.local-urls": "Use URLs localhost para testes",

    // DashOPS Configuration
    "auth-plugin.dashops-config.title": "Configuração DashOPS",
    "auth-plugin.dashops-config.desc": "Adicione configuração Auth ao seu dash-ops.yaml",
    "auth-plugin.dashops-config.enable": "Habilitar Plugin Auth",
    "auth-plugin.dashops-config.provider": "Provedor de Autenticação",
    "auth-plugin.dashops-config.client-id": "GitHub Client ID",
    "auth-plugin.dashops-config.client-secret": "GitHub Client Secret",
    "auth-plugin.dashops-config.redirect": "URL de Redirecionamento",
    "auth-plugin.dashops-config.org-permission": "Permissão de Organização",
    "auth-plugin.dashops-config.scopes": "Escopos OAuth",

    // Environment Variables
    "auth-plugin.env.title": "Variáveis de Ambiente",
    "auth-plugin.env.desc": "Variáveis de ambiente necessárias para autenticação",
    "auth-plugin.env.client-id": "GitHub OAuth Client ID",
    "auth-plugin.env.client-secret": "GitHub OAuth Client Secret",

    // Security & Permissions
    "auth-plugin.security.title": "Segurança e Permissões",
    "auth-plugin.security.desc": "Controle de acesso e recursos de segurança",
    "auth-plugin.security.org-level": "Acesso em Nível de Organização",
    "auth-plugin.security.org-level-desc": "Apenas membros da organização GitHub especificada podem acessar",
    "auth-plugin.security.team-roles": "Papéis Baseados em Equipe",
    "auth-plugin.security.team-roles-desc": "Mapear equipes GitHub para permissões DashOPS",
    "auth-plugin.security.token-storage": "Armazenamento de Token",
    "auth-plugin.security.token-storage-desc": "Gerenciamento seguro de token no armazenamento do navegador",

    // Login Flow
    "auth-plugin.login.title": "Fluxo de Login",
    "auth-plugin.login.step-1": "Usuário clica no botão de login",
    "auth-plugin.login.step-2": "Redirecionar para GitHub OAuth",
    "auth-plugin.login.step-3": "Usuário autoriza aplicação",
    "auth-plugin.login.step-4": "Callback para DashOPS",
    "auth-plugin.login.step-5": "Validar associação à organização",
    "auth-plugin.login.step-6": "Criar sessão e redirecionar",

    // API Endpoints
    "auth-plugin.api.title": "Endpoints da API",
    "auth-plugin.api.login": "Iniciar login OAuth",
    "auth-plugin.api.redirect": "Handler de callback OAuth",
    "auth-plugin.api.user": "Obter perfil do usuário atual",
    "auth-plugin.api.logout": "Encerrar sessão do usuário",
    "auth-plugin.api.teams": "Listar equipes GitHub do usuário",

    // Troubleshooting
    "auth-plugin.troubleshooting.title": "Solução de Problemas",
    "auth-plugin.troubleshooting.login-fails": "Login Falha",
    "auth-plugin.troubleshooting.login-fails-fix": "Verifique configuração do app OAuth GitHub e URL de callback",
    "auth-plugin.troubleshooting.org-denied": "Acesso à Organização Negado",
    "auth-plugin.troubleshooting.org-denied-fix": "Verifique se usuário é membro da organização configurada",
    "auth-plugin.troubleshooting.token-expired": "Token Expirado",
    "auth-plugin.troubleshooting.token-expired-fix": "Limpe armazenamento do navegador e faça login novamente",
    "auth-plugin.troubleshooting.redirect-loop": "Loop de Redirecionamento",
    "auth-plugin.troubleshooting.redirect-loop-fix": "Garanta que URLs de redirecionamento correspondem à configuração",

    // Limitations
    "auth-plugin.limitations.title": "Limitações Beta",
    "auth-plugin.limitations.basic-auth": "Apenas autenticação básica",
    "auth-plugin.limitations.no-sso": "Sem integração SSO",
    "auth-plugin.limitations.no-mfa": "Sem autenticação multi-fator",
    "auth-plugin.limitations.token-storage": "Token armazenado no navegador (não no servidor)",
    "auth-plugin.limitations.basic-rbac": "Controle de acesso baseado em papel simples",
  }
}