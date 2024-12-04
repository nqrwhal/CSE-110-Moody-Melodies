
import React from "react";
import ReactSlider from "react-slider";

interface SurveySliderProps {
  value: number;
  onChange: (value: number) => void;
}

const SurveySlider: React.FC<SurveySliderProps> = ({ value, onChange }) => {
  return (
    <div className="sliderHolder">
      <h1>Songs: {value}</h1>
      <ReactSlider
        value={value}
        onChange={onChange}
        min={1}
        max={50}
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
      />
    </div>
  );
};

export default SurveySlider;