import React from "react";
import "./Skills.css";

const Skills = () => {
  const mySkills = [
    {
      title: "Technical Skills",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Firebase",
        "React Router",
        "Redux & Redux Toolkit",
        "Context API",
        "API Integration",
        "Regular Expression",
        "Styled Components",
        "CSS Modules",
        "Material-UI",
        "Tailwind css",
        "Bootstrap",
        "SCSS",
        "Git & GitHub",
        "Webpack",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Communication",
        "Teamwork",
        "Problem-solving",
        "Time Management",
        "Search Skill",
        "Proficient in dealing with ChatGPT",
        "Adaptability",
        "Creativity",
        "Attention to Detail",
        "Critical Thinking",
        "Leadership",
        "Flexibility",
        "Organization",
        "Conflict Resolution",
        "Decision Making",
        "Problem Analysis",
      ],
    },
  ];

  return (
    <div className="skills m-5">
      <h1 className="text-center mb-4 header">Professional Skills</h1>
      <hr className="my-5" />
      <div className="row">
        {mySkills.map((category, index) => (
          <div className="col-md-6" key={index}>
            <h4 className="subtitle">{category.title}</h4>
            <ul className="list-group">
              {category.skills.map((skill, skillIndex) => (
                <li className="list-group-item" key={skillIndex}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default Skills;
