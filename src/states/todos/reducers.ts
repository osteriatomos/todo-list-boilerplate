import { Todo, CREATE_TODO, DELETE_TODO, Actions } from "./types";

export const initialState: Todo[] = [];

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case CREATE_TODO:
      const newTodo: Todo = {
        id: new Date().getTime(),
        actionItem: action.payload.actionItem,
        isCompleted: false,
      };
      return [...state, newTodo];
    case DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
