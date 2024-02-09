import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import developerAnimation from "/public/animation/developer-animation.json";
const Hero = () => {
  return (
    <section>
      <div className="row hero-section mt-5">
        <div className="col-md-7  hero-info  d-flex flex-column ">
          <img
            src="/profileImage.png"
            className="profile-image "
            alt="Profile-Image"
          />

          <h1 className="w-100 text-start  mt-4 title">
            Front-end Developer Using React.js & Next.js
          </h1>

          <p className="subtitle  text-start">
            I'm Marwan Magdy, a Junior{" "}
            <b>Frontend Developer with expertise in React.js </b> , dedicated to
            crafting responsive and scalable interfaces. My hands-on experience
            and commitment to high-quality code align with your team's goals.
            Excited about the opportunity to discuss how I can contribute to
            your dynamic projects.
          </p>

          <ul className="social-links   d-flex   gap-5">
            <li>
              <a
                href="https://www.linkedin.com/in/marwan-magdy72"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MarwanMagdy72"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/marawan.magdy.58910/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:marawanmagdy389@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-google"></i>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/1559559573"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className=" hero-animation col-md-5  d-flex align-items-center justify-content-center">
          <Lottie animationData={developerAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
