import React from "react";

interface SurveyButtonProps {
  imageSrc: string;
  text: string;
  color: string;
}

const SurveyButton: React.FC<SurveyButtonProps> = ({
  imageSrc,
  text,
  color,
}) => {
  return (
    <div className="surveyButtonContainer">
      <button style={{ backgroundColor: color }} className="surveyButton">
        <img src={imageSrc} alt={text} className="buttonImage" />
      </button>
      <p className="buttonText">{text}</p>
    </div>
  );
};

export default SurveyButton;
