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
export const SurveyView1 = () => {
  const handleClick = (emotion: string) => {
    sendToServer("/SpotifyApi/recommendations", { emotion }).catch((error) =>
      console.error("Error:", error)
    );
  };
  return (
    <div>
      <div className="surveyQuestionHeader">How are you feeling</div>
      <div className="surveyButtonRow">
        <SurveyButton
          imageSrc="/imgs/sadEmoji.png"
          text="Sad"
          color="#428bb9"
          onClick={() => handleClick("sad")}
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/happyEmoji.png"
          text="Happy"
          color="#d5bf2f"
          onClick={() => handleClick("happy")}
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/stressedEmoji.png"
          text="Stressed"
          color="#d5852f"
          onClick={() => handleClick("stressed")}
        ></SurveyButton>
      </div>
      <div className="surveyButtonRow">
        <SurveyButton
          imageSrc="/imgs/energeticEmoji.png"
          text="Energetic"
          color="#2fce29"
          onClick={() => handleClick("energetic")}
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/angryEmoji.png"
          text="Angry"
          color="#bf322a"
          onClick={() => handleClick("angry")}
        ></SurveyButton>
      </div>
    </div>
  );
};
