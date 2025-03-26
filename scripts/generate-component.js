#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Usage: npm run generate component ComponentName');
  process.exit(1);
}

const basePath = path.join(__dirname, '../src/components', componentName);
const componentFile = `${componentName}.jsx`;
const testFile = `${componentName}.test.jsx`;

if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath, { recursive: true });
}

const componentTemplate = `/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/${componentName}/${componentFile}
 * @description React presentational component
 * @version 1.0.0
 * @exports ${componentName}
 * @updated ${new Date().toISOString().split('T')[0]}
 */

export const ${componentName} = () => {
  return (
    <div>
      <p>${componentName} component loaded.</p>
    </div>
  );
};
`;

const testTemplate = `/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/${componentName}/${testFile}
 * @description Unit test for ${componentName} component
 * @version 1.0.0
 * @updated ${new Date().toISOString().split('T')[0]}
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ${componentName} } from './${componentName}';

test('renders ${componentName} component', () => {
  render(<${componentName} />);
  expect(screen.getByText(/${componentName} component loaded/i)).toBeInTheDocument();
});
`;

fs.writeFileSync(path.join(basePath, componentFile), componentTemplate);
fs.writeFileSync(path.join(basePath, testFile), testTemplate);

console.log(
  `Component ${componentName} created at src/components/${componentName}/`
);
