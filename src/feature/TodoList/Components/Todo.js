import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  readTodos,
  removeTodo,
  toggleCompletedTodo,
} from "../../../redux/actions";
import CompleteIcon from "../../../assets/icons/complete.svg";
import RemoveIcon from "../../../assets/icons/remove.svg";

const Todo = ({
  readTodos,
  todos,
  removeTodo,
  toggleCompletedTodo,
  dateCalendar,
}) => {
  useEffect(() => {
    readTodos();
  }, []);

  // const _handleCompleteIcon = (id) => {
  //   toggleCompletedTodo(id);
  // };
  // const _handleRemoveIcon = (id) => {
  //   removeTodo(id);
  // };
  return (
    <ul className="todo-wrapper">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            todo.date === dateCalendar && (
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
                  onClick={() => toggleCompletedTodo(todo.id)}
                />
                <div className="todo-item__title">{todo.title}</div>
                <img
                  src={RemoveIcon}
                  className="todo-item__icon"
                  alt="Remove icon"
                  onClick={() => removeTodo(todo.id)}
                />
              </li>
            )
          );
        })
      ) : (
        <p>nothing to show</p>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  // way 1
  // const {
  //   todoReducers: { todos, dateCalendar },
  // } = state;
  // return {
  //   todos,
  //   dateCalendar,
  // };
  // way 2
  return {
    todos: state.todoReducers.todos,
    dateCalendar: state.todoReducers.dateCalendar,
  };
};
const mapDispatchToProps = {
  readTodos,
  removeTodo,
  toggleCompletedTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
