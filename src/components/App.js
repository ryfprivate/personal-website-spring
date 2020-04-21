import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </>
  );
};

export default App;
