import React from "react";
import "../assets/styles/Details.css";
import { AiOutlineStar } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { useNavigation, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import getDetailsMovie from "../api/getDetailsMovie";
import Loading from "../components/Loading";

function Details() {
  const [detailMovie, setDetailMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const detail = await getDetailsMovie(id);
      setDetailMovie(detail);
    };

    getDetails();
  }, [detailMovie]);

  return (
    <div className="vh-100 bg-dark">
      <img
        className="object-fit-cover w-100 h-100 position-absolute"
        src={`https://image.tmdb.org/t/p/w1280${detailMovie.backdrop_path}`}
      />

      <div className="detail flex d-flex flex-column justify-content-center vh-100 m-0 position-relative z-1 text-light">
        <div className="w-50">
          <h1>{detailMovie.title}</h1>
          <p>
            Release date : <span>{detailMovie.release_date}</span>
          </p>
          <p>{detailMovie.overview}</p>
          <p>
            <AiOutlineStar className="yellow-icon" />{" "}
            <span>{detailMovie.vote_average}</span>
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
