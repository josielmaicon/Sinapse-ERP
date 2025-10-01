import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Settings, User } from 'lucide-react';
import routes from '../routes';
import Logo from './Logo';
import './Layout.css';

export default function Layout() {
  return (
    <div>
      <header className="topbar">
        {/* ESQUERDA */}
        <div className="topbar-left">
          <Logo size={40} color="var(--color-primary)" />
          <span className="app-name">Sinápse</span>
        </div>

        {/* MEIO - NAVEGAÇÃO */}
        <nav className="topbar-nav btn-group">
          {routes.map(({ path, name }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `nav-btn squircle ${isActive ? 'active' : ''}`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>


        {/* DIREITA - ICONES */}
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
