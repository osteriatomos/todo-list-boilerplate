import React, { createContext, useContext } from 'react';
import { useTodo } from './todos/hooks';

const TodoContext = createContext({} as ReturnType<typeof useTodo>);

export const useTodoContext = () => useContext(TodoContext);

export const ContextProvider: React.FC = ({ children }) => {
  const providingValue = useTodo();
  return (
    <TodoContext.Provider value={providingValue}>
      {children}
    </TodoContext.Provider>
  );
};
