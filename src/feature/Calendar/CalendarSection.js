import React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { connect } from "react-redux";
import { selectedDate } from "../../redux/actions";

const CalendarSection = ({ selectedDate, todos }) => {
  const _onClickDay = (date) => {
    const formatSelectDay = moment(date).format("YYYY-MM-DD");
    selectedDate(formatSelectDay);
  };

  const _handleSetClassDate = ({ activeStartDate, date, view }) => {
    const todoDate = todos.filter((todo) => {
      return todo.date === moment(date).format("YYYY-MM-DD");
    });
    return todoDate.length > 0 ? "have-todo" : "";
  };

  return (
    <div>
      <Calendar onClickDay={_onClickDay} tileClassName={_handleSetClassDate} />
    </div>
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
  selectedDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarSection);
