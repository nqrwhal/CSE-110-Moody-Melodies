/**
 * @description view of the login page
 * @author Angelo Aromin
 */

import React from "react";
import logo from "../logo.svg";
import "./SurveyViewStyle.css";
import SurveyButton from "../components/SurveyButton";
import { sendToServer } from "../utils/api";

/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type} - None
 * returns {Type} - None
 */
export const SurveyView2 = () => {
  const handleClick = (emotion: string) => {
    sendToServer("/api/recommendations", { emotion }).catch((error) =>
      console.error("Error:", error)
    );
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
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/focusedEmoji.png"
          text="Focused"
          color="#ce2929"
          onClick={() => handleClick("focused")}
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/confidentEmoji.png"
          text="Confident"
          color="#29ceb0"
          onClick={() => handleClick("confident")}
        ></SurveyButton>
      </div>
      <div className="surveyButtonRow">
        <SurveyButton
          imageSrc="/imgs/comfortedEmoji.png"
          text="Comforted"
          color="#ce9d29"
          onClick={() => handleClick("comforted")}
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/motivatedEmoji.png"
          text="Motivated"
          color="#d967bb"
          onClick={() => handleClick("motivated")}
        ></SurveyButton>
      </div>
    </div>
  );
};
