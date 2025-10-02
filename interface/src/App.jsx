import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './routes';

import HomePage from "./pages/homepage";
import DashboardPage from "./pages/dashboard";
import EstoquePage from "./pages/estoque";
import PdvsPage from "./pages/pdvs";
import UsuariosPage from "./pages/usuarios";
import ProdutosPage from "./pages/produtos";

const components = {
  HomePage,
  DashboardPage,
  EstoquePage,
  PdvsPage,
  UsuariosPage,
  ProdutosPage
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, component, end }) => {
            const Element = components[component];
            return (
              <Route
                key={path}
                path={path}
                element={<Element />}
                end={end}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}