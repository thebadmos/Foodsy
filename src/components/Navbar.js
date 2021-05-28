import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div class="navbar-right">
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: 'red' }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/recipes" activeStyle={{ color: 'red' }}>
                Recipes
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
