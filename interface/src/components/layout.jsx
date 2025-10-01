import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Settings, User } from 'lucide-react';
import Logo from './Logo';
import routes from '../routes';
import './Layout.css';

export default function Layout() {
  return (
    <div className="app-wrapper">
      <header className="topbar">
        {/* Lado esquerdo: logo + nome */}
        <div className="topbar-left squircle">
          <Logo size={40} />
          <span className="app-name">Sinápse</span>
        </div>

        {/* Navegação no meio */}
        <nav className="nav-links">
          {routes.map(({ path, name }) => (
            <NavLink key={path} to={path} className="nav-btn squircle">
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Lado direito: ícones */}
        <div className="topbar-right">
          <button className="icon-btn squircle">
            <Settings size={20} />
          </button>
          <button className="icon-btn squircle">
            <User size={20} />
          </button>
        </div>
      </header>

      <main className="app-container">
        <Outlet />
      </main>
    </div>
  );
}
