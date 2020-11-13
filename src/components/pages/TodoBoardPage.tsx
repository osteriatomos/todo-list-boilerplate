import React from 'react';
import TodoList from '../organisms/TodoList';
import TodoForm from '../organisms/TodoForm';

const TodoBoard: React.FC = () => {
  return (
    <React.Fragment>
      <TodoList />
      <TodoForm />
    </React.Fragment>
  );
};

export default TodoBoard;
