import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  READ_TODOS,
  SELECT_DATE,
} from "./types";
const initialState = {
  loading: false,
  dateCalendar: "",
  todos: [],
  error: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case READ_TODOS: {
      return {
        ...state,
        todos: action.payload.data,
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [action.payload.todo, ...state.todos],
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      const removedTodos = state.todos.filter((todo) => todo.id !== id);
      return {
        ...state,
        todos: removedTodos,
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const toggleTodo = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      return {
        ...state,
        todos: toggleTodo,
      };
    }
    case SELECT_DATE: {
      const { date } = action.payload;
      return {
        ...state,
        dateCalendar: date,
      };
    }

    default:
      return state;
  }
};
export default reducers;
