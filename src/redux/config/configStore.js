// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import todo_modules from "../modules/todo_module";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../modules/todo_slice";

// const rootReducer = combineReducers({ todo_modules });
// const store = createStore(rootReducer);
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
