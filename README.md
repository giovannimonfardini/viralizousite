# Viralizou

Landing page do **Viralizou** — crie vídeos virais sem mostrar o rosto, com IA no piloto automático. Inspirada em ferramentas de geração automática de reels para TikTok, Instagram e YouTube.

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS** com sistema de tema shadcn/ui
- **shadcn/ui** (Button, Card, Badge, Avatar, Accordion, Separator)
- **Framer Motion** para animações de scroll e entrada
- **Lucide React** para ícones
- Integração com o **Supabase Auth** do web service Viralizou

## Seções

- Navbar com blur ao rolar
- Hero com prova social e CTA
- Marquee infinito de nichos de vídeo
- Prova social com contadores animados
- Comparativo com métodos tradicionais
- Depoimentos em marquee duplo
- Como funciona (3 passos com mockups de interface)
- Banner de CTA em gradiente
- FAQ em acordeão
- Footer completo

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:3000)
npm run build    # build de produção em dist/
npm run preview  # pré-visualiza o build
```

## Configurar autenticação

O login é executado pelo web service, que concentra a sessão do Supabase e as rotas protegidas. A landing não mantém uma autenticação separada.

1. Copie `.env.example` para `.env.local` quando precisar sobrescrever a URL padrão.
2. Configure `VITE_WEB_SERVICE_LOGIN_URL` com a rota `/login` do web service.
3. Reinicie `npm run dev` depois de alterar a variável.

Rotas disponíveis:

- `/login`: encaminha para o login oficial do web service.
- `/app`: encaminha para a área autenticada do web service.

Ao publicar a aplicação, configure o hosting para redirecionar rotas desconhecidas para `index.html`, permitindo que o React Router trate acessos diretos como `/login` e `/app`.

## Estrutura

```
src/
├── components/     # Reveal, CountUp e componentes ui (shadcn)
├── pages/          # Home
├── sections/       # Seções da landing page
├── lib/            # Utilitários (cn)
├── App.tsx
└── main.tsx
```
