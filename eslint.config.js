/**
 * @application Hello World React App
 * @source .eslintrc.js
 * @author bobwares codebot
 * @version 1.0.2
 * @description Flat ESLint configuration for the Hello World React App.
 * @updated 2025-03-26
 */

const reactRecommended = require('eslint-plugin-react').configs.recommended;
const reactHooksRecommended = require('eslint-plugin-react-hooks').configs
  .recommended;
const jsxA11yRecommended = require('eslint-plugin-jsx-a11y').configs
  .recommended;

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        // Node.js globals
        process: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
    },
    rules: {
      ...reactRecommended.rules,
      ...reactHooksRecommended.rules,
      ...jsxA11yRecommended.rules,
      // You can add or override rules here as needed.
    },
  },
];
