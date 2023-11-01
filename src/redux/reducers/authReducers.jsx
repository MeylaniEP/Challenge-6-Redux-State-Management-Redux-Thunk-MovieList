import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, actions) => {
      if (actions.payload) {
        localStorage.setItem("token", actions.payload);
      } else {
        localStorage.removeItem("token");
      }

      state.token = actions.payload;
    },

    setIsLoggedIn: (state, actions) => {
      state.isLoggedIn = actions.payload;
    },

    setUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

export const {setToken, setIsLoggedIn, setUser} = authSlice.actions;

export default authSlice.reducer;
