/**
 * @description view of the login page
 * @author Angelo Aromin
 */

import React, { useState } from "react";
import "./SurveyViewStyle.css";
import SurveyButton from "../components/SurveyButton";
import { useNavigate, useLocation } from "react-router-dom";
/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type} - None
 * returns {Type} - None
 */
export const SurveyView3advanced = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { currentMood, targetMood } = location.state || {};
  const [genres, setGenres] = useState<string[]>([]);

  const handleClick = (genre: string) => {
    setGenres([...genres, genre]);
    navigate("/advanced-survey-number", { state: { currentMood, targetMood, genres: [...genres, genre] } });
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
        />
        <SurveyButton
          imageSrc="/imgs/classicalEmoji.png"
          text="Classical"
          color="#d5bf2f"
          onClick={() => handleClick("classical")}
        />
        <SurveyButton
          imageSrc="/imgs/rockEmoji.png"
          text="Rock"
          color="#d5852f"
          onClick={() => handleClick("rock")}
        />
        <SurveyButton
          imageSrc="/imgs/hiphopEmoji.png"
          text="Hip-hop"
          color="#2fce29"
          onClick={() => handleClick("hiphop")}
        />
        <SurveyButton
          imageSrc="/imgs/popEmoji.png"
          text="Pop"
          color="#b942a1"
          onClick={() => handleClick("pop")}
        />
        <SurveyButton
          imageSrc="/imgs/folkEmoji.png"
          text="Folk"
          color="#2a99bf"
          onClick={() => handleClick("folk")}
        />
        <SurveyButton
          imageSrc="/imgs/worldmusicEmoji.png"
          text="World Music"
          color="#716aff"
          onClick={() => handleClick("worldmusic")}
        />
        <SurveyButton
          imageSrc="/imgs/electronicEmoji.png"
          text="Electronic"
          color="#bf322a"
          onClick={() => handleClick("electronic")}
        />
      </div>
    </div>
  );
};

