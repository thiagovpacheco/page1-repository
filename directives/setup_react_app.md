# Setup React App Directive

## Objetivo
Criar um script em Python que automatize a criação de um projeto Vite + React + TailwindCSS básico, já instalando as dependências necessárias para animações (GSAP) e ícones (Lucide React) para a landing page Nura Health.

## Entradas
- O diretório raiz do projeto.

## Ferramentas/Scripts
Nós construiremos o script local `execution/setup_react_app.py` que fará as etapas do setup.

## Saídas
- Um projeto frontend React Vite funcional na pasta `nura-health-web`.
- Tailwind CSS inicializado.
- Dependências instaladas (`gsap`, `lucide-react`, `tailwindcss`, `postcss`, `autoprefixer`).

## Edge Cases
- Se o diretório `nura-health-web` já existir, pular a inicialização ou avisar o usuário.
