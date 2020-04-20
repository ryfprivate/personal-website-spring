import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Loading></Loading>
      </header>
    </div>
  );
};

export default App;
