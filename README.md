# 🎬 Studio Ghibli Films Tracker

Uma aplicação web responsiva que consome a API pública do Studio Ghibli para exibir e explorar informações detalhadas sobre os filmes icônicos do estúdio.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)

## 🚀 Demonstração

(quando fizer o deploy)

## 📋 Funcionalidades

- ✅ Listagem dos 10 primeiros filmes em ordem alfabética
- ✅ Visualização de detalhes completos de cada filme (diretor, produtor, ano, nota RT)
- ✅ Navegação fluida entre páginas com React Router
- ✅ Cache inteligente de dados com Context API (zero refetching desnecessário)
- ✅ Interface responsiva (Mobile, Tablet e Desktop)
- ✅ Estados de loading e tratamento de erros
- ✅ Animações e feedback visual ao usuário

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca UI com Hooks
- **TypeScript** - Tipagem estática para maior segurança
- **React Router DOM v6** - Roteamento SPA com rotas dinâmicas
- **Tailwind CSS v4** - Framework utility-first para estilização
- **Vite** - Build tool de alta performance
- **Context API** - Gerenciamento de estado global

## 🏗️ Arquitetura e Decisões Técnicas

### 1. Gerenciamento de Estado Global
Implementação de **Context API** para evitar prop drilling e otimizar requisições:
- Fetch realizado uma única vez no Provider
- Dados compartilhados entre componentes sem re-requisições
- Navegação instantânea (0ms) entre páginas

### 2. Tipagem TypeScript
Interface `Film` rigorosamente tipada para garantir integridade dos dados:

### 3. Pipeline de Dados
Processamento antes de armazenar no estado:
```
API → Sort (localeCompare) → Slice (10 filmes) → Context → Components
```

### 4. Separação de Responsabilidades
```
src/
├── contexts/        # Contexto de estado global
├── hooks/           # Custom hooks (useFilms)
├── pages/           # Componentes de rota (Home, FilmDetails)
├── types/           # Interfaces TypeScript
└── providers/       # Provider components
```

## 🎨 Layout Responsivo

- **Mobile:** Grid de 1 coluna
- **Tablet:** Grid de 2 colunas
- **Desktop:** Grid de 3 colunas

Todas as telas utilizam `object-contain` para preservar aspect ratio das imagens e `hover:scale-105` para feedback tátil.

## 🔗 API Utilizada

[Studio Ghibli API](https://ghibliapi.vercel.app/) - API REST pública que retorna dados de filmes, personagens e locações do Studio Ghibli.

**Endpoint principal:** `GET https://ghibliapi.vercel.app/films`

## 🧪 Desafios Técnicos Resolvidos

1. **Performance:** Implementação de cache via Context para evitar refetching a cada navegação
2. **Tailwind v4:** Migração da sintaxe de diretivas (`@tailwind` → `@import "tailwindcss"`)
3. **Imagens:** Ajuste de `object-cover` para `object-contain` para evitar cortes nos pôsteres
4. **Ordenação:** Uso de `localeCompare` para ordenação alfabética consistente
5. **Validação de Dados:** Tratamento de campos opcionais (ex: Rotten Tomatoes score)

## 📚 Aprendizados

- Consumo de APIs REST com tipagem TypeScript
- Gerenciamento de estado com Context API
- Otimização de performance em SPAs
- Roteamento dinâmico com React Router v6
- Design responsivo com Tailwind CSS
- Separação de concerns e arquitetura escalável
---

**Desenvolvido por João Paulo L. Borella** | [LinkedIn](https://www.linkedin.com/in/jpborella/) | [Portfolio](https://portifolio-pi-lyart.vercel.app/)