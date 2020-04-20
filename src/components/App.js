import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Deck from "./Deck";
import "./App.css";

import wood from "../images/wood.jpg";

const background = {
  backgroundImage: `url(${wood})`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "repeat-y",
  backgroundPosition: "center 50%",
};

const App = () => {
  return (
    <div className="App" style={background}>
      <Deck></Deck>
    </div>
  );
};

export default App;
