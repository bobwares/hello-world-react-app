/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/MyClaims/MyClaims.test.jsx
 * @description Unit test for MyClaims component
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MyClaims } from './MyClaims';

test('renders MyClaims component', () => {
  render(<MyClaims />);
  expect(screen.getByText(/MyClaims component loaded/i)).toBeInTheDocument();
});
