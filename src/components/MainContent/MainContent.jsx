import React, { useState } from "react";
import "./MainContent.css";
import "./cardBorderAnimation.css";
import { AnimatePresence, motion } from "framer-motion";
import { projectsData } from "../../Data/projectsData";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [currentActiveButton, setCurrentActiveButton] = useState("allProjects");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleClick = (buttonCategory) => {
    const filteredArray = projectsData.filter((item) => {
      return item.projectCategory === buttonCategory;
    });
    setFilteredProjects(filteredArray);
    setCurrentActiveButton(buttonCategory);
  };

  return (
    <>
      <header className="px-5 pt-5">
        <h1 className="section-title">
          <i className="fa-solid fa-code"></i>
          Projects
        </h1>
        <p className="section-subtitle ">
          Explore my projects on{" "}
          <b>
            <a href="https://github.com/MarwanMagdy72" target="_blank">
              Github
            </a>
          </b>
        </p>
      </header>

      <main className="main">
        <div className="main-content row px-3">
          <div className="project-buttons mb-5 col-md-3 gap-4">
            <motion.button
              onClick={() => {
                setCurrentActiveButton("allProjects");
                setFilteredProjects(projectsData);
              }}
              className={
                currentActiveButton === "allProjects" ? "active-btn" : null
              }
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              All Projects
            </motion.button>
            <motion.button
              onClick={() => {
                handleClick("CSS");
              }}
              className={currentActiveButton === "CSS" ? "active-btn" : null}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              HTML,CSS&JS
            </motion.button>
            {/* <motion.button
              onClick={() => {
                handleClick("JavaScript");
              }}
              className={
                currentActiveButton === "JavaScript" ? "active-btn" : null
              }
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              JavaScript
            </motion.button> */}
            <motion.button
              onClick={() => {
                handleClick("ReactJs");
              }}
              className={
                currentActiveButton === "ReactJs" ? "active-btn" : null
              }
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              ReactJs & NextJS
            </motion.button>
          </div>
          <div className="projects   col-md-9 px-4">
            <div className="row row-cols-lg-3 row-cols-md-2">
              <AnimatePresence initial={false}>
                {filteredProjects.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="col-lg-4 col-md-6 col-sm-12 mb-5"
                      initial={{ opacity: 0, y: -50, scale: 0 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <article className="project-card ">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <Link to={`/projectDetails/${item.projectId}`}>
                            <img
                              className=" project-img"
                              src={item.coverImage}
                              alt="ProjectImage"
                            />
                          </Link>
                          <div className="card-body">
                            <h4 className="project-title">
                              {item.projectTitle}
                            </h4>
                            <p className="project-subtitle">
                              {item.projectSubtitle.length > 190
                                ? `${item.projectSubtitle.slice(0, 185)}...`
                                : item.projectSubtitle}
                            </p>

                            <div className="card-links">
                              <div className="project-links">
                                <a
                                  href={item.demoLink}
                                  className="me-2"
                                  target="_blank"
                                >
                                  <i className="fa-solid fa-link"></i>
                                </a>
                                <a href={item.gitHubLink} target="_blank">
                                  {" "}
                                  <i className="fa-brands fa-github"></i>{" "}
                                </a>
                              </div>

                              <Link
                                className="more-link"
                                to={`/projectDetails/${item.projectId}`}
                              >
                                <a href="#">
                                  More
                                  <i className="fa-solid fa-arrow-right-long"></i>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </article>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainContent;
