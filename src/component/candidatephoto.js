import React, { Component } from "react";
import mickey from "./images/avatar2.png";
import github from "./images/github.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";

export default class CandidatePhoto extends Component {
  render() {
    return (
      <div class="photo-position">
        <div>
          <img class="image-size" src={mickey} alt="photo" />
        </div>
        <b class="photo-text">RAJPAL SINGH</b>
        <a class="photo-text">Student, Developer</a>

        <div class="photo-linkback">
          <div>
            <img class="link-size" src={github} alt="Github" />
            <img class="link-size" src={twitter} alt="Twitter" />
            <img class="link-size" src={linkedin} alt="LinkedIn" />
          </div>
        </div>
      </div>
    );
  }
}
