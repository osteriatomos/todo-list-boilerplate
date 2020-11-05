import { CREATE_TODO, DELETE_TODO, Actions } from "./types";

export const createTodoAction = ({
  actionItem,
}: {
  actionItem: string;
}): Actions => {
  return {
    type: CREATE_TODO,
    payload: { actionItem: actionItem },
  };
};

export const deleteTodoAction = ({ id }: { id: number }): Actions => {
  return {
    type: DELETE_TODO,
    payload: { id: id },
  };
};
