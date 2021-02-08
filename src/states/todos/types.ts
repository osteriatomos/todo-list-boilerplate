export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export type Todo = {
  id: number;
  actionItem: string;
  isCompleted: boolean;
};

type CreateTodo = {
  type: typeof CREATE_TODO;
  payload: { actionItem: string };
};

type UpdateTodo = {
  type: typeof UPDATE_TODO;
  payload: { id: number; actionItem: string; isCompleted: boolean };
};

type DeleteTodo = {
  type: typeof DELETE_TODO;
  payload: { id: number };
};

export type Actions = CreateTodo | UpdateTodo | DeleteTodo;
