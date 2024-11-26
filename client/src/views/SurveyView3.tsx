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
export const SurveyView3 = () => {
  const handleClick = (emotion: string) => {
    sendToServer("/SpotifyApi/recommendations", { emotion }).catch((error) =>
      console.error("Error:", error)
    );
  };
  return (
    <div>
      <div className="surveyQuestionHeader">Select your preferred genre(s)</div>
      <div className="surveyButtonRow surveyButtonRow3">
        <SurveyButton
          imageSrc="/imgs/jazzEmoji.png"
          text="Jazz"
          color="#428bb9"
          onClick={() => handleClick("jazz")}
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/classicalEmoji.png"
          text="Classical"
          color="#d5bf2f"
          onClick={() => handleClick("classical")}
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/rockEmoji.png"
          text="Rock"
          color="#d5852f"
          onClick={() => handleClick("rock")}
        ></SurveyButton>
      </div>
      <div className="surveyButtonRow surveyButtonRow3">
        <SurveyButton
          imageSrc="/imgs/hiphopEmoji.png"
          text="Hip-hop"
          color="#2fce29"
          onClick={() => handleClick("hiphop")}
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/electronicEmoji.png"
          text="Electronic"
          color="#bf322a"
          onClick={() => handleClick("electronic")}
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/popEmoji.png"
          text="Pop"
          color="#b942a1"
          onClick={() => handleClick("pop")}
        ></SurveyButton>
      </div>
      <div className="surveyButtonRow surveyButtonRow3">
        <SurveyButton
          imageSrc="/imgs/folkEmoji.png"
          text="Folk"
          color="#2a99bf"
          onClick={() => handleClick("folk")}
        ></SurveyButton>
        <SurveyButton
          imageSrc="/imgs/worldmusicEmoji.png"
          text="World Music"
          color="#716aff"
          onClick={() => handleClick("worldmusic")}
        ></SurveyButton>
      </div>
    </div>
  );
};
