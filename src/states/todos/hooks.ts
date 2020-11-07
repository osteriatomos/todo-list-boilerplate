import { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers';
import { CREATE_TODO, DELETE_TODO, Todo, DispatchActions } from './types';

export const useTodo = (): [Todo[], DispatchActions, boolean, string] => {
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTodo = async ({ actionItem }: { actionItem: string }) => {
    setIsFetching(true);
    try {
      // await 非同期処理
      setIsFetching(false);
      dispatch({ type: CREATE_TODO, payload: { actionItem: actionItem } });
    } catch (e) {
      setIsFetching(false);
      setErrorMessage(e);
    }
  };

  const deleteTodo = async ({ id }: { id: number }) => {
    setIsFetching(true);
    try {
      // await 非同期処理
      setIsFetching(false);
      dispatch({ type: DELETE_TODO, payload: { id: id } });
    } catch (e) {
      setIsFetching(false);
      setErrorMessage(e);
    }
  };

  const dispatchActions = {
    create: createTodo,
    delete: deleteTodo,
  };

  return [state, dispatchActions, isFetching, errorMessage];
};
