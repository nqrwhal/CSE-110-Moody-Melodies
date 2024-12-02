/**
 * @description: Provides code for survey slider component
 * @author: Angelo Aromin
 */

import React, { useState } from "react";
import ReactSlider from "react-slider";

function SurveySlider() {
  const [value, setValue] = useState(10);

  return (
    <div className="sliderHolder">
      <h1>Songs: {value}</h1>
      <ReactSlider
        value={value}
        onChange={(newValue) => setValue(newValue)}
        min={1}
        max={50}
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
      />
    </div>
  );
}

export default SurveySlider;
