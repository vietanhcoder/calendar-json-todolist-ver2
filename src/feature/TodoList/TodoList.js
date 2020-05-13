import React from "react";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import "./styles.scss";
const TodoList = () => {
  return (
    <>
      <TodoForm />
      <Todo />
    </>
  );
};

export default TodoList;
