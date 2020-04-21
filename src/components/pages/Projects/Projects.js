import React from "react";
import Deck from "../../Deck";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects__wrapper">
      <div className="projects__overlay">
        <Deck></Deck>
      </div>
    </div>
  );
};

export default Projects;
