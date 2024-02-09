import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../../components/MainContent/projectsData";
import AwesomeSlider from "react-awesome-slider";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const parsedProjectId = parseInt(projectId);
  const project = projectsData.find(
    (item) => item.projectId === parsedProjectId
  );

  if (!project) {
    return <h1 className="text-center">Project not found</h1>;
  }

  return (
    <div className="project-details ">
      <div className="project-images">
        {project.projectImages && project.projectImages.length > 0 ? (
          <AwesomeSlider>
            {project.projectImages.map((image, index) => (
              <div key={index} className="slider-image-wrapper">
                <img src={image} alt={`Project Image ${index}`} />
              </div>
            ))}
          </AwesomeSlider>
        ) : (
          <h1 className="text-center">No images available</h1>
        )}
      </div>
      <div className="about-project  px-5">
        <div className="project-title d-flex  align-items-center mb-4">
          <h1>
            {" "}
            <i className={`${project.projectIcon}  me-3 `} />
            {project.projectTitle}
          </h1>

          <div className="project-links">
            <a href={project.demoLink} className=" ms-3 me-2" target="_blank">
              <i className="fa-solid fa-link"></i>
            </a>
            <a href={project.gitHubLink} target="_blank">
              {" "}
              <i className="fa-brands fa-github"></i>{" "}
            </a>
          </div>
        </div>

        <p>{project.projectSubtitle}</p>
        <p>{project.projectDetails}</p>
        <div className="project-pages mt-5">

          {project.projectPages?
          
          <h3> 📄 Project Pages</h3>:<h3> <i className="fa-solid fa-puzzle-piece"></i> Project Sections</h3>
        }

          {project.projectPages ? (
            <ul className="list-group border-0">
              {project.projectPages?.map((page, pageIndex) => (
                <li
                  className="list-group-item border-0 ms-2 mt-1"
                  key={pageIndex}
                >
                  <b>
                    {" "}
                    {pageIndex + 1}- {page.title}:{" "}
                  </b>{" "}
                  {page.description}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="list-group border-0">
              {project.projectSections?.map((section, pageIndex) => (
                <li
                  className="list-group-item border-0 ms-2 mt-1"
                  key={pageIndex}
                >
                  <b>
                    {" "}
                    {pageIndex + 1}- {section.title}:{" "}
                  </b>{" "}
                  {section.description}
                </li>
              ))}
            </ul>
          )}
        </div>

        {project.keyFeatures && (
          <div className="key-features mt-5">
            <h3> 🔑 Key Features</h3>
            <ul className="list-group border-0">
              {project.keyFeatures?.map((feature, pageIndex) => (
                <li
                  className="list-group-item border-0 ms-2 mt-1"
                  key={pageIndex}
                >
                  <b> 📌 {feature.feature} </b>{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
