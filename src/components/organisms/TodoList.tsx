import React, { useCallback } from 'react';
import { useTodoContext } from 'states/Provider';
import { Todo } from 'states/todos/types';

const TodoList: React.FC = () => {
  const { state, deleteTodo, isFetching } = useTodoContext();

  const DeleteButton: React.FC<{ id: number }> = ({ id }) => {
    const _onClick = useCallback(() => {
      deleteTodo({ id });
    }, [id]);

    return <button onClick={_onClick}>×</button>;
  };

  if (isFetching) {
    return <div> Loading... </div>;
  }

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
