/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Nav/Nav.test.jsx
 * @description Unit test for Nav component with routing links for claim processing
 * @version 1.1.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Nav } from './Nav';

describe('Nav', () => {
  test('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/New Claim/i)).toBeInTheDocument();
    expect(screen.getByText(/My Claims/i)).toBeInTheDocument();
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });
});
