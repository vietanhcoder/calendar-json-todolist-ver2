import React, { useState } from "react";
import AddIcon from "../../../assets/icons/add.svg";
import { createTodo } from "../../../redux/actions";
import { connect } from "react-redux";

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const _handleAddTodo = () => {
    createTodo(title);
  };
  const _handleOnChangeInput = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <div className="todo-form">
      <h2 className="todo-form__header">Add New Todo</h2>
      <div className="todo-form__body">
        <img
          src={AddIcon}
          alt="Add Icon"
          className="todo-form__body__icon"
          onClick={_handleAddTodo}
        />
        <input
          type="text"
          className="todo-form__body__input"
          onChange={_handleOnChangeInput}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  createTodo,
};

export default connect(null, mapDispatchToProps)(TodoForm);
