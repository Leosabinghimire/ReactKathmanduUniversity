import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies quam
          amet himenaeos, ornare tempor elementum? Fringilla rhoncus per egestas
          urna montes viverra viverra cras sollicitudin. Elementum taciti duis
          lacus fringilla semper ultrices class. Netus porta eu euismod.
        </p>
        <p>
          ullamcorper suspendisse. Vel integer pellentesque nam conubia
          curabitur porta habitant praesent. Commodo rutrum dolor id hendrerit
          volutpat nisi. Gravida euismod aliquam blandit sapien dignissim proin;
          aptent dis. Nascetur ornare penatibus magna lectus dolor parturient
          accumsan.
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies quam
          amet himenaeos, ornare tempor elementum? Fringilla rhoncus per egestas
          urna montes viverra viverra cras sollicitudin. Elementum taciti duis
          lacus fringilla semper ultrices class. Netus porta eu euismod.
        </p>
      </div>
    </div>
  );
};

export default About;
