/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/NewClaim/NewClaim.test.jsx
 * @description Unit test for NewClaim component
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NewClaim } from './NewClaim';

test('renders NewClaim component', () => {
  render(<NewClaim />);
  expect(screen.getByText(/NewClaim component loaded/i)).toBeInTheDocument();
});
