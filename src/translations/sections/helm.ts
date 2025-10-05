// Helm Deployment translations
export const helmPT = {
  "helm.badge": "Kubernetes",
  "helm.title": "Deploy com Helm",
  "helm.subtitle": "Implante DashOps em Kubernetes usando Helm Charts",
  "helm.beta-warning": "⚠️ Helm Charts em BETA - Recomendado apenas para ambientes de desenvolvimento e testes. NÃO use em produção.",

  // Prerequisites
  "helm.prerequisites.title": "Pré-requisitos",
  "helm.prerequisites.description": "Ferramentas necessárias antes de instalar",
  "helm.prerequisites.k8s": "Cluster Kubernetes funcional (minikube, kind, k3s, ou cloud provider)",
  "helm.prerequisites.helm": "Helm CLI instalado e configurado",
  "helm.prerequisites.kubectl": "kubectl configurado com acesso ao cluster",

  // Quick Start
  "helm.quickstart.title": "Instalação Rápida",
  "helm.quickstart.description": "Deploy básico do DashOps em 4 passos",
  "helm.quickstart.step1-title": "Clone o repositório de Helm Charts",
  "helm.quickstart.step2-title": "Configure values.yaml",
  "helm.quickstart.step3-title": "Crie secrets para credenciais",
  "helm.quickstart.step4-title": "Instale o Helm Chart",

  // Configuration
  "helm.config.title": "Opções de Configuração",
  "helm.config.description": "Personalize sua instalação via values.yaml",
  "helm.config.tabs.core": "Core",
  "helm.config.tabs.ingress": "Ingress",
  "helm.config.tabs.plugins": "Plugins",
  "helm.config.tabs.security": "Segurança",
  "helm.config.core.title": "Configurações Core",
  "helm.config.ingress.title": "Configuração de Ingress",
  "helm.config.plugins.title": "Configuração de Plugins",
  "helm.config.security.title": "Configurações de Segurança",

  // Access
  "helm.access.title": "Acessando DashOps",
  "helm.access.description": "Como acessar sua instalação do DashOps",
  "helm.access.port-forward": "Port-Forward (Desenvolvimento)",
  "helm.access.ingress": "Via Ingress (Produção)",
  "helm.access.logs": "Visualizar Logs",

  // Maintenance
  "helm.maintenance.title": "Manutenção e Atualizações",
  "helm.maintenance.description": "Gerenciar releases e atualizações",
  "helm.maintenance.upgrade": "Atualizar Release",
  "helm.maintenance.rollback": "Rollback",
  "helm.maintenance.uninstall": "Desinstalar",

  // Troubleshooting
  "helm.troubleshooting.title": "Solução de Problemas",
  "helm.troubleshooting.issue1": "Pods não estão iniciando",
  "helm.troubleshooting.solution1": "Verifique logs com kubectl logs, confirme se secrets foram criados corretamente e valide recursos disponíveis no cluster",
  "helm.troubleshooting.issue2": "Erro de autenticação GitHub",
  "helm.troubleshooting.solution2": "Confirme que GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET estão corretos no secret e que a URL de redirect está configurada no GitHub OAuth App",
  "helm.troubleshooting.issue3": "Ingress não está acessível",
  "helm.troubleshooting.solution3": "Verifique se o Ingress Controller está instalado (nginx-ingress ou traefik) e se o DNS está apontando para o LoadBalancer correto",

  // Resources
  "helm.resources.title": "Recursos Adicionais",
  "helm.resources.helm-repo": "Repositório de Helm Charts",
  "helm.resources.helm-docs": "Documentação do Helm",
  "helm.resources.k8s-docs": "Documentação do Kubernetes"
}

export const helmEN = {
  "helm.badge": "Kubernetes",
  "helm.title": "Deploy with Helm",
  "helm.subtitle": "Deploy DashOps on Kubernetes using Helm Charts",
  "helm.beta-warning": "⚠️ Helm Charts in BETA - Recommended only for development and testing environments. DO NOT use in production.",

  // Prerequisites
  "helm.prerequisites.title": "Prerequisites",
  "helm.prerequisites.description": "Required tools before installing",
  "helm.prerequisites.k8s": "Working Kubernetes cluster (minikube, kind, k3s, or cloud provider)",
  "helm.prerequisites.helm": "Helm CLI installed and configured",
  "helm.prerequisites.kubectl": "kubectl configured with cluster access",

  // Quick Start
  "helm.quickstart.title": "Quick Installation",
  "helm.quickstart.description": "Basic DashOps deployment in 4 steps",
  "helm.quickstart.step1-title": "Clone Helm Charts repository",
  "helm.quickstart.step2-title": "Configure values.yaml",
  "helm.quickstart.step3-title": "Create secrets for credentials",
  "helm.quickstart.step4-title": "Install Helm Chart",

  // Configuration
  "helm.config.title": "Configuration Options",
  "helm.config.description": "Customize your installation via values.yaml",
  "helm.config.tabs.core": "Core",
  "helm.config.tabs.ingress": "Ingress",
  "helm.config.tabs.plugins": "Plugins",
  "helm.config.tabs.security": "Security",
  "helm.config.core.title": "Core Settings",
  "helm.config.ingress.title": "Ingress Configuration",
  "helm.config.plugins.title": "Plugin Configuration",
  "helm.config.security.title": "Security Settings",

  // Access
  "helm.access.title": "Accessing DashOps",
  "helm.access.description": "How to access your DashOps installation",
  "helm.access.port-forward": "Port-Forward (Development)",
  "helm.access.ingress": "Via Ingress (Production)",
  "helm.access.logs": "View Logs",

  // Maintenance
  "helm.maintenance.title": "Maintenance and Updates",
  "helm.maintenance.description": "Manage releases and updates",
  "helm.maintenance.upgrade": "Upgrade Release",
  "helm.maintenance.rollback": "Rollback",
  "helm.maintenance.uninstall": "Uninstall",

  // Troubleshooting
  "helm.troubleshooting.title": "Troubleshooting",
  "helm.troubleshooting.issue1": "Pods are not starting",
  "helm.troubleshooting.solution1": "Check logs with kubectl logs, confirm secrets were created correctly and validate available cluster resources",
  "helm.troubleshooting.issue2": "GitHub authentication error",
  "helm.troubleshooting.solution2": "Confirm GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET are correct in secret and that redirect URL is configured in GitHub OAuth App",
  "helm.troubleshooting.issue3": "Ingress is not accessible",
  "helm.troubleshooting.solution3": "Verify Ingress Controller is installed (nginx-ingress or traefik) and DNS is pointing to the correct LoadBalancer",

  // Resources
  "helm.resources.title": "Additional Resources",
  "helm.resources.helm-repo": "Helm Charts Repository",
  "helm.resources.helm-docs": "Helm Documentation",
  "helm.resources.k8s-docs": "Kubernetes Documentation"
}

export const helmTranslations = {
  pt: helmPT,
  en: helmEN
}

