import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../redux/actions/authActions";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

function GoogleLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });

  return (
    <>
      <div className="d-flex flex-row justify-content-evenly">
        <Button
          variant="transparent"
          className="text-light d-flex align-items-center p- bg-body-transparent border rounded mb-5"
          onClick={() => loginWithGoogle()}
        >
          <FcGoogle className="" /> <span className="mx-2"> Google</span>
        </Button>

        <Button
          variant="transparent"
          className="text-light d-flex align-items-center p- bg-body-transparent border rounded mb-5"
        >
          <BsFacebook className="text-primary" />{" "}
          <span className="mx-2"> Facebook</span>
        </Button>
      </div>
    </>
  );
}

export default GoogleLogin;
