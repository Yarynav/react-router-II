import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="barra">
      <NavLink
        end
        to="/"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Home
      </NavLink>
      <NavLink
        end
        to="/pokemones"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Pokemones
      </NavLink>
    </nav>
  );
};
