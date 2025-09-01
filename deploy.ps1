# Script PowerShell para fazer o primeiro deploy no GitHub Pages
# Execute este script após criar o repositório no GitHub

Write-Host "🚀 Iniciando deploy da Árvore Genealógica..." -ForegroundColor Green

# Verificar se o Git está inicializado
if (!(Test-Path ".git")) {
    Write-Host "📁 Inicializando repositório Git..." -ForegroundColor Yellow
    git init
}

# Adicionar todos os arquivos
Write-Host "📋 Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Fazer commit inicial
Write-Host "💾 Fazendo commit inicial..." -ForegroundColor Yellow
git commit -m "🇩🇪 Árvore genealógica para cidadania alemã - versão completa

- Interface interativa com React Flow
- Sistema de cores para status da cidadania  
- Modal com detalhes completos de cada pessoa
- Documentação com Staatsangehörigkeitsausweis e Urkunde
- Configuração para GitHub Pages
- 4 gerações da família documentadas"

# Configurar branch principal
Write-Host "🌿 Configurando branch main..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "✅ Projeto preparado para GitHub!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 PRÓXIMOS PASSOS:" -ForegroundColor Cyan
Write-Host "1. Crie um repositório no GitHub chamado 'TreeApp'"
Write-Host "2. Copie o comando que aparece no GitHub (similar a):"
Write-Host "   git remote add origin https://github.com/SEU_USUARIO/TreeApp.git" -ForegroundColor White
Write-Host "3. Execute: git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Depois de alguns minutos, seu site estará em:" -ForegroundColor Cyan
Write-Host "   https://SEU_USUARIO.github.io/TreeApp/" -ForegroundColor White
Write-Host ""
Write-Host "📧 Para o consulado, envie o link acima!" -ForegroundColor Green

# Pausar para o usuário ler
Read-Host "Pressione Enter para continuar..."
