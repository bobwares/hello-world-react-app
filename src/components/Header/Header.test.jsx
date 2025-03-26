/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Header/Header.test.jsx
 * @description Unit test for Header component rendering app, module, and user names
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Header', () => {
  test('renders app name, module name, and user name', () => {
    render(
      <Header appName="ClaimsApp" moduleName="Claim Entry" userName="Steve" />
    );

    expect(screen.getByText(/ClaimsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/Claim Entry/i)).toBeInTheDocument();
    expect(screen.getByText(/Steve/i)).toBeInTheDocument();
  });

  test('renders default values for module and user when not provided', () => {
    render(<Header appName="ClaimsApp" />);

    expect(screen.getByText(/ClaimsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Guest/i)).toBeInTheDocument();
  });
});
