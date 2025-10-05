// routes.js - VERSÃO ATUALIZADA

import { ChartColumnBig, Package, Users, ShoppingCart, Boxes, Home } from "lucide-react"

const routes = [
  // Rotas que APARECEM na navegação
  { path: '/', name: 'Início', component: 'HomePage', icon: Home, end: true, showInNav: true },
  { path: '/dashboard', name: 'Dashboard', component: 'DashboardPage', icon: ChartColumnBig, showInNav: true },
  { path: '/estoque', name: 'Estoque', component: 'EstoquePage', icon: Boxes, showInNav: true },
  { path: '/pdvs', name: 'Pdvs', component: 'PdvsPage', icon: ShoppingCart, showInNav: true },
  { path: '/produtos', name: 'Produtos', component: 'ProdutosPage', icon: Package, showInNav: true },

  // Rota que NÃO APARECE na navegação, mas que EXISTE no sistema
  { path: '/pontovenda', name: 'Ponto Venda', component: 'PontoVendaPage', icon: Package, showInNav: false },
];

export default routes;