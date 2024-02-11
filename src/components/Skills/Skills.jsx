import React from "react";
import "./Skills.css";
import { mySkills } from "../../Data/mySkills";

const Skills = () => {


  return (
    <div className="skills m-5">
      <h1 className="text-center mb-4 header">Professional Skills</h1>
      <hr className="my-5" />
      <div className="row">
        {mySkills.map((category, index) => (
          <div className="col-md-6 my-2" key={index}>
            <h4 className="subtitle ">{category.title}</h4>
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
