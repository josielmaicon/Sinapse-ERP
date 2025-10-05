import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './routes';

import HomePage from "./pages/homepage";
import DashboardPage from "./pages/dashboard";
import EstoquePage from "./pages/estoque";
import PdvsPage from "./pages/pdvs";
import PontoVendaPage from "./pages/pontovenda";
import ProdutosPage from "./pages/produtos";


const components = {
  HomePage,
  DashboardPage,
  EstoquePage,
  PdvsPage,
  PontoVendaPage,
  ProdutosPage
};

export default function App() {
  
  const routesWithLayout = routes.filter(route => route.useLayout !== false);
  const routesWithoutLayout = routes.filter(route => route.useLayout === false);

  return (
    <BrowserRouter>
      <Routes>
        {/* GRUPO 1: Rotas que renderizam DENTRO do Layout */}
        <Route path="/" element={<Layout />}>
          {routesWithLayout.map(({ path, component, end }) => {
            const Element = components[component];
            return (
              <Route
                key={`layout-${path}`}
                path={path}
                element={<Element />}
                end={end}
              />
            );
          })}
        </Route>

        {/* GRUPO 2: Rotas que renderizam FORA do Layout (tela cheia) */}
        {routesWithoutLayout.map(({ path, component }) => {
          const Element = components[component];
          return (
            <Route 
              key={`no-layout-${path}`} 
              path={path} 
              element={<Element />} 
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}