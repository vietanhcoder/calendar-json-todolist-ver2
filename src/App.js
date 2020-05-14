import React from "react";
// import { TodoList, Calendar } from "./feature";
import TodoList from "./feature/TodoList";
import CalendarSection from "./feature/Calendar";
import "./styles.scss";
const App = () => {
  return (
    <div className="app">
      <div className="container">
        <CalendarSection />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
