import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Resume from "./component/resume";

function App() {
  return (
    <div className="App">
      <br />
      <p className="Text-style">
        <b class="resume_headline">Resume</b>
      </p>
      <p className="Text-style">Rajpal Singh</p>

      <Resume />
    </div>
  );
}

export default App;
