import React from 'react';
import TodoBoard from './pages/TodoBoard';
import './App.css';
import { ContextProvider } from '../src/states/Provider';

function App() {
  return (
    <ContextProvider>
      <TodoBoard />
    </ContextProvider>
  );
}

export default App;
