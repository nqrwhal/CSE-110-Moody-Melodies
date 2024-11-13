/**
 * @description view of the login page
 * @author Angelo Aromin
 */

import React from "react";
import logo from "../logo.svg";
import "./SurveyViewStyle.css";
import SurveyButton from "../components/SurveyButton";

/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type} - None
 * returns {Type} - None
 */
export const SurveyView2 = () => {
  return (
    <div>
      <div className="surveyQuestionHeader">How do you want to feel?</div>
      <div className="surveyButtonRow">
        <SurveyButton
          imageSrc="/imgs/calmEmoji.png"
          text="Calm"
          color="#7fcaff"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/focusedEmoji.png"
          text="Focused"
          color="#ce2929"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/confidentEmoji.png"
          text="Confident"
          color="#29ceb0"
        ></SurveyButton>
      </div>
      <div className="surveyButtonRow">
        <SurveyButton
          imageSrc="/imgs/comfortedEmoji.png"
          text="Comforted"
          color="#ce9d29"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/motivatedEmoji.png"
          text="Motivated"
          color="#d967bb"
        ></SurveyButton>
      </div>
    </div>
  );
};
