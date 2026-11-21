# 🌿 RaizFinance — Sistema de Monitoramento e Controle Financeiro

> *Monitore seus gastos semanais, mensais e anuais de forma leve, equilibrada e consciente.*

---

## 🍃 Sobre o Projeto
O **RaizFinance** é uma aplicação web moderna de gestão financeira pessoal desenvolvida com foco em UI/UX limpa, responsiva e acolhedora. O sistema foi planejado para ajudar no controle do orçamento através de ciclos temporais (semana, mês e ano), central de comprovantes e controle de dívidas/empréstimos com terceiros.

---

## 🛠️ Tecnologias Utilizadas

### 💻 Frontend (Interface do Usuário)
* **React** (com TypeScript) — Biblioteca para construção de componentes reativos.
* **Tailwind CSS** — Framework CSS utilitário para estilização rápida e responsiva.
* **React Router DOM** — Gerenciamento de rotas e navegação fluida (SPA).
* **Lucide React** — Biblioteca de ícones minimalistas e modernos.
* **Shadcn/ui (Base)** — Componentes de interface acessíveis e customizáveis.

### 🐘 Backend & Banco de Dados (API & Persistência)
* **PHP Puro (API RESTful)** — Lógica de servidor para processamento de requisições.
* **PDO (PHP Data Objects)** — Camada de abstração segura para conexão com o banco de dados.
* **MySQL** — Banco de dados relacional para armazenamento seguro e definitivo.
* **XAMPP / Apache** — Servidor local para execução do ambiente PHP.

---

## 🗂️ Estrutura de Pastas do Projeto

```text
Finance/
├── frontend/ (ou raiz do projeto React)
│   ├── src/
│   │   ├── components/       # Componentes globais (ex: Sidebar.tsx)
│   │   ├── modules/          # Módulos isolados (ex: LoginPage.tsx)
│   │   ├── pages/            # Páginas do sistema (Dashboard, Receipts, Debts)
│   │   ├── routes/           # Configuração de rotas
│   │   ├── App.tsx           # Ponto de entrada das rotas
│   │   └── index.css         # Estilos globais e Tailwind
│   ├── package.json
│   └── vite.config.ts
│
└── Finance-back/ (API PHP & Banco de Dados) - EM BREVE
    
```

---

## 🚀 Como Inicializar o Sistema


### 1. Configurando e Rodando o Frontend (React)
1. Abra o terminal na pasta do projeto frontend.
2. Instale as dependências necessárias:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse no navegador o link fornecido pelo Vite.

---

## 🎨 Identidade Visual (Tema Natureza)
A paleta de cores do RaizFinance foi pensada para transmitir tranquilidade e conforto ao lidar com as temidas finanças:
* **Cor Primária (Fundo e Cards):** Tons de bege e creme (`#f9f6f0`, `#fbf9f4`, `#f0ece1`).
* **Cor Secundária (Acentos e Sidebar):** Tons de verde floresta e sálvia (`#3f5231`, `#4a6b51`, `#e5ebd9`).
* **Cor Terciária (Valores e Detalhes):** Tons de marrom (`#9e734c`, `#dfcfb9`).

---

## 📄 Licença
Este projeto é de uso pessoal e educacional, desenvolvido sob medida para monitoramento financeiro consciente.
