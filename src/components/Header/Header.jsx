/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Header/Header.jsx
 * @description Stateless header component displaying app name, module name, and user name with enlarged and standout styling.
 * @version 1.1.0
 * @exports Header
 * @updated 2025-03-26
 */
import React from 'react';
import './Header.css';

export const Header = ({
  appName,
  moduleName = 'Dashboard',
  userName = 'Guest',
}) => {
  return (
    <header className="header">
      <div className="header-item">{appName}</div>
      <div className="header-item">{moduleName}</div>
      <div className="header-item">{userName}</div>
    </header>
  );
};
