import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navBar">
      <h1>Bookstore CMS</h1>
      <ul className="menuNav">
        {links.map((link) => (
          <li key={link.id} className="navList">
            <NavLink
              to={link.path}
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
