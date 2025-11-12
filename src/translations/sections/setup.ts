export const setupTranslations = {
  en: {
    // Setup Wizard Section
    "setup.title": "Interactive Setup Wizard",
    "setup.subtitle": "Configure DashOPS through an intuitive guided experience without writing YAML manually",
    "setup.new-badge": "NEW - Alpha",
    "setup.overview": "No more manual YAML configuration!",
    "setup.overview-desc": "The new Setup Wizard guides first-time users through plugin selection, credential entry, and configuration generation. All secrets are securely masked in the UI.",
    
    // Getting Started
    "setup.getting-started": "How to Access the Setup Wizard",
    "setup.getting-started-desc": "Start the backend and frontend services - first-time users are automatically redirected",
    "setup.step-1-backend": "Terminal 1: Start backend",
    "setup.step-2-frontend": "Terminal 2: Start frontend",
    "setup.step-3-open": "Open browser",
    "setup.first-time-info": "When you open the application for the first time (with no dash-ops.yaml file), you'll automatically be redirected to the Setup Wizard.",
    
    // Usage Scenarios
    "setup.scenarios.title": "How to Use the Setup Wizard",
    "setup.scenario-1-title": "First-Time Setup",
    "setup.scenario-1-desc": "Automatically launched when no configuration exists",
    "setup.scenario-1-details": "Start DashOPS without a dash-ops.yaml file and the wizard opens automatically",
    "setup.scenario-1-step-1": "Select plugins you want to use",
    "setup.scenario-1-step-2": "Enter credentials (masked in UI)",
    "setup.scenario-1-step-3": "Click 'Complete Setup' to save",
    "setup.automatic": "Automatic",
    
    "setup.scenario-2-title": "Update Settings",
    "setup.scenario-2-desc": "Modify configuration after initial setup",
    "setup.scenario-2-details": "Access Settings page from the dashboard to add providers, update credentials, or change plugins",
    "setup.update-credentials": "update providers & credentials",
    "setup.anytime": "Anytime",
    
    "setup.scenario-3-title": "Manual YAML",
    "setup.scenario-3-desc": "For infrastructure-as-code workflows",
    "setup.scenario-3-details": "Create/edit dash-ops.yaml manually and the UI reflects your changes with secrets masked",
    "setup.yaml-reference": "View YAML Reference",
    "setup.advanced": "Advanced",
    
    // Wizard Walkthrough
    "setup.wizard-walkthrough.title": "Setup Wizard Walkthrough",
    "setup.wizard-walkthrough.desc": "Overview of the 7 configuration tabs",
    "setup.configuration-tabs": "Configuration Tabs",
    "setup.basic": "Basic",
    "setup.select-features": "Select features",
    "setup.optional": "Optional",
    "setup.key-features": "Key Features",
    "setup.feature-dynamic-tabs": "Dynamic tabs based on selected plugins",
    "setup.feature-live-validation": "Live validation with specific error messages",
    "setup.feature-secret-masking": "Secret masking - API never returns real values",
    "setup.feature-auto-save": "Auto-saves to ./dash-ops.yaml or $DASH_CONFIG",
    "setup.view-yaml-reference": "View YAML Reference",
    
    // Tab 1: General
    "setup.tab-general": "General Settings",
    "setup.tab-general-desc": "Basic application configuration like port, origin, and frontend path",
    "setup.field-port": "Backend Port",
    "setup.field-port-desc": "Port where the backend API will run (default: 8080)",
    "setup.field-origin": "Frontend Origin",
    "setup.field-origin-desc": "URL of your frontend application for CORS (default: http://localhost:5173)",
    "setup.field-frontend-path": "Frontend Path",
    "setup.field-frontend-path-desc": "Static files directory for production builds (default: front/dist)",
    
    // Tab 2: Plugins
    "setup.tab-plugins": "Plugin Selection",
    "setup.tab-plugins-desc": "Choose which plugins to enable - each plugin adds specific functionality to DashOPS",
    "setup.plugin-selection-tip": "You can select multiple plugins. Only enabled plugins will appear in the sidebar menu and load their configuration tabs.",
    
    // Tab 3: Authentication
    "setup.tab-auth": "Authentication (GitHub OAuth2)",
    "setup.tab-auth-desc": "Configure GitHub OAuth2 for secure user authentication",
    "setup.auth-fields": "Required fields for GitHub OAuth:",
    "setup.field-client-id": "Client ID",
    "setup.field-client-id-desc": "GitHub OAuth App Client ID (from Developer Settings)",
    "setup.field-client-secret": "Client Secret",
    "setup.field-client-secret-desc": "GitHub OAuth App Client Secret (securely stored, never returned by API)",
    "setup.field-org-permission": "Organization Permission",
    "setup.field-org-permission-desc": "GitHub organization name to restrict access (only members can login)",
    "setup.field-scopes": "OAuth Scopes",
    "setup.field-scopes-desc": "Required scopes: user, repo, read:org",
    "setup.github-oauth-setup-required": "You must create a GitHub OAuth App before completing this step. See the Configuration guide for detailed instructions.",
    
    // Tab 4: Kubernetes
    "setup.tab-kubernetes": "Kubernetes Clusters",
    "setup.tab-kubernetes-desc": "Add one or more Kubernetes clusters to manage workloads and resources",
    "setup.k8s-cluster-fields": "Fields for each cluster:",
    "setup.field-cluster-name": "Cluster Name",
    "setup.field-cluster-name-desc": "Display name for this cluster in the UI",
    "setup.field-kubeconfig": "Kubeconfig Path",
    "setup.field-kubeconfig-desc": "Path to your kubeconfig file (e.g., $HOME/.kube/config)",
    "setup.field-context": "Context Name",
    "setup.field-context-desc": "Specific context to use from your kubeconfig",
    "setup.k8s-multiple-clusters": "You can add multiple clusters by clicking 'Add Cluster'. Switch between them using the cluster selector in the UI.",
    
    // Tab 5: AWS
    "setup.tab-aws": "AWS Accounts",
    "setup.tab-aws-desc": "Configure AWS accounts for EC2 instance management and cost optimization",
    "setup.aws-account-fields": "Fields for each AWS account:",
    "setup.field-account-name": "Account Name",
    "setup.field-account-name-desc": "Display name for this AWS account",
    "setup.field-region": "AWS Region",
    "setup.field-region-desc": "Primary region for EC2 operations (e.g., us-east-1)",
    "setup.field-access-key": "Access Key ID",
    "setup.field-access-key-desc": "AWS IAM access key (masked in UI after save)",
    "setup.field-secret-key": "Secret Access Key",
    "setup.field-secret-key-desc": "AWS IAM secret key (never returned by API after save)",
    
    // Tab 6: Service Catalog
    "setup.tab-service-catalog": "Service Catalog",
    "setup.tab-service-catalog-desc": "Configure storage backend for your service registry",
    "setup.catalog-storage-options": "Choose a storage backend:",
    "setup.storage-filesystem": "Filesystem Storage",
    "setup.storage-filesystem-desc": "Store service definitions in local YAML files (recommended for getting started)",
    "setup.storage-github": "GitHub Storage",
    "setup.storage-github-desc": "Version service definitions in a GitHub repository (requires token)",
    "setup.storage-s3": "S3 Storage",
    "setup.storage-s3-desc": "Store services in AWS S3 bucket (requires AWS credentials)",
    
    // Tab 7: Observability
    "setup.tab-observability": "Observability Providers",
    "setup.tab-observability-desc": "Configure logs, traces, and metrics providers for application monitoring",
    "setup.logs-provider-desc": "Query logs with histogram visualization",
    "setup.traces-provider-desc": "Distributed tracing with timeline view",
    "setup.metrics-provider-desc": "Time-series metrics and alerting",
    "setup.observability-multiple-providers": "You can configure multiple providers for each type (logs, traces, metrics) and switch between them in the UI.",
    
    // Security & Secrets
    "setup.security-title": "Security & Secret Management",
    "setup.security-desc": "How DashOPS protects your sensitive credentials",
    "setup.secrets-masked-title": "Secrets are always masked:",
    "setup.secrets-masked-desc": "The UI never displays actual secret values - only masked placeholders like *****",
    "setup.how-secrets-work": "How secrets are handled:",
    "setup.secrets-point-1": "When you save a secret, it's written to dash-ops.yaml (as ${ENV_VAR} or plain text)",
    "setup.secrets-point-2": "The API never returns actual secret values - only masked placeholders or 'has secret' flags",
    "setup.secrets-point-3": "To update a secret, you provide a new value in the UI, which replaces the old one",
    "setup.secrets-point-4": "Leaving a secret field empty keeps the existing value unchanged",
    "setup.security-warning-title": "Beta Security Warning:",
    "setup.security-warning-beta": "Current secret storage is basic (plain YAML files). Enterprise features like encrypted storage, Vault integration, and fine-grained RBAC are planned for production releases.",
    
    // Configuration File
    "setup.config-file-title": "Generated Configuration File",
    "setup.config-file-desc": "The Setup Wizard generates a dash-ops.yaml file with your selections",
    "setup.where-saved": "Where the configuration is saved:",
    "setup.default-path": "Default path",
    "setup.custom-path": "Or set a custom path with environment variable",
    "setup.manual-edit-allowed": "You can manually edit dash-ops.yaml at any time. Changes will be reflected in the Settings page (with secrets masked).",
    "setup.example-output": "Example generated configuration:",
    
    // Updating Settings
    "setup.updating-settings-title": "Updating Configuration Later",
    "setup.updating-settings-desc": "You don't need to re-run setup to change providers or credentials",
    "setup.settings-page-access": "After initial setup, access the Settings page anytime to:",
    "setup.sidebar-menu": "Dashboard",
    "setup.update-providers": "Add/remove providers, update credentials, change plugin selections",
    "setup.settings-same-forms": "The Settings page uses the same forms as Setup, so the experience is consistent. All secrets remain masked and secure.",
    
    // Next Steps
    "setup.next-steps-title": "Next Steps After Setup",
    "setup.next-step-1-title": "Explore the Dashboard",
    "setup.next-step-1-desc": "After completing setup, you'll be redirected to the main dashboard with enabled plugins in the sidebar",
    "setup.next-step-2-title": "Try Plugin Features",
    "setup.next-step-2-desc": "Each plugin (AWS, Kubernetes, Observability) has its own section with specific operations",
    "setup.next-step-3-title": "Check the Plugin Documentation",
    "setup.next-step-3-desc": "Visit individual plugin guides to learn about advanced features and configuration options",
  },
  
  pt: {
    // Setup Wizard Section
    "setup.title": "Assistente de Configuração Interativo",
    "setup.subtitle": "Configure o DashOPS através de uma experiência guiada intuitiva sem escrever YAML manualmente",
    "setup.new-badge": "NOVO - Alpha",
    "setup.overview": "Sem mais configuração YAML manual!",
    "setup.overview-desc": "O novo Assistente de Configuração guia usuários iniciantes através da seleção de plugins, entrada de credenciais e geração de configuração. Todos os segredos são mascarados com segurança na UI.",
    
    // Getting Started
    "setup.getting-started": "Como Acessar o Assistente de Configuração",
    "setup.getting-started-desc": "Inicie os serviços backend e frontend - usuários iniciantes são redirecionados automaticamente",
    "setup.step-1-backend": "Terminal 1: Iniciar backend",
    "setup.step-2-frontend": "Terminal 2: Iniciar frontend",
    "setup.step-3-open": "Abrir navegador",
    "setup.first-time-info": "Quando você abrir a aplicação pela primeira vez (sem arquivo dash-ops.yaml), será redirecionado automaticamente para o Assistente de Configuração.",
    
    // Usage Scenarios
    "setup.scenarios.title": "Como Usar o Assistente de Configuração",
    "setup.scenario-1-title": "Setup Inicial",
    "setup.scenario-1-desc": "Lançado automaticamente quando não existe configuração",
    "setup.scenario-1-details": "Inicie o DashOPS sem um arquivo dash-ops.yaml e o assistente abre automaticamente",
    "setup.scenario-1-step-1": "Selecione plugins que deseja usar",
    "setup.scenario-1-step-2": "Insira credenciais (mascaradas na UI)",
    "setup.scenario-1-step-3": "Clique em 'Completar Setup' para salvar",
    "setup.automatic": "Automático",
    
    "setup.scenario-2-title": "Atualizar Configurações",
    "setup.scenario-2-desc": "Modifique a configuração após setup inicial",
    "setup.scenario-2-details": "Acesse a página de Configurações do dashboard para adicionar providers, atualizar credenciais ou mudar plugins",
    "setup.update-credentials": "atualizar providers e credenciais",
    "setup.anytime": "A qualquer momento",
    
    "setup.scenario-3-title": "YAML Manual",
    "setup.scenario-3-desc": "Para workflows de infraestrutura-como-código",
    "setup.scenario-3-details": "Crie/edite dash-ops.yaml manualmente e a UI reflete suas mudanças com segredos mascarados",
    "setup.yaml-reference": "Ver Referência YAML",
    "setup.advanced": "Avançado",
    
    // Wizard Walkthrough
    "setup.wizard-walkthrough.title": "Tour pelo Assistente",
    "setup.wizard-walkthrough.desc": "Visão geral das 7 abas de configuração",
    "setup.configuration-tabs": "Abas de Configuração",
    "setup.basic": "Básico",
    "setup.select-features": "Selecionar recursos",
    "setup.optional": "Opcional",
    "setup.key-features": "Principais Recursos",
    "setup.feature-dynamic-tabs": "Abas dinâmicas baseadas em plugins selecionados",
    "setup.feature-live-validation": "Validação em tempo real com mensagens específicas de erro",
    "setup.feature-secret-masking": "Mascaramento de segredos - API nunca retorna valores reais",
    "setup.feature-auto-save": "Auto-salva em ./dash-ops.yaml ou $DASH_CONFIG",
    "setup.view-yaml-reference": "Ver Referência YAML",
    
    // Tab 1: General
    "setup.tab-general": "Configurações Gerais",
    "setup.tab-general-desc": "Configuração básica da aplicação como porta, origem e caminho do frontend",
    "setup.field-port": "Porta do Backend",
    "setup.field-port-desc": "Porta onde a API do backend irá executar (padrão: 8080)",
    "setup.field-origin": "Origem do Frontend",
    "setup.field-origin-desc": "URL da sua aplicação frontend para CORS (padrão: http://localhost:5173)",
    "setup.field-frontend-path": "Caminho do Frontend",
    "setup.field-frontend-path-desc": "Diretório de arquivos estáticos para builds de produção (padrão: front/dist)",
    
    // Tab 2: Plugins
    "setup.tab-plugins": "Seleção de Plugins",
    "setup.tab-plugins-desc": "Escolha quais plugins habilitar - cada plugin adiciona funcionalidade específica ao DashOPS",
    "setup.plugin-selection-tip": "Você pode selecionar múltiplos plugins. Apenas plugins habilitados aparecerão no menu lateral e carregarão suas abas de configuração.",
    
    // Tab 3: Authentication
    "setup.tab-auth": "Autenticação (GitHub OAuth2)",
    "setup.tab-auth-desc": "Configure GitHub OAuth2 para autenticação segura de usuários",
    "setup.auth-fields": "Campos obrigatórios para GitHub OAuth:",
    "setup.field-client-id": "Client ID",
    "setup.field-client-id-desc": "ID do Cliente do GitHub OAuth App (de Configurações do Desenvolvedor)",
    "setup.field-client-secret": "Client Secret",
    "setup.field-client-secret-desc": "Segredo do Cliente do GitHub OAuth App (armazenado com segurança, nunca retornado pela API)",
    "setup.field-org-permission": "Permissão de Organização",
    "setup.field-org-permission-desc": "Nome da organização GitHub para restringir acesso (apenas membros podem fazer login)",
    "setup.field-scopes": "Escopos OAuth",
    "setup.field-scopes-desc": "Escopos obrigatórios: user, repo, read:org",
    "setup.github-oauth-setup-required": "Você deve criar um GitHub OAuth App antes de completar este passo. Veja o guia de Configuração para instruções detalhadas.",
    
    // Tab 4: Kubernetes
    "setup.tab-kubernetes": "Clusters Kubernetes",
    "setup.tab-kubernetes-desc": "Adicione um ou mais clusters Kubernetes para gerenciar workloads e recursos",
    "setup.k8s-cluster-fields": "Campos para cada cluster:",
    "setup.field-cluster-name": "Nome do Cluster",
    "setup.field-cluster-name-desc": "Nome de exibição para este cluster na UI",
    "setup.field-kubeconfig": "Caminho do Kubeconfig",
    "setup.field-kubeconfig-desc": "Caminho para seu arquivo kubeconfig (ex: $HOME/.kube/config)",
    "setup.field-context": "Nome do Contexto",
    "setup.field-context-desc": "Contexto específico para usar do seu kubeconfig",
    "setup.k8s-multiple-clusters": "Você pode adicionar múltiplos clusters clicando em 'Adicionar Cluster'. Alterne entre eles usando o seletor de cluster na UI.",
    
    // Tab 5: AWS
    "setup.tab-aws": "Contas AWS",
    "setup.tab-aws-desc": "Configure contas AWS para gerenciamento de instâncias EC2 e otimização de custos",
    "setup.aws-account-fields": "Campos para cada conta AWS:",
    "setup.field-account-name": "Nome da Conta",
    "setup.field-account-name-desc": "Nome de exibição para esta conta AWS",
    "setup.field-region": "Região AWS",
    "setup.field-region-desc": "Região principal para operações EC2 (ex: us-east-1)",
    "setup.field-access-key": "Access Key ID",
    "setup.field-access-key-desc": "Chave de acesso IAM da AWS (mascarada na UI após salvar)",
    "setup.field-secret-key": "Secret Access Key",
    "setup.field-secret-key-desc": "Chave secreta IAM da AWS (nunca retornada pela API após salvar)",
    
    // Tab 6: Service Catalog
    "setup.tab-service-catalog": "Catálogo de Serviços",
    "setup.tab-service-catalog-desc": "Configure o backend de armazenamento para seu registro de serviços",
    "setup.catalog-storage-options": "Escolha um backend de armazenamento:",
    "setup.storage-filesystem": "Armazenamento em Sistema de Arquivos",
    "setup.storage-filesystem-desc": "Armazene definições de serviços em arquivos YAML locais (recomendado para começar)",
    "setup.storage-github": "Armazenamento no GitHub",
    "setup.storage-github-desc": "Versione definições de serviços em um repositório GitHub (requer token)",
    "setup.storage-s3": "Armazenamento S3",
    "setup.storage-s3-desc": "Armazene serviços em bucket AWS S3 (requer credenciais AWS)",
    
    // Tab 7: Observability
    "setup.tab-observability": "Provedores de Observabilidade",
    "setup.tab-observability-desc": "Configure provedores de logs, traces e métricas para monitoramento de aplicações",
    "setup.logs-provider-desc": "Consulta logs com visualização de histograma",
    "setup.traces-provider-desc": "Rastreamento distribuído com visualização em timeline",
    "setup.metrics-provider-desc": "Métricas de séries temporais e alertas",
    "setup.observability-multiple-providers": "Você pode configurar múltiplos provedores para cada tipo (logs, traces, métricas) e alternar entre eles na UI.",
    
    // Security & Secrets
    "setup.security-title": "Segurança e Gerenciamento de Segredos",
    "setup.security-desc": "Como o DashOPS protege suas credenciais sensíveis",
    "setup.secrets-masked-title": "Segredos sempre mascarados:",
    "setup.secrets-masked-desc": "A UI nunca exibe valores reais de segredos - apenas placeholders mascarados como *****",
    "setup.how-secrets-work": "Como os segredos são tratados:",
    "setup.secrets-point-1": "Quando você salva um segredo, ele é escrito no dash-ops.yaml (como ${ENV_VAR} ou texto plano)",
    "setup.secrets-point-2": "A API nunca retorna valores reais de segredos - apenas placeholders mascarados ou flags 'tem segredo'",
    "setup.secrets-point-3": "Para atualizar um segredo, você fornece um novo valor na UI, que substitui o antigo",
    "setup.secrets-point-4": "Deixar um campo de segredo vazio mantém o valor existente inalterado",
    "setup.security-warning-title": "Aviso de Segurança Beta:",
    "setup.security-warning-beta": "O armazenamento atual de segredos é básico (arquivos YAML simples). Recursos empresariais como armazenamento criptografado, integração com Vault e RBAC granular estão planejados para releases de produção.",
    
    // Configuration File
    "setup.config-file-title": "Arquivo de Configuração Gerado",
    "setup.config-file-desc": "O Assistente de Configuração gera um arquivo dash-ops.yaml com suas seleções",
    "setup.where-saved": "Onde a configuração é salva:",
    "setup.default-path": "Caminho padrão",
    "setup.custom-path": "Ou defina um caminho customizado com variável de ambiente",
    "setup.manual-edit-allowed": "Você pode editar manualmente o dash-ops.yaml a qualquer momento. Mudanças serão refletidas na página de Configurações (com segredos mascarados).",
    "setup.example-output": "Exemplo de configuração gerada:",
    
    // Updating Settings
    "setup.updating-settings-title": "Atualizando Configuração Posteriormente",
    "setup.updating-settings-desc": "Você não precisa executar o setup novamente para alterar provedores ou credenciais",
    "setup.settings-page-access": "Após a configuração inicial, acesse a página de Configurações a qualquer momento para:",
    "setup.sidebar-menu": "Dashboard",
    "setup.update-providers": "Adicionar/remover provedores, atualizar credenciais, mudar seleções de plugins",
    "setup.settings-same-forms": "A página de Configurações usa os mesmos formulários do Setup, então a experiência é consistente. Todos os segredos permanecem mascarados e seguros.",
    
    // Next Steps
    "setup.next-steps-title": "Próximos Passos Após o Setup",
    "setup.next-step-1-title": "Explore o Dashboard",
    "setup.next-step-1-desc": "Após completar o setup, você será redirecionado para o dashboard principal com plugins habilitados no menu lateral",
    "setup.next-step-2-title": "Experimente Recursos dos Plugins",
    "setup.next-step-2-desc": "Cada plugin (AWS, Kubernetes, Observabilidade) tem sua própria seção com operações específicas",
    "setup.next-step-3-title": "Confira a Documentação dos Plugins",
    "setup.next-step-3-desc": "Visite os guias individuais de plugins para aprender sobre recursos avançados e opções de configuração",
  },
}

