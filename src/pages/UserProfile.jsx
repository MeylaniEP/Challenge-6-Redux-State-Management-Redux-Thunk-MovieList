import React, { useState, useEffect } from "react";
import image from "../image/backDrop.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => {
    console.log(state);
    return state.auth.user;
  });
  useEffect(() => {
    dispatch(getMe(navigate, "/account", "/errorPath"));
  }, [dispatch, navigate]);

  const handlerLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <img
        loading="lazy"
        src={image}
        className="object-fit-cover w-100 h-100 position-absolute"
        alt="https://unsplash.com/photos/BQTHOGNHo08"
      />
      <div className="d-flex flex-column p-5 bg-dark rounded-3 text-light z-1">
        <h3>Your Account</h3>
        <div className="d-flex flex-row h-100 gap-4 border-top py-5">
          <button className="">Avatar</button>
          <div className="d-flex flex-column border-start">
            <button className="mb-3 bg-transparent">Nama :</button>
            <button className="bg-transparent">Email :</button>
          </div>
          <div className="d-flex flex-column">
            <input
              type="text"
              className="p-2 border-0 rounded-2 mb-4"
              defaultValue={userData ? userData.name : ""}
              readOnly
              id=""
            />
            <input
              type="text"
              className="p-2 border-0 rounded-2 mb-4"
              defaultValue={userData ? userData.email : ""}
              readOnly
              id=""
            />
          </div>
        </div>
        <div className="d-flex ">
          <button
            className="btn btn-danger rounded-3 fw-bold mx-2"
            onClick={handlerLogout}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
