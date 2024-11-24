import React from "react";

interface LanguageButtonProps {
  imageSrc: string;
  text: string;
  color: string;
}

const IconButton: React.FC<LanguageButtonProps> = ({
  imageSrc,
  text,
  color,
}) => {
  return (
    <div className="IconButtonContainer">
      <button style={{ backgroundColor: color }} className="IconButton">
        <img src={imageSrc} alt={text} className="buttonImage" />
      </button>
      <p className="buttonText">{text}</p>
    </div>
  );
};

export default IconButton;