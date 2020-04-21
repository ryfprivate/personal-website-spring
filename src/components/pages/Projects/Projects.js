import React from "react";
import Deck from "../../Deck";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="wrapper__page--projects">
      <div className="overlay__page--projects">
        <Deck></Deck>
      </div>
    </div>
  );
};

export default Projects;
