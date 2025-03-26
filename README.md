# Hello World React App

A simple claims management application built with React. This application demonstrates how to create, view, and edit claims using React components, React Router for navigation, and React Context for state management. It is configured with Webpack, Babel, ESLint, and Prettier, and comes with a Dockerfile for containerized deployment.

## Features

- **Component-Based Architecture:**  
  Built with modular components: Header, Navigation, Welcome Message, New Claim, My Claims, Edit Claim, Help, and Logout.

- **Routing:**  
  Uses React Router for seamless navigation between pages.

- **State Management:**  
  Utilizes React Context to store and manage claim data across the application.

- **Form Handling:**  
  Users can submit new claims and edit existing ones through dedicated forms.

- **Styling:**  
  All CSS is separated into individual files for each component to improve maintainability.

- **Development Tools:**
  - **Webpack & Babel:** Bundles and transpiles the React application.
  - **ESLint & Prettier:** Enforces code quality and consistent formatting.
  - **Jest & React Testing Library:** Provides unit testing support.
  - **Docker:** A Dockerfile is provided for containerizing the application.

## Project Structure

```plaintext
hello-world-react-app/
├── public/
│   └── index.html          # HTML template for the application
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Nav/
│   │   │   ├── Nav.jsx
│   │   │   └── Nav.css
│   │   ├── NewClaim/
│   │   │   ├── NewClaim.jsx
│   │   │   └── NewClaim.css
│   │   ├── MyClaims/
│   │   │   └── MyClaims.jsx
│   │   ├── EditClaim/
│   │   │   ├── EditClaim.jsx
│   │   │   └── EditClaim.css
│   │   ├── Help/
│   │   │   └── Help.jsx
│   │   └── Logout/
│   │       └── Logout.jsx
│   ├── App.jsx              # Main application component with routing and context providers
│   ├── index.jsx            # React entry point
│   └── index.test.jsx       # Example tests for the application
├── webpack.config.js        # Webpack configuration for bundling the application
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── Dockerfile               # Docker configuration for containerizing the app
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Installation

### Prerequisites

- **Node.js** (v18 or above recommended; using Node.js v22.7.0 is suggested for this project)
- **npm** (comes with Node.js)
- _(Optional)_ **Docker** for containerized builds

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/hello-world-react-app.git
   cd hello-world-react-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Install ESLint and Prettier Extensions:**  
   For best results, install ESLint and Prettier extensions in your code editor.

## Running the Application

### Development Server

Start the development server with:

```bash
npm start
```

- The application will open in your default browser at `http://localhost:3000`.
- Webpack Dev Server will watch for changes and reload the application automatically.

### Production Build

Create an optimized production build using:

```bash
npm run build
```

- The output will be generated in the `dist/` directory.

## Testing

Run unit tests with:

```bash
npm test
```

- This command uses Jest and React Testing Library to execute tests.

## Docker

To build and run the application in a Docker container:

1. **Build the Docker Image:**

   ```bash
   docker build -t hello-world-react-app .
   ```

2. **Run the Docker Container:**

   ```bash
   docker run -p 5002:5002 hello-world-react-app
   ```

- The application will be available at `http://localhost:5002`.

## Linting & Formatting

- **ESLint:** Check for linting issues with:

  ```bash
  npx eslint .
  ```

- **Prettier:** Verify code formatting with:

  ```bash
  npx prettier --check .
  ```

  To automatically format files, run:

  ```bash
  npx prettier --write .
  ```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear commit messages.
4. Submit a pull request.

## License

This project is licensed under the ISC License.

## Author

**bobwares codebot**
