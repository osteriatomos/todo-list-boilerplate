import { useState, useReducer, useCallback } from 'react';
import { initialState, reducer } from './reducers';
import { CREATE_TODO, DELETE_TODO, Todo, DispatchActions } from './types';

export const useTodo = (): [Todo[], DispatchActions, boolean, string] => {
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTodo = useCallback(
    async ({ actionItem }: { actionItem: string }) => {
      setIsFetching(true);
      try {
        // 任意の非同期処理
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsFetching(false);
        dispatch({ type: CREATE_TODO, payload: { actionItem: actionItem } });
      } catch (e) {
        setIsFetching(false);
        setErrorMessage(e);
      }
    },
    [dispatch, setIsFetching, setErrorMessage]
  );

  const deleteTodo = useCallback(
    async ({ id }: { id: number }) => {
      setIsFetching(true);
      try {
        // 任意の非同期処理
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsFetching(false);
        dispatch({ type: DELETE_TODO, payload: { id: id } });
      } catch (e) {
        setIsFetching(false);
        setErrorMessage(e);
      }
    },
    [dispatch, setIsFetching, setErrorMessage]
  );

  const dispatchActions = {
    create: createTodo,
    delete: deleteTodo,
  };

  return [state, dispatchActions, isFetching, errorMessage];
};
