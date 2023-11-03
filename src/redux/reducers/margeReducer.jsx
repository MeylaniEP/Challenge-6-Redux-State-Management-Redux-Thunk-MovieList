import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./authReducers";
import movieReducer from "./movieReducer";


export default combineReducers({
  post: movieReducer,
  auth: authReducers,
});
