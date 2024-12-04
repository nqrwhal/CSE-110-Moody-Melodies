// client/src/views/SurveyView2advanced.tsx

import React, { useState } from "react";
import "./SurveyViewStyle.css";
import SurveyButton from "../components/SurveyButton";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Description: a view of the advanced survey page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type} - None
 * returns {Type} - None
 */
export const SurveyView2advanced = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentMood } = location.state || {};
  const [targetMood, setTargetMood] = useState<string>("relaxed"); // Default value

  const handleClick = (emotion: string) => {
    setTargetMood(emotion);
    navigate("/advanced-survey-genres", { state: { currentMood, targetMood: emotion } });
  };

  return (
    <div>
      <div className="surveyQuestionHeader">How do you want to feel?</div>
      <div className="surveyButtonRow">
        <SurveyButton
          imageSrc="/imgs/calmEmoji.png"
          text="Calm"
          color="#7fcaff"
          onClick={() => handleClick("calm")}
        />
        <SurveyButton
          imageSrc="/imgs/focusedEmoji.png"
          text="Focused"
          color="#ce2929"
          onClick={() => handleClick("focused")}
        />
        <SurveyButton
          imageSrc="/imgs/confidentEmoji.png"
          text="Confident"
          color="#29ceb0"
          onClick={() => handleClick("confident")}
        />
        <SurveyButton
          imageSrc="/imgs/comfortedEmoji.png"
          text="Comforted"
          color="#ce9d29"
          onClick={() => handleClick("comforted")}
        />
        <SurveyButton
          imageSrc="/imgs/motivatedEmoji.png"
          text="Motivated"
          color="#d967bb"
          onClick={() => handleClick("motivated")}
        />
      </div>
    </div>
  );
};