import axios from "axios";
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  READ_TODOS,
  SELECT_DATE,
} from "./types";

const BASE_URL = "http://localhost:4000/todos";

export const readTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL);
    const data = res.data;
    dispatch({
      type: READ_TODOS,
      payload: { data },
    });
  } catch (err) {
    alert("deo fetch duoc");
  }
};

// =====BEGIN  CREATING/ ADDING TODO

export const createTodo = (title) => async (dispatch, getState) => {
  const date = getState().todoReducers.dateCalendar;
  if (!date) {
    alert("please select a date");
  } else {
    try {
      const todo = {
        title,
        isCompleted: false,
        date: date,
      };
      const res = await axios.post(BASE_URL, todo);
      const id = res.data.id;
      todo.id = id;
      // must set id todo for removing and toggling

      dispatch({ type: ADD_TODO, payload: { todo } });
    } catch (err) {
      alert("can't create a new todo");
    }
  }
};
// way 2:
// const addTodo = title => (dispatch, getState) => {
// 	const date = getState().todoReducer.date;
// 	const todo = {
// 		title,
// 		isCompleted: false,
// 		date,
// 	};
// 	axios
// 		.post(...)
// 		.then(() => {
// 			dispatch({
// 				type: ADD_TODO,
// 				payload: todo
// 			})
// 		})
// }

// =====END CREATING/ ADDING TODO
export const removeTodo = (id) => async (dispatch, getState) => {
  try {
    const todos = getState().todoReducers.todos;
    const todo = todos.map((todo) => todo.id === id);
    await axios.delete(`${BASE_URL}/${id}`, todo);
    dispatch({ type: REMOVE_TODO, payload: { id } });
  } catch (err) {
    alert("can't remove this item");
  }
};

export const toggleCompletedTodo = (id) => async (dispatch, getState) => {
  try {
    const todos = getState().todoReducers.todos;
    const todo = todos.find((item) => item.id === id);
    await axios.patch(`${BASE_URL}/${id}`, { isCompleted: !todo.isCompleted });
    dispatch({ type: TOGGLE_TODO, payload: { id } });
  } catch (err) {
    alert("can't toggle this item");
  }
};

export const selectedDate = (date) => ({
  type: SELECT_DATE,
  payload: { date },
});
