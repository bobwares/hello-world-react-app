# Source Code Compilation

## List of Source Files

- App.jsx
- WelcomeMessage.jsx
- WelcomeMessage.test.jsx
- components/Header/Header.jsx
- components/Header/Header.test.jsx
- components/Help/Help.jsx
- components/Help/Help.test.jsx
- components/Logout/Logout.jsx
- components/Logout/Logout.test.jsx
- components/MyClaims/MyClaims.jsx
- components/MyClaims/MyClaims.test.jsx
- components/Nav/Nav.jsx
- components/Nav/Nav.test.jsx
- components/NewClaim/NewClaim.jsx
- components/NewClaim/NewClaim.test.jsx
- index.jsx
- index.test.js

## Project Directory Structure

```plaintext
.
 components
  NewClaim
  Logout
  MyClaims
  Nav
  Header
  Help
```

## App.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/App.jsx
 * @description Root application shell with data-driven routing (React Router 7)
 * @version 1.2.0
 * @exports App
 * @updated 2025-03-26
 */

import React, {useMemo} from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { WelcomeMessage } from './WelcomeMessage';
import { NewClaim } from './components/NewClaim/NewClaim';
import { MyClaims } from './components/MyClaims/MyClaims';
import { Help } from './components/Help/Help';
import { Logout } from './components/Logout/Logout';

const Layout = ({ children }) => (
    <>
        <Header appName="Claims App" moduleName="Claims Portal" userName="Bob" />
        <Nav />
        <main style={{ padding: '1rem' }}>{children}</main>
    </>
);

// Use element-based children for the new route config
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><WelcomeMessage name="Bob" /></Layout>,
    },
    {
        path: '/new-claim',
        element: <Layout><NewClaim /></Layout>,
    },
    {
        path: '/my-claims',
        element: <Layout><MyClaims startingCount="9" /></Layout>,
    },
    {
        path: '/help',
        element: <Layout><Help /></Layout>,
    },
    {
        path: '/logout',
        element: <Layout><Logout /></Layout>,
    },
]);

export const MetadataContext = React.createContext()

export const App = () => {

    const metadata = useMemo(() => ({ counter: 4 }), []);

    return(
        <MetadataContext.Provider value={metadata}>
            <RouterProvider router={router} />
        </MetadataContext.Provider>);
};
```

## WelcomeMessage.jsx

```typescript
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
```

## WelcomeMessage.test.jsx

```typescript
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
    expect(screen.getByText(/Welcome to the Hello World React App, Steve!/i)).toBeInTheDocument();
});
```

## components/Header/Header.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Header/Header.jsx
 * @description Stateless header component displaying app name, module name, and user name
 * @version 1.0.0
 * @exports Header
 * @updated 2025-03-26
 */

import React from 'react';

export const Header = ({ appName, moduleName = 'Dashboard', userName = 'Guest' }) => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'grey' }}>
            <div style={{ flex: 1 }}>{appName}</div>
            <div style={{ flex: 1 }}>{moduleName}</div>
            <div style={{ flex: 1 }}>{userName}</div>
        </header>
    );
};
```

## components/Header/Header.test.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Header/Header.test.jsx
 * @description Unit test for Header component rendering app, module, and user names
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Header', () => {
  test('renders app name, module name, and user name', () => {
    render(<Header appName="ClaimsApp" moduleName="Claim Entry" userName="Steve" />);

    expect(screen.getByText(/ClaimsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/Claim Entry/i)).toBeInTheDocument();
    expect(screen.getByText(/Steve/i)).toBeInTheDocument();
  });

  test('renders default values for module and user when not provided', () => {
    render(<Header appName="ClaimsApp" />);

    expect(screen.getByText(/ClaimsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Guest/i)).toBeInTheDocument();
  });
});
```

## components/Help/Help.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Help/Help.jsx
 * @description React presentational component
 * @version 1.0.0
 * @exports Help
 * @updated 2025-03-26
 */

export const Help = () => {
  return (
    <div>
      <p>Help component loaded.</p>
    </div>
  );
};
```

