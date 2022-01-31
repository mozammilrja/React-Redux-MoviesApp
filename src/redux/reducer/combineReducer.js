import { combineReducers } from "redux";
import  moviesReducer  from "./reducer";

const rootReducer = combineReducers({
  moviesReducer,
});

export default rootReducer;
