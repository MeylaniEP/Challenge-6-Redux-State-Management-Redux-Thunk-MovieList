import React, { useEffect, useState } from "react";
import popularMovies from "../api/backDrop";
import {FiPlayCircle} from "react-icons/fi";

function Hero() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      async function fetchMovies() {
        try {
          const moviesData = await popularMovies();
          setMovies(moviesData);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchMovies();
    }, []);
  
    return (
      <div
        id="myCarousel"
        className="carousel slide vh-100 mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
  
        <div className="carousel-inner d-flex align-items-center vh-100">
          {movies.map((movie, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={movie.id}
            >
              <img
                className="object-fit-cover w-100 vh-100 "
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              />
              <div className="container">
                <div className="carousel-caption d-flex flex-column justify-content-center vh-100 w-50 text-start">
                  <h1>{movie.title}</h1>
                  <p className="opacity-75">{movie.overview}</p>
                  <p>
                  <button type="button" className="flex d-felx align-items-center justify-content-center  btn btn-danger rounded-pill"><FiPlayCircle /><span className="fw-semibold"> WATCH TRAILER</span></button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  
}

export default Hero
