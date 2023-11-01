// import { configureStore } from "@reduxjs/toolkit";
// import margeReducer from "./reducers/margeReducer";
// import thunk from "redux-thunk";

// export default configureStore({
    //   reducer: margeReducer,
    //   devTools: import.meta.env.NODE_ENV === "development",
// });
// import { createStore, applyMiddleware } from "redux";
// import margeReducer from "./reducers/margeReducer";
// import thunk from "redux-thunk";

// const middleware = applyMiddleware(thunk);
// const store = createStore(margeReducer, middleware);


// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import margeReducer from "./reducers/margeReducer"
// Create the store
export default configureStore({
    reducer: margeReducer,
    devTools: import.meta.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // It not necessary if your feature is not too complex, you can just comment this line if you don't need it
      enhancers: [composeWithDevTools()],
});