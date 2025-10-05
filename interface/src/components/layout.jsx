import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Settings, User } from 'lucide-react';
import routes from '../routes';
import Logo from './Logo';
import '../styles/layout.css';

export default function Layout() {
  return (
    <div className='layout-wrapper'>
      <header className="topbar">
        {/* ESQUERDA */}
        <div className="topbar-left">
          <Logo size={40} color="var(--color-primary)" />
          <span className="app-name">Sinápse</span>
        </div>

        {/* MEIO - NAVEGAÇÃO */}
        <nav className="topbar-nav btn-group">
          {routes
          .filter(route => route.showInNav)
            .map(({ path, name, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `nav-btn squircle ${isActive ? 'active' : ''}`
                }
              >
                <Icon size={20} style={{ marginRight: '6px' }}/>
                {name}
              </NavLink>
          ))}
        </nav>


        {/* DIREITA - ICONES */}
        <div className="topbar-right">
          <button className="icon-btn squircle">
            <Settings size={23} color="var(--color-text)"/>
          </button>
          <button className="icon-btn squircle">
            <User size={23} />
          </button>
        </div>
      </header>

      <main className="app-container">
        <Outlet />
      </main>
    </div>
  );
}
