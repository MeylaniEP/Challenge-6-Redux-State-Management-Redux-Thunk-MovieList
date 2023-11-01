import axios from "axios";
import { toast } from "react-toastify";
import { setMovieDetails, setMovieData } from "../reducers/postReducer";

export const getAllMovies = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API}/v1/movie/popular`,
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
        }
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