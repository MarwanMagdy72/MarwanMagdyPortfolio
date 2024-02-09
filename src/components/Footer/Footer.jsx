import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <footer className="  p-4 w-100 mx-auto  ">

      <div className="">
        <div className="row">
          <div className="col-md-4 contact-information mb-4 mb-md-0">
            <h5 className="mb-4">Contact Information</h5>
            <p className="mb-1">
              <i className="fas fa-map-marker-alt me-3"></i>Mostafa Kamel
              Street, Tanta, Egypt
            </p>
            <p className="my-3">
              <i className="fab fa-whatsapp me-2"></i>+20 1201439402 - +20
              1559559573
            </p>
            <i className="fas fa-envelope me-3"></i>
            <a
              className="mb-1"
              href="mailto:marawanmagdy389@gmail.com"
              target="_blank"
            >
              marawanmagdy389@gmail.com
            </a>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-4">Useful Links</h5>
            <ul className="list-unstyled footer-useful-links mb-0">
            <li>
            <Link to={"/"} >
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" >
              Projects
            </Link>
          </li>
          <li>
            <Link to={"/skills"} >
              Skills
            </Link>
          </li>
          <li>
            <a href="" >
              About
            </a>{" "}
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/14Gh7nrz1qO9yH7Zehmh4gR9DpYDo5q7E/view"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              CV
            </a>{" "}
          </li>
          <li>
            <Link to="/contact" >
              Contact
            </Link>{" "}
          </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-4">Follow Me</h5>
            <div className="social-icons ms-4 d-flex ">
              <div className="link">

              <a
                href="https://www.linkedin.com/in/marwan-magdy72 "
                target="_blank"
                className=" me-4"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              </div>
<div className="link">

              <a href="https://github.com/MarwanMagdy72" target="_blank">
                <i className="fab fa-github"></i>
              </a>
</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bottom-footer mt-4">
        &copy; {new Date().getFullYear()} <b>Marwan Magdy.</b> All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
