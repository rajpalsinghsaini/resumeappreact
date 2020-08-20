import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div class="container">
        <p className="Text-style">
          ----------------------------------------------------- PROJECTS
          -----------------------------------------------------
        </p>
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>
                TASKIFY <br />
                APPLICATION
              </b>
            </div>
          </div>

          <div class="col-lg-6">
            An application build in Node.js,Express.js and MongoDB. It Stores
            taskes of the user.It has the login and signup functionality.User
            can create,read,update and delete tasks.{" "}
            <a href="https://github.com/">GITHUB</a>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>
                YOUTUBE <br />
                DOWNLOADER
              </b>
            </div>
          </div>

          <div class="col-lg-6">
            A desktop application built using Tkinter.It can download youtube
            video in high or low quality on enterd URL.{" "}
            <a href="https://github.com/">GITHUB</a>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>RNEWS</b>
            </div>
          </div>

          <div class="col-lg-6">
            It is a news app in Java. It fetches data from Newsapi.org. It shows
            news related to technology. <a href="https://github.com/">GITHUB</a>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>COVID-19 HELPER</b>
            </div>
          </div>

          <div class="col-lg-6">
            This is a web application build in React.js. It will show current
            stats and help you in finding help from goverment.{" "}
            <a href="https://github.com/">GITHUB</a>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-4">
            <div class="demo-content">
              <b>PORTFOLIO</b>
            </div>
          </div>

          <div class="col-lg-6">
            This is my personal portfolio site. Built using HTML,CSS,JavaScript
            and Bootstrap4. <a href="https://github.com/">GITHUB</a>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
