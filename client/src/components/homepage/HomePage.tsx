import './HomePage.css';
import HomeButton from "../HomeButton";
import LanguageButton from "../LanguageButton";
import PlaylistCard from "./PlaylistCard";
import { Link } from "react-router-dom";

const Hp = () => {
    var corner = require("../../assets/corner icons.png");
    var gear = require("../../assets/gear.png");
    var check = require("../../assets/check.png");
    var globe = require("../../assets/globe.png");

    const playlists = [
        { id: 1, color: "#FF6961", name: "Chill Vibes", mood: "Relaxed" },
        { id: 2, color: "#77DD77", name: "Workout Mix", mood: "Energetic" },
        { id: 3, color: "#FFD700", name: "Focus Flow", mood: "Focused" },
      ];

    return(
        <body>
            <div className="container">
                <div className="bg">
                    <img id="corner" src={corner} width="100%" height="100%"></img>
                </div>

                {/* Top Right Icons */}
                <div className="top-right">
                     
                        <LanguageButton
                            imageSrc={globe}
                            text="Language"
                            color="#428bb9"
                        ></LanguageButton>

                        Log Out
                </div>

                {/* Title */}
                <div className="top-center">
                    <h1>Moody Melodies</h1>
                </div>

                {/* Playlist section*/}
                <div className="centered">
                    <div
                    className="playlist-section"
                    style={{ marginTop: "1px", textAlign: "center" }}
                >
                    <h2>Saved Playlists:</h2>
                    <div
                        style={{
                        display: "flex",
                        gap: "20px",
                        justifyContent: "center",
                        marginTop: "1px",
                        marginBottom: "60px",
                        }}
                    >
                        {playlists.map((playlist) => (
                            <PlaylistCard
                                key={playlist.id}
                                color={playlist.color}
                                name={playlist.name}
                                mood={playlist.mood}
                            />
                        ))}
                    </div>

                    Take a Survey to Save a New Playlist!
                </div>

                </div>
                
                {/* Centered Survey Buttons */}
                <div className="ButtonRow">
                    <Link to="/survey">
                        <HomeButton
                            imageSrc={gear}
                            text="Advanced"
                            color="#428bb9"
                        ></HomeButton>
                    </Link>

                    <Link to="/survey">
                        <HomeButton
                            imageSrc={check}
                            text="Simple"
                            color="#428bb9"
                        ></HomeButton>
                    </Link>
                        
                </div>
                
            </div>
        </body>
    );
};

export default Hp;