import React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { connect } from "react-redux";
import { setSelectedDate } from "../../redux/actions";
import "./styles.scss";

const CalendarSection = ({ setSelectedDate, todos }) => {
  const _onClickDay = (date) => {
    const formatSelectDay = moment(date).format("YYYY-MM-DD");
    setSelectedDate(formatSelectDay);
  };

  const _handleSetClassDate = ({ activeStartDate, date, view }) => {
    const todoArr = todos.filter((todo) => {
      return todo.date === moment(date).format("YYYY-MM-DD");
    });
    return todoArr.length > 0 ? "have-todo" : "";
  };

  return (
    <div className="calendar-wrapper">
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
  setSelectedDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarSection);
