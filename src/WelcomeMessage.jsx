/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/WelcomeMessage.jsx
 * @description Component that displays a personalized welcome message
 * @version 1.0.1
 * @exports WelcomeMessage
 * @updated 2025-03-26
 */

import React from 'react';

export const WelcomeMessage = ({ name }) => {
  return (
    <div>
      <p>Welcome to the Hello World React App, {name}!</p>
    </div>
  );
};
