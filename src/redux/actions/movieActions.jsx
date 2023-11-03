import axios from "axios";
import { toast } from "react-toastify";
import { setMovieData, setMovieDetails } from "../reducers/movieReducer";

export const getAllMovies =
  (query = "") =>
  async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        query === "" || query === null
          ? `${import.meta.env.VITE_REACT_APP_API}/v1/movie/popular`
          : `${
              import.meta.env.VITE_REACT_APP_API
            }/v1/search/movie?page=1&query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setMovieData(response.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };
export const getMovieDetails = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `https://shy-cloud-3319.fly.dev/api/v1/movie/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setMovieDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
