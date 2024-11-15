<h1 align="center" style="font-weight: bold;">Board 💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Primeiros Passos</a> • 
 
</p>

<p align="center">
    <b>Desenvolvimento de um sistema de atendimento ao cliente</b>
</p>

<h2 id="layout">🎨 Layout</h2>

<p align="center">
    <img src="./public/screens/login.png" alt="Tela de login" width="380px">
    <img src="./public/screens/sidebar.png" alt="Tela com o sidebar aberto" width="380px">
    <img src="./public/screens/home.png" alt="Tela de chamados" width="380px">
    <img src="./public/screens/register-order.png" alt="Tela de registro de chamado" width="380px">
    <img src="./public/screens/details-order.png" alt="Tela de detalhes de um chamado" width="380px">
    <img src="./public/screens/clients.png" alt="Tela de clientes" width="380px">
    <img src="./public/screens/register-client.png" alt="Tela de registro de um cliente" width="380px">
    <img src="./public/screens/details-client.png" alt="Tela de detalhes de um cliente" width="380px">
    
</p>

<h2 id="technologies">💻 Tecnologias</h2>

- React
- Next.js
- TypeScript
- Prisma
- TailwindCSS

<h2 id="started">🚀 Primeiros passos</h2>

<h3>Pré-requisitos</h3>

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com/)

<h3>Clone o projeto</h3>

```bash
git clone https://github.com/reisArthur2602/board
```

<h3>Configure as váriaveis .env </h2>

Use o`.env.example` como referência para criar seu arquivo de configuração `.env` com suas credenciais

```yaml
DATABASE_URL="postgresql://janedoe:mypassword@localhost:5432/mydb"
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_AUTH_SECRET=
```

<h3>Rodar o Projeto</h3>

```bash
cd nome-do-projeto
npm install
npx prisma migrate dev
npm run dev
```

<h3>Design</h3>

[🖊️ Protótipo no Figma](https://www.figma.com/design/JvFPx5drXAi4Z8dMLzPcsK/Board?node-id=0-1&t=puMuvjRseogsSRVY-1)
