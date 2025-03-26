/**
 * @application Hello World React App
 * @source webpack.config.js
 * @author bobwares codebot
 * @version 1.0.1
 * @description Webpack configuration for bundling React with Babel and injecting into HTML.
 * @updated 2025-03-26
 */

/**
 * Webpack Configuration Overview:
 *
 * - entry:
 *   The starting point for the module bundler. Webpack builds a dependency graph starting from this file.
 *
 * - output:
 *   Specifies the output directory and bundled file name. `clean: true` ensures the dist folder is cleared before each build.
 *
 * - resolve:
 *   Automatically resolves imports for JS and JSX file extensions, allowing you to omit them in import statements.
 *
 * - devServer:
 *   Sets up the development server to serve files from `./dist`, enable hot module replacement, and auto-open the browser.
 *
 * - module.rules:
 *   Tells Webpack to use Babel loader for `.js` and `.jsx` files and CSS loaders for `.css` files, excluding node_modules.
 *
 * - plugins:
 *   Uses HtmlWebpackPlugin to inject the final bundle into `public/index.html` and serve it as the root HTML.
 *
 * - mode:
 *   Set to 'development' for readable output and live reload. Use 'production' for optimized builds.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  mode: 'development',
};
