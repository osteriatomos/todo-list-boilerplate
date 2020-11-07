import React, { createContext } from 'react';
import { useTodo } from './todos/hooks';
import { DispatchActions, Todo } from './todos/types';

export const TodoContext = createContext(
  {} as {
    state: Todo[];
    dispatchActions: DispatchActions;
    isFetching: boolean;
    errorMessage: string;
  }
);

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatchActions, isFetching, errorMessage] = useTodo();
  return (
    <TodoContext.Provider
      value={{ state, dispatchActions, isFetching, errorMessage }}
    >
      {children}
    </TodoContext.Provider>
  );
};