## components/Help/Help.test.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Help/Help.test.jsx
 * @description Unit test for Help component
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Help } from './Help';

test('renders Help component', () => {
  render(<Help />);
  expect(screen.getByText(/Help component loaded/i)).toBeInTheDocument();
});
```

## components/Logout/Logout.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Logout/Logout.jsx
 * @description React presentational component
 * @version 1.0.0
 * @exports Logout
 * @updated 2025-03-26
 */

export const Logout = () => {
  return (
    <div>
      <p>Logout component loaded.</p>
    </div>
  );
};
```

## components/Logout/Logout.test.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Logout/Logout.test.jsx
 * @description Unit test for Logout component
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logout } from './Logout';

test('renders Logout component', () => {
  render(<Logout />);
  expect(screen.getByText(/Logout component loaded/i)).toBeInTheDocument();
});
```

## components/MyClaims/MyClaims.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/MyClaims/MyClaims.jsx
 * @description React presentational component
 * @version 1.0.0
 * @exports MyClaims
 * @updated 2025-03-26
 */
import {useState} from "react";

export const MyClaims = ({startingCount}) => {
  const [count, setCount] = useState(Number(startingCount));
  return (
      <div>
          <p>MyClaims component loaded. {startingCount}</p>
          <div>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
      </div>
  );
};
```

## components/MyClaims/MyClaims.test.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/MyClaims/MyClaims.test.jsx
 * @description Unit test for MyClaims component
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MyClaims } from './MyClaims';

test('renders MyClaims component', () => {
  render(<MyClaims />);
  expect(screen.getByText(/MyClaims component loaded/i)).toBeInTheDocument();
});
```

## components/Nav/Nav.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Nav/Nav.jsx
 * @description Navigation bar using React Router links for claims-related routes
 * @version 1.1.0
 * @exports Nav
 * @updated 2025-03-26
 */

import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav
            style={{
                backgroundColor: '#1e1e1e',
                color: '#fff',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-around',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/new-claim" style={{ color: 'white', textDecoration: 'none' }}>New Claim</Link>
            <Link to="/my-claims" style={{ color: 'white', textDecoration: 'none' }}>My Claims</Link>
            <Link to="/help" style={{ color: 'white', textDecoration: 'none' }}>Help</Link>
            <Link to="/logout" style={{ color: 'white', textDecoration: 'none' }}>Logout</Link>
        </nav>
    );
};
```

## components/Nav/Nav.test.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/Nav/Nav.test.jsx
 * @description Unit test for Nav component with routing links for claim processing
 * @version 1.1.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Nav } from './Nav';

describe('Nav', () => {
  test('renders all navigation links', () => {
    render(
        <MemoryRouter>
          <Nav />
        </MemoryRouter>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/New Claim/i)).toBeInTheDocument();
    expect(screen.getByText(/My Claims/i)).toBeInTheDocument();
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });
});
```

## components/NewClaim/NewClaim.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/NewClaim/NewClaim.jsx
 * @description React presentational component
 * @version 1.0.0
 * @exports NewClaim
 * @updated 2025-03-26
 */ import {useContext} from "react";
import {MetadataContext} from "../../App";

export const NewClaim = () => {
    const metadata = useContext(MetadataContext);

  return (
    <div>
      <p>NewClaim component loaded. {metadata.counter}</p>
    </div>
  );
};
```

## components/NewClaim/NewClaim.test.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/NewClaim/NewClaim.test.jsx
 * @description Unit test for NewClaim component
 * @version 1.0.0
 * @updated 2025-03-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NewClaim } from './NewClaim';

test('renders NewClaim component', () => {
  render(<NewClaim />);
  expect(screen.getByText(/NewClaim component loaded/i)).toBeInTheDocument();
});
```

## index.jsx

```typescript
/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/index.jsx
 * @description Main React entry component rendering Hello World
 * @version 1.0.0
 * @exports App
 * @updated 2025-03-25
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## index.test.js

```typescript
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
```
