import { useState, useCallback, useReducer } from "react";
import { initialState, reducer } from "./reducers";
import { Todo, DispatchActions } from "./types";
import { createTodoAction, deleteTodoAction } from "./actions";

export const useTodo = (): [Todo[], DispatchActions, boolean, string] => {
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTodo = useCallback(
    async ({ actionItem }: { actionItem: string }) => {
      setIsFetching(true);
      try {
        // await 非同期処理
        setIsFetching(false);
        dispatch(createTodoAction({ actionItem: actionItem }));
      } catch (e) {
        setIsFetching(false);
        setErrorMessage(e);
      }
    },
    [isFetching, errorMessage]
  );

  const deleteTodo = useCallback(
    async ({ id }: { id: number }) => {
      setIsFetching(true);
      try {
        // await 非同期処理
        setIsFetching(false);
        dispatch(deleteTodoAction({ id: id }));
      } catch (e) {
        setIsFetching(false);
        setErrorMessage(e);
      }
    },
    [isFetching, errorMessage]
  );

  const dispatchActions = {
    create: createTodo,
    delete: deleteTodo,
  };

  return [state, dispatchActions, isFetching, errorMessage];
};
