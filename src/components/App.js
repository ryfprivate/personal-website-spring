import React from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./Loading";
import Deck from "./Deck";

import Projects from "./pages/Projects";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="App__overlay">
          <Projects></Projects>
          <h1>Put a navbar here</h1>
          <Deck></Deck>
        </div>
      </div>
    </>
  );
};

export default App;
