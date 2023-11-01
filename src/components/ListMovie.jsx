import { AiFillLike, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../assets/styles/ListMovie.css";
import { useEffect } from "react";
import { useState } from "react";
import { getAllMovies } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";

function ListMovie() {
  const dispatch = useDispatch();
  
  const movie = useSelector((state) => {
    console.log(state);
    return state.post.movie.data;
  });

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div id="list" className="container mt-5">
      <div className="flex d-flex flex-row justify-content-between align-item-center">
        <h3 className="text-light">Popular Movie</h3>
        <a href="#" className="text-danger">
          See All Movie{" "}
          <span>
            <AiOutlineArrowRight />
          </span>
        </a>
      </div>
      <div className="flex d-flex justify-content-between w-100 text-light">
        <div className="row">
          {movie ? (
            movie.map((movie) => (
              <Link
                className="card mx-3 my-3 p-2 bg-opacity-25"
                key={movie.id}
                to={`/details/${movie.id}`}
              >
                <img
                  className="card-img-top mt-1 rounded"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <div className="card-body ">
                  <h6 className="card-title text-light">{movie.title}</h6>
                  <p className="card-text text-light">{movie.release_date}</p>
                  <p className="text-light">
                    <AiFillLike className="red-icon" /> {movie.vote_count}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListMovie;
