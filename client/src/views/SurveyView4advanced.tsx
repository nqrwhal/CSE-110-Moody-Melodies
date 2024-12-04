/**
 * @description view of the login page
 * @author Angelo Aromin
 */


import React, { useState } from "react";
import "./SurveyViewStyle.css";
import SurveySlider from "../components/SurveySlider";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type} - None
 * returns {Type} - None
 */
export const SurveyView4advanced = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentMood, targetMood, genres } = location.state || {};
  const [length, setLength] = useState<number>(10); // Default value

  const handleFinish = () => {
    navigate("/results", { state: { currentMood, targetMood, genres, length } });
  };

  return (
    <div>
      <div className="surveyQuestionHeader">
        How Many Songs Would You Like to Listen To?
      </div>
      <SurveySlider value={length} onChange={setLength} />

      <button
        style={{ padding: '10px 20px', fontSize: '20px' }}
        className="exit"
        onClick={handleFinish}
      >
        Finish
      </button>
    </div>
  );
};
