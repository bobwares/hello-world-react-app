/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Logout/Logout.test.jsx
 * @description Unit test for Logout component
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logout } from './Logout';

test('renders Logout component', () => {
  render(<Logout />);
  expect(screen.getByText(/Logout component loaded/i)).toBeInTheDocument();
});
