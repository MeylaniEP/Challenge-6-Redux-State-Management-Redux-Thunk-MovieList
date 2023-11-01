import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../assets/styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
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

            <form
              className="col-4 col-lg-4  mb-lg-0 me-lg-3 position-relative"
              role="search"
              method="get"
            >
              <input
                id="pencarian"
                type="search"
                className="form-control form-control-dark text-light bg-transparent rounded-pill border-danger"
                placeholder="What do you want to watch?"
                aria-label="Search"
                name="q"
              />
            </form>
            <div className="m-0">
              <Link to={"/account"}>
                <button className="rounded-3 btn btn-outline-danger fw-bold">
                  Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
