#!/bin/bash

# Script para fazer o primeiro deploy no GitHub Pages
# Execute este script após criar o repositório no GitHub

echo "🚀 Iniciando deploy da Árvore Genealógica..."

# Verificar se o Git está inicializado
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositório Git..."
    git init
fi

# Adicionar todos os arquivos
echo "📋 Adicionando arquivos..."
git add .

# Fazer commit inicial
echo "💾 Fazendo commit inicial..."
git commit -m "🇩🇪 Árvore genealógica para cidadania alemã - versão completa

- Interface interativa com React Flow
- Sistema de cores para status da cidadania  
- Modal com detalhes completos de cada pessoa
- Documentação com Staatsangehörigkeitsausweis e Urkunde
- Configuração para GitHub Pages
- 4 gerações da família documentadas"

# Configurar branch principal
echo "🌿 Configurando branch main..."
git branch -M main

echo ""
echo "✅ Projeto preparado para GitHub!"
echo ""
echo "📝 PRÓXIMOS PASSOS:"
echo "1. Crie um repositório no GitHub chamado 'TreeApp'"
echo "2. Copie o comando que aparece no GitHub (similar a):"
echo "   git remote add origin https://github.com/SEU_USUARIO/TreeApp.git"
echo "3. Execute: git push -u origin main"
echo ""
echo "🌐 Depois de alguns minutos, seu site estará em:"
echo "   https://SEU_USUARIO.github.io/TreeApp/"
echo ""
echo "📧 Para o consulado, envie o link acima!"
