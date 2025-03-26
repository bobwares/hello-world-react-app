/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/WelcomeMessage.test.jsx
 * @description Unit test for WelcomeMessage component using a passed-in name prop
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WelcomeMessage } from './WelcomeMessage';

test('displays personalized welcome message', () => {
  render(<WelcomeMessage name="Steve" />);
  expect(
    screen.getByText(/Welcome to the Hello World React App, Steve!/i)
  ).toBeInTheDocument();
});
