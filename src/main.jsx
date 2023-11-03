import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login.jsx";
import Registrasi from "./pages/Registrasi.jsx";
import Welcome from "./pages/Wellcome.jsx";
import Authentication from "./layouts/Authentication.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const GoogleAuthComponent = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <AppWithRoutes />
    </GoogleOAuthProvider>
  );
};

const AppWithRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<App />} path="/">
          <Route index element={<Home />}  />
          <Route
            element={<Details />}
            path="/details/:id"
          />
          <Route element={<UserProfile />} path="/account" />
        </Route>

        <Route path="/wellcome" element={<Welcome />} />

        <Route element={<Authentication />}>
          <Route element={<Registrasi />} path="/register" />
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleAuthComponent />
    </Provider>
  </React.StrictMode>
);
