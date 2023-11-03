import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
  movieDetails: null,
};

const postSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieData: (state, action) => {
      state.movie= action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const { setMovieData, setMovieDetails } = postSlice.actions;
export default postSlice.reducer;