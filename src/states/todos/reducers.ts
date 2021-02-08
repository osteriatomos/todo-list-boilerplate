import { Todo, CREATE_TODO, UPDATE_TODO, DELETE_TODO, Actions } from './types';

export const initialState: Todo[] = [];

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          id: new Date().getTime(),
          actionItem: action.payload.actionItem,
          isCompleted: false,
        },
      ];
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              id: todo.id,
              actionItem: action.payload.actionItem,
              isCompleted: action.payload.isCompleted,
            }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
