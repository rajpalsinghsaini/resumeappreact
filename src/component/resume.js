import React, { Component } from "react";
import Skills from "./skills";
import WorkExperience from "./workexperience";
import Education from "./education";
import Projects from "./projects";
import Certificates from "./certificates";
import Contact from "./contact";
import CandidatePhoto from "./candidatephoto";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <CandidatePhoto />
        <Skills />
        <WorkExperience />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    );
  }
}
