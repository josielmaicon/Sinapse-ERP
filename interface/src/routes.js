import { ChartColumnBig, Package, Users, ShoppingCart, Boxes, Home } from "lucide-react"

const routes = [
  { path: '/', name: 'Início', component: 'HomePage', icon: Home, end: true },
  { path: '/dashboard', name: 'Dashboard', component: 'DashboardPage', icon: ChartColumnBig},
  { path: '/estoque', name: 'Estoque', component: 'EstoquePage', icon: Boxes },
  { path: '/pdvs', name: 'Pdvs', component: 'PdvsPage', icon: ShoppingCart },
  { path: '/usuarios', name: 'Usuarios', component: 'UsuariosPage', icon: Users },
  { path: '/produtos', name: 'Produtos', component: 'ProdutosPage', icon: Package },
];

export default routes;
