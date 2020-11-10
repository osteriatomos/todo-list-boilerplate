import React from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const TodoBoard: React.FC = () => {
  return (
    <React.Fragment>
      <TodoList />
      <TodoForm />
    </React.Fragment>
  );
};

export default TodoBoard;
