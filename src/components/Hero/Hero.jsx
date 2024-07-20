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
            src="/profileImage2.png"
            className="profile-image "
            alt="Profile-Image"
          />

          <h1 className="w-100 text-start  mt-4 title">
            Frontend Developer <br /> Using React.js & Next.js
          </h1>

          <p className="subtitle  text-start">
          I'm Marwan Magdy, <strong>a Junior Frontend Developer specializing in React.js.</strong> I leverage my expertise to craft interfaces that are not only responsive but also scalable. With a steadfast commitment to delivering high-quality code, I seamlessly align with your team's goals, poised to contribute to dynamic projects.          </p>

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
                <i className="fas fa-envelope "></i>
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
