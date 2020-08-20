import React, { Component } from "react";
import github from "./images/github.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <p className="Text-style">
          ----------------------------------------------------- CONTACT
          -----------------------------------------------------
        </p>{" "}
        <br />
        <div class="container-contact">
          <div>
            <p>
              <img src={github} alt="Github" />
              <img src={twitter} alt="Twitter" />
              <img src={linkedin} alt="LinkedIn" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
