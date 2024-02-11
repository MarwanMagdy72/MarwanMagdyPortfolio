import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Lottie from "lottie-react";
import arrowAnimation from "../public/animation/arrow-up.json";
import Home from "./pages/Home";
import Skills from "./components/Skills/Skills";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Projects from "./pages/Projects/Projects";
import ContactPage from "./pages/contactPage/ContactPage";
import whatsappIcon from "../public/animation/whatsapp.json";
import NotFound from "./pages/NotFound/NotFound";
import SplashScreen from "./pages/SplashScreen/SplashScreen";

// Handle scroll to top of page when path changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [scrollTopButton, setScrollTopButton] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2 seconds
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setScrollTopButton(true);
      } else {
        setScrollTopButton(false);
      }
    });
  }, []);

  const scrollToTopBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>

    {showSplash? <SplashScreen/>:
    
      <div className="container app">
        
         
     
          <Router>
            <ScrollToTop />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/projectDetails/:projectId"
                element={<ProjectDetails />}
              />
            </Routes>
            <Footer />

            <div className="fixed-icons d-flex flex-column align-items-center justify-content-center">
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
                onClick={scrollToTopBtn}
                style={{ display: scrollTopButton ? "block" : "none" }}
                className="scroll-to-top-btn"
              >
                <Lottie animationData={arrowAnimation} />
              </button>
            </div>
          </Router>
        
      </div>
    }

    </>
  );
}

export default App;
