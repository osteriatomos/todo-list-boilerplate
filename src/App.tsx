import React from 'react';
import './App.css';
import { ContextProvider } from '../src/states/Provider';
import routes from './routes';
import { useRoutes } from 'react-router-dom';

function App() {
  const routing = useRoutes(routes);

  return <ContextProvider>{routing}</ContextProvider>;
}

export default App;
