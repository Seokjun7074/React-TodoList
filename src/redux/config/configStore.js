import { createStore } from "redux";
import { combineReducers } from "redux";
import todo_modules from "../modules/todo_module";

const rootReducer = combineReducers({ todo_modules });
const store = createStore(rootReducer);

export default store;
