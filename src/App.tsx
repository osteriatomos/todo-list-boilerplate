import React from 'react';
import './App.css';
import { ContextProvider } from '../src/states/Provider';
import rootPath from './routes';
import { useRoutes } from 'react-router-dom';

function App() {
  const element = useRoutes(rootPath);

  return <ContextProvider>{element}</ContextProvider>;
}

export default App;
