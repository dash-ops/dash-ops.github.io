# Configuração do Repositório GitHub

## Passos para Configurar o Repositório

### 1. Criar o Repositório
- Nome: `docs`
- Organização: `dash-ops`
- Visibilidade: Pública
- URL final: `https://dash-ops.github.io/docs`

### 2. Configurar GitHub Pages
1. Vá para **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` (será criado automaticamente pelo GitHub Actions)
4. **Folder**: `/ (root)`

### 3. Configurar GitHub Actions
1. Vá para **Settings** → **Actions** → **General**
2. **Workflow permissions**: 
   - ✅ Read and write permissions
   - ✅ Allow GitHub Actions to create and approve pull requests

### 4. Fazer o Push do Código
```bash
# No diretório docs/
git init
git add .
git commit -m "Initial commit: DashOPS documentation website"
git branch -M main
git remote add origin https://github.com/dash-ops/docs.git
git push -u origin main
```

### 5. Verificar o Deploy
- O GitHub Actions vai executar automaticamente
- Aguarde alguns minutos para o deploy
- Acesse: `https://dash-ops.github.io/docs`

## Estrutura de URLs

- **Documentação**: `https://dash-ops.github.io/docs`
- **Página inicial**: `https://dash-ops.github.io/docs#introduction`
- **Instalação**: `https://dash-ops.github.io/docs#installation`
- **Plugins**: `https://dash-ops.github.io/docs#plugins-overview`

## Troubleshooting

### Se o site não carregar:
1. Verifique se o GitHub Actions executou com sucesso
2. Confirme que o branch `gh-pages` foi criado
3. Verifique se o GitHub Pages está configurado corretamente

### Se as rotas não funcionarem:
1. Confirme que os arquivos `404.html` e `.nojekyll` estão presentes
2. Verifique se o script SPA foi injetado no `index.html`

## Comandos Úteis

```bash
# Build local com SPA
npm run build:spa

# Testar localmente (servir a pasta out)
npx serve out

# Verificar se os arquivos estão corretos
ls -la out/
# Deve ter: index.html, 404.html, .nojekyll, _next/, etc.
```
