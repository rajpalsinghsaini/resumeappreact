import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div class="container">
        <p className="Text-style">
          ----------------------------------------------------- EDUCATION
          -----------------------------------------------------
        </p>
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>2018-2020</b>
            </div>
          </div>

          <div class="col-lg-6">
            <b>SHARDA UNIVERSITY,Greater Noida,India</b>
            <br />
            B-Tech,Computer Science & Engineering <br />
            GPA: 9.583
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>2015-2018</b>
            </div>
          </div>

          <div class="col-lg-6">
            <b>G.P.G. COLLEGE,Bihar,India</b>
            <br />
            Intermediate <br />
            Percentage: 64.8
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>2015</b>
            </div>
          </div>

          <div class="col-lg-6">
            <b>D.V.A PUBLIC SCHOOL,Bihar,India</b>
            <br />
            High School <br />
            CGPA: 8.8
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
