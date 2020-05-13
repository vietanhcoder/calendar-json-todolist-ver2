import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// import reducers
import todoReducers from "./redux/reducers";

// config for reducers
const allReducers = {
  todoReducers,
};
const reducers = combineReducers({
  ...allReducers,
});
const stores = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default stores;
