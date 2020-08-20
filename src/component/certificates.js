import React, { Component } from "react";

export default class Certificates extends Component {
  render() {
    return (
      <div class="container">
        <p className="Text-style">
          ----------------------------------------------------- CERTIFICATES
          -----------------------------------------------------
        </p>
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>COURSERA</b>
            </div>
          </div>

          <div class="col-lg-4">
            Server-side Development with Node.js,Express and MongoDB. <br />
            <a href="https://github.com/">LINK</a> <br /> <br />
            Divide and Conquer, Sorting and Searching and Randomized Algortihms.{" "}
            <br />
            <a href="https://github.com/">LINK</a> <br />
            <br />
            Machine Learning. <br />
            <a href="https://github.com/">LINK</a> <br />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>UDEMY</b>
            </div>
          </div>

          <div class="col-lg-6">
            The Complete Node.js Developer Course(3rd Edition). <br />
            <a href="https://github.com/">LINK</a> <br /> <br />
            JavaScript Bootcamp. Build Real World Applications. <br />
            <a href="https://github.com/">LINK</a> <br />
          </div>
        </div>
        <br /> <br /> <br />
      </div>
    );
  }
}
