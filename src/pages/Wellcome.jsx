import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import backDrop from "../image/backDrop.jpg";
import "../assets/styles/ListMovie.css";

function Wellcome() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector("#myHeader");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  return (
    <>
      <div className="bg-dark">
        <header
          className="fixed-top position-absolut p-3 text-bg-transparent"
          id="myHeader"
        >
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <ul className="nav mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to={"/"} className="nav-link px-2 text-secondary">
                    <span>
                      <h1 className="navbar-brand">MovieList</h1>
                    </span>
                  </Link>
                </li>
              </ul>

              <div className="text-end">
                <Link to={"/login"}>
                  <button
                    type="button"
                    className="btn btn-outline-light rounded-pill me-2 border-danger"
                  >
                    Login
                  </button>
                </Link>
                <Link to={"/register"}>
                  <button type="button" className="btn btn-danger rounded-pill">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className="hero">
          <img
            src={backDrop}
            className="object-fit-cover w-100 h-100 position-absolute"
            alt="https://unsplash.com/photos/BQTHOGNHo08"
          />
          <div className="task flex d-flex flex-column justify-content-center vh-100 m-0 position-relative z-1 text-light">
            <h1 className="text-lg-center">
              Katalog Movie No 1 di Indonesia. Ter Hits dan ter Update. Semuanya
              bisa dinikmati disini.
            </h1>
            <h2 className="text-lg-center">
              Tonton dimana saja dan kapan saja.
            </h2>
            <h4 className="text-lg-center fs-">
              Siap untuk menonton? Masukkan alamat email Anda untuk membuat atau
              memulai keanggotaan Anda kembali.
            </h4>
          </div>
        </section>

        <section className="two mt-2">
          <div className="dua flex d-flex flex-row justify-content-center align-items-center vh-50 m-0 position-relative text-light">
            <img src={backDrop} className="image" alt="" />
            <div>
              <h1 className="text-start fs-1">
                Nikmati di TV Anda
              </h1>
              <h4 className="text-start">
              Tonton di TV pintar, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.
              </h4>
            </div>
          </div>
        </section>

        <section className="two mt-2">
          <div className="dua flex d-flex flex-row justify-content-center align-items-center vh-50 m-0 position-relative text-light">
            <div>
              <h1 className="text-start fs-1">
                Nikmati di TV Anda
              </h1>
              <h4 className="text-start">
              Tonton di TV pintar, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.
              </h4>
            </div>
            <img src={backDrop} className="imageTwo" alt="" />
          </div>
        </section>

        <section className="footer fixed-bottom">
          <Footer className="" />
        </section>
      </div>
    </>
  );
}

export default Wellcome;
