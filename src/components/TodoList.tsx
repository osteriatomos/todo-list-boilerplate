import React, { useContext } from "react";
import { TodoContext } from "../states/Provider";
import { Todo } from "../states/todos/types";

const TodoList: React.FC = () => {
  const { state, dispatchActions } = useContext(TodoContext);

  const DeleteButton: React.FC<{ id: number }> = ({ id }) => {
    const _onClick = () => {
      dispatchActions.delete({ id: id });
    };

    return <button onClick={_onClick}>×</button>;
  };

  return (
    <React.Fragment>
      {state.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <span>{todo.actionItem}</span>
            <DeleteButton id={todo.id} />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default TodoList;
