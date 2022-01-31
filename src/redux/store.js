import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/combineReducer";

const reducer = {
  root: rootReducer,
};

export default configureStore({
  reducer,
});
