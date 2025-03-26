/**
 * @application Hello World React App
 * @source jest.config.js
 * @author bobwares codebot
 * @version 1.0.1
 * @description Jest configuration for testing React components using jsdom environment and React Testing Library.
 * @updated 2025-03-26
 */

/**
 * Jest Configuration Overview:
 *
 * - testEnvironment: 'jsdom'
 *   Sets the testing environment to jsdom, simulating a browser for DOM-based React testing.
 *
 * - transform:
 *   Uses babel-jest to transpile JavaScript and JSX files through Babel before testing.
 *
 * - setupFilesAfterEnv:
 *   Loads the jest-dom matchers globally before each test, enabling readable assertions like `toBeInTheDocument()`.
 *
 * - moduleNameMapper:
 *   Mocks static asset imports such as CSS using identity-obj-proxy to prevent errors during tests.
 */

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
