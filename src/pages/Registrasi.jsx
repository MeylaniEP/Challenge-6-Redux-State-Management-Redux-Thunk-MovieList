import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import image from "../image/backDrop.jpg";
import "../assets/styles/Registrasi.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authActions";

function Registrasi() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [validation, setValidation] = useState([]);
  
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    const name = `${firstName} ${lastName}`;
    let data = JSON.stringify({
      name,
      email,
      password,
    });
    dispacth(register(data, navigate))
  };
  return (
    <div className="vh-100">
        <div>
          <img
            src={image}
            className="object-fit-cover w-100 h-100 position-absolute"
            alt="https://unsplash.com/photos/BQTHOGNHo08"
          />
          <div className="d-flex flex-column justify-content-center align-items-center position-relative z-1 vh-100">
            <h1 className="navbar-brand text-danger fw-bold">MovieList</h1>
            <div className="card p-5">
              <h2 className="text mb-2">Sign Up</h2>
              <form onSubmit={registerHandler}>
                <div className="d-flex flex-row gap-4 mb-3">
                  <input
                    className="rounded from-control border-0 p-2 w-50"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                  {validation.firstName && (
                    <div className="alert alert-danger">
                      {validation.firstName[0]}
                    </div>
                  )}
                  <input
                    className="rounded from-control border-0 p-2 w-50"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                  {validation.lastName && (
                    <div className="alert alert-danger">
                      {validation.lastName[0]}
                    </div>
                  )}
                </div>
                <input
                  className="rounded from-control w-100 border-0 p-2 mb-3"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                {validation.email && (
                  <div className="alert alert-danger">
                    {validation.email[0]}
                  </div>
                )}
                <input
                  className="rounded from-control w-100 border-0 p-2 mb-3"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                {validation.password && (
                  <div className="alert alert-danger">
                    {validation.password[0]}
                  </div>
                )}
                <input
                  className="rounded from-control w-100 border-0 p-2 mb-3"
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="Konfirmation Password"
                />
                {validation.passwordConfirmation && (
                  <div className="alert alert-danger">
                    {validation.passwordConfirmation[0]}
                  </div>
                )}
                <button className="btn btn-danger w-100 mt-2 p-0 d-flex justify-content-center">
                  <p className="className m-0 p-2 fw-semibold">Sign Up</p>
                </button>
              </form>

              <p className="text-light position-relative mb-5">
                <span>
                  <a href="#">Forgot password?</a>
                </span>
              </p>
              <p className="text-light">
                You have an account ?
                <Link to={"/login"}>
                  <span>
                    <a href="#"> Sign in now.</a>
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Registrasi;
