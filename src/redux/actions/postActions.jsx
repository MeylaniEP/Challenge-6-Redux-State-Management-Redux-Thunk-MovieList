import axios from "axios";
import { toast } from "react-toastify";
import { setPostDetails, setMovieData } from "../reducers/postReducer";

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
export const getPostDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    dispatch(setPostDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};