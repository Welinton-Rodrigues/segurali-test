# BEWEAR

E-commerce desenvolvido a partir de um protótipo no Figma, com foco em fidelidade visual e responsividade. O frontend consome os dados de produtos e pedidos de uma API própria.

## Tecnologias

**Frontend**
- React 18 + Vite
- Tailwind CSS
- React Router DOM
- lucide-react (ícones)

**Backend**
- Node.js + Express
- CORS

## Estrutura do projeto

```
segurali-test/
├── frontend/        # React + Vite + Tailwind
│   ├── public/images/   # imagens dos produtos
│   └── src/
│       ├── components/
│       │   ├── layout/      # Header, Footer, BagModal
│       │   ├── sections/    # blocos de página (Hero, BestSellers, etc.)
│       │   └── ui/          # primitivos reutilizáveis (Button, ProductCard)
│       ├── context/         # CartContext (estado do carrinho)
│       ├── pages/           # páginas (Home, Product, Bag, Checkout, Orders)
│       └── services/        # camada de API
│
└── backend/         # Node.js + Express
    └── src/
        ├── routes/      # rotas de products e orders
        └── data/        # dados mockados
```

## Como rodar

O projeto roda em dois terminais: um para o backend, outro para o frontend.

### 1. Backend (porta 3001)

```bash
cd backend
npm install
npm run dev
```

### 2. Frontend (porta 5173)

```bash
cd frontend
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador. O backend precisa estar rodando para os produtos e pedidos carregarem.

## API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/products` | Lista todos os produtos |
| GET | `/api/products/:id` | Retorna um produto pelo ID |
| GET | `/api/orders` | Lista os pedidos |

## Páginas

- **Home** — banner principal e seção "Mais Vendidos"
- **Produto** — galeria de imagens, variações, seleção de tamanho/quantidade e produtos relacionados
- **Sacola** — itens do carrinho, resumo do pedido e modal de sacola rápida
- **Checkout** — identificação e pagamento, com modal de confirmação
- **Meus Pedidos** — histórico de pedidos com detalhes expansíveis

> Os dados não são persistidos — produtos e pedidos vêm de dados mockados no backend.
