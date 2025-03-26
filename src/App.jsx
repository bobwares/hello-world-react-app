/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/App.jsx
 * @description Root application shell with data-driven routing (React Router 7) and context providers for metadata and form data.
 * @version 1.3.1
 * @exports App
 * @updated 2025-03-26
 */
import React, { useMemo, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { WelcomeMessage } from './WelcomeMessage';
import { NewClaim } from './components/NewClaim/NewClaim';
import { MyClaims } from './components/MyClaims/MyClaims';
import { EditClaim } from './components/EditClaim/EditClaim';
import { Help } from './components/Help/Help';
import { Logout } from './components/Logout/Logout';

const Layout = ({ children }) => (
  <>
    <Header appName="Claims App" moduleName="Claims Portal" userName="Bob" />
    <Nav />
    <main style={{ padding: '1rem' }}>{children}</main>
  </>
);

// Preload 10 default claims in the context.
const defaultClaims = [
  { name: 'Claim 1', date: '2025-03-20', type: 'Auto' },
  { name: 'Claim 2', date: '2025-03-21', type: 'Home' },
  { name: 'Claim 3', date: '2025-03-22', type: 'Health' },
  { name: 'Claim 4', date: '2025-03-23', type: 'Auto' },
  { name: 'Claim 5', date: '2025-03-24', type: 'Home' },
  { name: 'Claim 6', date: '2025-03-25', type: 'Health' },
  { name: 'Claim 7', date: '2025-03-26', type: 'Auto' },
  { name: 'Claim 8', date: '2025-03-27', type: 'Home' },
  { name: 'Claim 9', date: '2025-03-28', type: 'Health' },
  { name: 'Claim 10', date: '2025-03-29', type: 'Auto' },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <WelcomeMessage name="Bob" />
      </Layout>
    ),
  },
  {
    path: '/new-claim',
    element: (
      <Layout>
        <NewClaim />
      </Layout>
    ),
  },
  {
    path: '/my-claims',
    element: (
      <Layout>
        <MyClaims />
      </Layout>
    ),
  },
  {
    path: '/edit-claim/:claimId',
    element: (
      <Layout>
        <EditClaim />
      </Layout>
    ),
  },
  {
    path: '/help',
    element: (
      <Layout>
        <Help />
      </Layout>
    ),
  },
  {
    path: '/logout',
    element: (
      <Layout>
        <Logout />
      </Layout>
    ),
  },
]);

export const MetadataContext = React.createContext();
export const FormDataContext = React.createContext();

export const App = () => {
  const metadata = useMemo(() => ({ counter: 4 }), []);
  const [claims, setClaims] = useState(defaultClaims);

  return (
    <MetadataContext.Provider value={metadata}>
      <FormDataContext.Provider value={{ claims, setClaims }}>
        <RouterProvider router={router} />
      </FormDataContext.Provider>
    </MetadataContext.Provider>
  );
};
