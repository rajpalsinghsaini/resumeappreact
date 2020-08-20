import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div class="container">
        <p className="Text-style">
          ----------------------------------------------------- SKILLS
          -----------------------------------------------------
        </p>
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <p>
                <b>Languages</b>
              </p>
            </div>
          </div>

          <div class="col-lg-4">C,C++,Java,Python,JavaScript</div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <p>
                <b>Database</b>
              </p>
            </div>
          </div>

          <div class="col-lg-4">MySql,MongoDB</div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <p>
                <b>Web Technology</b>
              </p>
            </div>
          </div>

          <div class="col-lg-6">
            HTML,CSS,React.js,Bootstrap4,Node.js,Express.js,Mongoose,MaterialUI
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>Tools</b>
            </div>
          </div>

          <div class="col-lg-8">
            VS Code,Anaconds,IntelliJ Idea,WebStorm,MongoDB
            Compass,MySql,Workbench
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
