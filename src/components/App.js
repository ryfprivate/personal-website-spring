import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loading loaded={loaded}></Loading>
      </header>
    </div>
  );
}

export default App;
