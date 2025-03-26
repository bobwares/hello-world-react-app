/**
 * @application Hello World React App
 * @source babel.config.js
 * @author bobwares codebot
 * @version 1.0.1
 * @description Babel configuration for React and modern JavaScript using the automatic JSX runtime
 * @updated 2025-03-26
 */

/**
 * Babel Configuration Overview:
 *
 * - @babel/preset-env:
 *   Transpiles modern JavaScript (ES6+) to be compatible with target environments.
 *   Automatically determines which syntax features to transform based on browser or runtime targets.
 *
 * - @babel/preset-react:
 *   Transforms JSX syntax into JavaScript that can run in React environments.
 *   The "runtime": "automatic" setting enables the new JSX transform introduced in React 17+,
 *   which removes the need to import React manually in each file using JSX.
 */

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
