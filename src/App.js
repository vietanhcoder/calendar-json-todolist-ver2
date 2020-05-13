import React from "react";
// import { TodoList, Calendar } from "./feature";
import TodoList from "./feature/TodoList";
import Calendar from "./feature/Calendar";
import "./styles.scss";
const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Calendar />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
