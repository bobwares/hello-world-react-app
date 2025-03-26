/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/index.test.jsx
 * @description Unit test for Hello World using React Testing Library
 * @version 1.0.0
 * @updated 2025-03-25
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const App = () => <h1>Hello, World!</h1>;

test('renders Hello, World!', () => {
  render(<App />);
  expect(screen.getByText(/hello, world/i)).toBeInTheDocument();
});
