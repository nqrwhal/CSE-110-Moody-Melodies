import React from 'react';
import './hp.css';
import IconButton from "../IconButton";

const Hp: React.FC = () => {
  var gear = require("../../assets/gear.png");
  var check = require("../../assets/check.png");
  var globe = require("../../assets/globe.png");

  return (
    <div className="container">
      {/* Top Right Icons */}
      <div className="top-right">
        <IconButton imageSrc={globe} text="Language" color="#428bb9" />
        <span>Log Out</span>
      </div>

      {/* Title */}
      <div className="top-center">
        <h1>Moody Melodies</h1>
      </div>

      {/* Centered Survey Message */}
      <div className="centered">
        Take a New Survey!
      </div>

      {/* Survey Buttons */}
      <div className="ButtonRow">
        <IconButton imageSrc={gear} text="Advanced" color="#428bb9" />
        <IconButton imageSrc={check} text="Simple" color="#428bb9" />
      </div>
    </div>
  );
};

export default Hp;
