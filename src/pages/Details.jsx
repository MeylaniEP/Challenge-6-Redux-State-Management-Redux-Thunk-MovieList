import React from "react";
import "../assets/styles/Details.css";
import { AiOutlineStar } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../redux/actions/movieActions";



function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const detailMovie = useSelector((state) => {
    console.log(state.post);
    return state.post.movieDetails;
  });

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch]);

  return detailMovie === null ? (<></>) : (
    <div className="vh-100 bg-dark">
      <img
        className="object-fit-cover w-100 h-100 position-absolute"
        src={`https://image.tmdb.org/t/p/w1280${detailMovie.data.backdrop_path}`}
      />

      <div className="detail flex d-flex flex-column justify-content-center vh-100 m-0 position-relative z-1 text-light">
        <div className="w-50">
          <h1>{detailMovie.data.title}</h1>
          <p>
            Release date : <span>{detailMovie.data.release_date}</span>
          </p>
          <p>{detailMovie.data.overview}</p>
          <p>
            <AiOutlineStar className="yellow-icon" />{" "}
            <span>{detailMovie.data.vote_average}</span>
          </p>
          <button
            type="button"
            className="flex d-felx align-items-center justify-content-center  btn btn-danger rounded-pill"
          >
            <FiPlayCircle />
            <span className="fw-semibold"> WATCH TRAILER</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
