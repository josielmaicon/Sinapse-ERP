import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import routes from '../routes';
import './Layout.css';

export default function Layout() {
  return (
    <div>
      <header className="topbar">
        <h1>Meu App</h1>
        <nav className="nav-links">
          {routes.map(({ path, name }) => (
            <NavLink key={path} to={path} end={path === '/'}>{name}</NavLink>
          ))}
        </nav>
      </header>

      <main className="app-container">
        <Outlet />
      </main>
    </div>
  );
}
