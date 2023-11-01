import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./postReducer";
import authReducers from "./authReducers";

export default combineReducers({
  post: postReducer,
  auth: authReducers,
});
