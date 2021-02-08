import { useState, useReducer, useCallback } from 'react';
import { initialState, reducer } from './reducers';
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './types';

export const useTodo = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTodo = useCallback(
    async ({ actionItem }: { actionItem: string }) => {
      setIsFetching(true);
      try {
        // 任意の非同期処理
        await new Promise((resolve) => setTimeout(resolve, 250));
        setIsFetching(false);
        dispatch({ type: CREATE_TODO, payload: { actionItem } });
      } catch (e) {
        setIsFetching(false);
        setErrorMessage(e);
      }
    },
    [isFetching, setErrorMessage]
  );

  const updateTodo = useCallback(
    async ({
      id,
      actionItem,
      isCompleted,
    }: {
      id: number;
      actionItem: string;
      isCompleted: boolean;
    }) => {
      setIsFetching(true);
      try {
        // 任意の非同期処理
        await new Promise((resolve) => setTimeout(resolve, 250));
        setIsFetching(false);
        dispatch({
          type: UPDATE_TODO,
          payload: { id, actionItem, isCompleted },
        });
      } catch (e) {
        setIsFetching(false);
        setErrorMessage(e);
      }
    },
    [isFetching, setErrorMessage]
  );

  const deleteTodo = useCallback(
    async ({ id }: { id: number }) => {
      setIsFetching(true);
      try {
        // 任意の非同期処理
        await new Promise((resolve) => setTimeout(resolve, 250));
        setIsFetching(false);
        dispatch({ type: DELETE_TODO, payload: { id } });
      } catch (e) {
        setIsFetching(false);
        setErrorMessage(e);
      }
    },
    [isFetching, setErrorMessage]
  );

  return {
    state,
    createTodo,
    updateTodo,
    deleteTodo,
    isFetching,
    errorMessage,
  };
};
