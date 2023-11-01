import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
  postDetails: null,
};

const postSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieData: (state, action) => {
      state.movie= action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
  },
});

export const { setMovieData, setPostDetails } = postSlice.actions;
export default postSlice.reducer;