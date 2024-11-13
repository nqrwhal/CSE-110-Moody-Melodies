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
export const SurveyView3 = () => {
  return (
    <div>
      <div className="surveyQuestionHeader">Select your preferred genre(s)</div>
      <div className="surveyButtonRow surveyButtonRow3">
        <SurveyButton
          imageSrc="/imgs/jazzEmoji.png"
          text="Jazz"
          color="#428bb9"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/classicalEmoji.png"
          text="Classical"
          color="#d5bf2f"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/rockEmoji.png"
          text="Rock"
          color="#d5852f"
        ></SurveyButton>
      </div>
      <div className="surveyButtonRow surveyButtonRow3">
        <SurveyButton
          imageSrc="/imgs/hiphopEmoji.png"
          text="Hip-hop"
          color="#2fce29"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/electronicEmoji.png"
          text="Electronic"
          color="#bf322a"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/popEmoji.png"
          text="Pop"
          color="#b942a1"
        ></SurveyButton>
      </div>
      <div className="surveyButtonRow surveyButtonRow3">
        <SurveyButton
          imageSrc="/imgs/folkEmoji.png"
          text="Folk"
          color="#2a99bf"
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/worldmusicEmoji.png"
          text="World Music"
          color="#716aff"
        ></SurveyButton>
      </div>
    </div>
  );
};
