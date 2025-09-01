# 🚀 Guia de Deploy - Árvore Genealógica no GitHub Pages

## 📋 Pré-requisitos
- Conta no GitHub (gratuita)
- Git instalado no computador

## 🎯 Passo a Passo

### 1️⃣ **Preparar o Build de Produção**
No terminal do VS Code, execute:
```bash
npm run build
```
Isso criará uma pasta `dist/` com os arquivos otimizados.

### 2️⃣ **Configurar o Vite para GitHub Pages**
Adicione a configuração do `base` no arquivo `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TreeApp/', // Substitua 'TreeApp' pelo nome do seu repositório
})
```

### 3️⃣ **Criar Repositório no GitHub**
1. Vá para [github.com](https://github.com) e faça login
2. Clique em "New repository" (botão verde)
3. Nome: `TreeApp` (ou o nome que preferir)
4. Deixe como "Public" 
5. Não inicialize com README (já temos arquivos)
6. Clique "Create repository"

### 4️⃣ **Conectar seu Projeto ao GitHub**
No terminal do VS Code, execute (substitua SEU_USUARIO pelo seu username):
```bash
git init
git add .
git commit -m "Árvore genealógica - versão inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/TreeApp.git
git push -u origin main
```

### 5️⃣ **Configurar GitHub Pages**
1. No GitHub, vá para o seu repositório
2. Clique em "Settings" (no menu do repositório)
3. No menu lateral, clique em "Pages"
4. Em "Source", selecione "GitHub Actions"

### 6️⃣ **Criar Workflow de Deploy Automático**
Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy para GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Instalar dependências
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: actions/deploy-pages@v4
      with:
        folder: dist
```

### 7️⃣ **Fazer o Deploy**
```bash
git add .
git commit -m "Configuração para GitHub Pages"
git push
```

## 🌐 **Resultado**
Seu site estará disponível em:
`https://SEU_USUARIO.github.io/TreeApp/`

## 📧 **Para o Consulado**
Você pode enviar:
- **Link do site**: `https://SEU_USUARIO.github.io/TreeApp/`
- **Descrição**: "Árvore genealógica interativa para processo de cidadania alemã"
- **Instruções**: "Clique nos nomes para ver detalhes de cada pessoa"

## 🔄 **Atualizações Futuras**
Para atualizar o site:
1. Faça as mudanças no código
2. Execute: `git add . && git commit -m "Atualização" && git push`
3. O site será atualizado automaticamente em ~2 minutos

## 🆘 **Troubleshooting**
- Se der erro 404, verifique se o `base` no `vite.config.ts` está correto
- Se os estilos não carregarem, execute `npm run build` novamente após configurar o `base`
- O deploy pode demorar até 10 minutos na primeira vez

## 💡 **Alternativas**
- **Vercel**: Mais rápido, conecta automaticamente com GitHub
- **Netlify**: Interface amigável, drag & drop da pasta `dist/`
- **Firebase Hosting**: Google, muito confiável
