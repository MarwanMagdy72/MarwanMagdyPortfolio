import React, { useState, useEffect, useRef } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("dark");
  const modalRef = useRef();

  useEffect(() => {
    const currentTheme = localStorage.getItem("currentTheme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    // Function to handle click outside of modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    // Add event listener when the modal is shown
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className= "  nav-header  d-flex align-items-center justify-content-evenly  ">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="mt-4 menu-icon"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav className="gap-4 mt-5">
        <ul className="d-flex gap-5 py-3 px-5 rounded-5 nav-links">
          <li>
            <NavLink to={"/"} >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={"/skills"} >
              Skills
            </NavLink>
          </li>
       
          <li>
            <a
              href="https://drive.google.com/file/d/1pc_xmXIxgMbo3qaRGqKV0gZPhx0zIK50/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              CV
            </a>{" "}
          </li>
          <li>
            <NavLink to="/contact" >
              Contact
            </NavLink>{" "}
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          localStorage.setItem("currentTheme", newTheme);
          setTheme(newTheme);
        }}
        className="mt-4 theme-icon"
      >
        {theme === "dark" ? (
          <i className="fa-regular fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun light-mood-icon"></i>
        )}
      </button>

      {showModal && (
        <div className="pop-up" ref={modalRef}>
          <ul className="pop-up-content rounded-5 mx-auto mt-5 py-4 px-5">
            <div className="close-pop-up text-end" onClick={closeModal}>
              {" "}
              <i className="fa-solid fa-xmark close-icon"></i>{" "}
            </div>
            <li>
              <NavLink to={"/"} onClick={closeModal}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeModal}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to={"/skills"} onClick={closeModal}>
                Skills
              </NavLink>
            </li>
           
            <li>
              <a
                href="https://drive.google.com/file/d/1BpAVid2KM3W1csqePZD-Ml0Jistfn7XP/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
              >
                CV
              </a>{" "}
            </li>
            <li>
              <NavLink to="/contact" onClick={closeModal}>
                Contact
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
