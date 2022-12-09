import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navBar">
      <ul className="menuNav">
        {links.map((link) => (
          <li key={link.id} className="navList">
            <NavLink
              to={link.path}
              activeClassName="active-link"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
