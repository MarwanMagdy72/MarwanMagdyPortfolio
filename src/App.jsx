import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Routes from react-router-dom
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Lottie from "lottie-react";
import arrowAnimation from "../public/animation/arrow-up.json";
import Home from "./pages/Home";
import Skills from "./components/Skills/Skills";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Projects from "./pages/Projects/Projects";
import ContactPage from "./pages/contactPage/ContactPage";
import whatsappIcon from'../public/animation/whatsapp.json'




function App() {
  const [scrollTopButton, setScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setScrollTopButton(true);
      } else {
        setScrollTopButton(false);
      }
    });
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>

      <div className="container app">
    <Router>
        
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
      
          <Route
            path="/projectDetails/:projectId"
            element={<ProjectDetails />}
          />
        </Routes>
        <Footer />

        <div className="fixed-icons    d-flex  flex-column align-items-center justify-content-center   ">
          <div className="whatsapp-icon">

              <a
                href="https://wa.me/1559559573"
                target="_blank"
                rel="noopener noreferrer"
          
              >
                <Lottie animationData={whatsappIcon} />
              </a>
          </div>
          
        <button
          onClick={scrollToTop}
          style={{ display: scrollTopButton ? 'block' : 'none'} }
          className="scroll-to-top-btn "
        >
          <Lottie animationData={arrowAnimation} />
        </button>
            </div>
    </Router>
      </div>
    </>
  );
}

export default App;
