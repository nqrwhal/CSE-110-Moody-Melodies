/**
 * @description: Provides code for home button component
 * @author: Yves Mojica and Yuliana Chavez
 */

import React from "react";

interface HomeButtonProps {
  imageSrc: string;
  text: string;
  color: string;
}

const IconButton: React.FC<HomeButtonProps> = ({ imageSrc, text, color }) => {
  return (
    <div className="IconButtonContainer">
      <button style={{ backgroundColor: color }} className="IconButton">
        <img src={imageSrc} alt={text} className="buttonImage" />
      </button>
      <p className="buttonText" style={{ color: "black" }}>
        {text}
      </p>
    </div>
  );
};

export default IconButton;
