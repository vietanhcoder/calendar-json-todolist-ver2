import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  readTodos,
  removeTodo,
  toggleCompletedTodo,
} from "../../../redux/actions";
import CompleteIcon from "../../../assets/icons/complete.svg";
import RemoveIcon from "../../../assets/icons/remove.svg";

const Todo = ({ readTodos, todos, removeTodo, toggleCompletedTodo }) => {
  useEffect(() => {
    readTodos();
  }, []);

  const _handleCompleteIcon = (id) => {
    toggleCompletedTodo(id);
  };
  const _handleRemoveIcon = (id) => {
    removeTodo(id);
  };
  return (
    <ul className="todo-wrapper">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={`todo-item ${
                todo.isCompleted ? "todo-item__isCompleted" : ""
              }`}
            >
              <img
                src={CompleteIcon}
                alt="complete icon"
                className="todo-item__icon"
                onClick={() => _handleCompleteIcon(todo.id)}
              />
              <div className="todo-item__title">{todo.title}</div>
              <img
                src={RemoveIcon}
                className="todo-item__icon"
                alt="Remove icon"
                onClick={() => _handleRemoveIcon(todo.id)}
              />
            </li>
          );
        })
      ) : (
        <p>nothing to show</p>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const {
    todoReducers: { todos },
  } = state;
  return {
    todos,
  };
};
const mapDispatchToProps = {
  readTodos,
  removeTodo,
  toggleCompletedTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
