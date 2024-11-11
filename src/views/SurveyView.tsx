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
export const SurveyView = () => {
  return (
    <div>
      <div className="surveyQuestionHeader">How are you feeling</div>
      <div className="surveyButtonRow">
        <SurveyButton
          imageSrc="/imgs/sadEmoji.png"
          text="Sad"
          color="#428bb9"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/happyEmoji.png"
          text="Happy"
          color="#d5bf2f"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/stressedEmoji.png"
          text="Stressed"
          color="#d5852f"
        ></SurveyButton>
      </div>
      <div className="surveyButtonRow">
        <SurveyButton
          imageSrc="/imgs/energeticEmoji.png"
          text="Energetic"
          color="#2fce29"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/angryEmoji.png"
          text="Angry"
          color="#bf322a"
        ></SurveyButton>
      </div>
    </div>
  );
};
