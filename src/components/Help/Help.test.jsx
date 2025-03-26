/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Help/Help.test.jsx
 * @description Unit test for Help component
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Help } from './Help';

test('renders Help component', () => {
  render(<Help />);
  expect(screen.getByText(/Help component loaded/i)).toBeInTheDocument();
});
