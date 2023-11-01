import React, { useState, useEffect } from "react";
import getUserData from "../api/getUserAccount";
import image from "../image/backDrop.jpg";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setUserData((await getUserData()).data);
    };

    getData();
  }, []);

  const handlerLogout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate("/wellcome");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <img
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
              value={userData.name}
              id=""
            />
            <input
              type="text"
              className="p-2 border-0 rounded-2 mb-4"
              value={userData.email}
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
