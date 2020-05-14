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

export const createTodo = (title) => async (dispatch, getState) => {
  try {
    const todo = {
      title,
      isCompleted: false,
      date: "",
    };
    await axios.post(BASE_URL, todo);
    dispatch({ type: ADD_TODO, payload: { todo } });
  } catch (err) {
    alert("deo create duoc");
  }
};

export const removeTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    dispatch({ type: REMOVE_TODO, payload: { id } });
  } catch (err) {
    alert("deo remove duoc");
  }
};

export const toggleCompletedTodo = (id) => async (dispatch) => {
  try {
    await axios.patch(`${BASE_URL}/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: { id } });
  } catch (err) {
    alert("deo toggle duoc");
  }
};

export const selectedDate = (date) => ({
  type: SELECT_DATE,
  payload: { date },
});
