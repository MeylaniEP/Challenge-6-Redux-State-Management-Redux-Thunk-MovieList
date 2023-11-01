import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/wellcome")
    }
  }, [])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
    )
}

export default App;
