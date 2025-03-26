/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Nav/Nav.jsx
 * @description Navigation bar using React Router links for claims-related routes.
 * @version 1.1.0
 * @exports Nav
 * @updated 2025-03-26
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/new-claim" className="nav-link">
        New Claim
      </Link>
      <Link to="/my-claims" className="nav-link">
        My Claims
      </Link>
      <Link to="/help" className="nav-link">
        Help
      </Link>
      <Link to="/logout" className="nav-link">
        Logout
      </Link>
    </nav>
  );
};
