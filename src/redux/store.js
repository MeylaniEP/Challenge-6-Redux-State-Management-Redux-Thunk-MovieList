import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import margeReducer from "./reducers/margeReducer";

export default configureStore({
  reducer: margeReducer,
  devTools: import.meta.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  enhancers: [composeWithDevTools()],
});
