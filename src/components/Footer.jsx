import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import {RiMovie2Line} from "react-icons/ri"

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between border-top align-items-center bg-dark ">
      <div className="col-md-4 d-flex align-items-center my-2">
        <a
          href="/"
          className="mx-4 text-body-secondary text-decoration-none lh-1 "
        >
            <p className="text-danger"><RiMovie2Line size={32}/></p>
        </a>
        <span className="mb-3 mb-md-0 text-light">© 2023 mey, jogja</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex z-1 mx-5">
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <p className="text-light">
              <BsInstagram />
            </p>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <p className="text-light">
              <FiTwitter />
            </p>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <p className="text-light">
              <CiFacebook />
            </p>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
