import React, { Component } from "react";

export default class WorkExperience extends Component {
  render() {
    return (
      <div class="container">
        <p className="Text-style">
          ----------------------------------------------------- WORK EXPERIENCE
          -----------------------------------------------------
        </p>
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>May 2020 - Present</b>
            </div>
          </div>

          <div class="col-lg-6">
            <b>Slack Upskilling Community Manager</b>
            <br />
            SKILL SANTA <br />
            Manage Slack channel. Solve doubts os students and Posts quizzes and
            assignment
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>May 2020 - July 2020</b>
            </div>
          </div>

          <div class="col-lg-6">
            <b>Backend Development Intern</b>
            <br />
            GIRLSCRIPT FOUNDATION <br />
            Build Rest APIs for e-learning platform in Node js,Express js and
            MongoDB
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
