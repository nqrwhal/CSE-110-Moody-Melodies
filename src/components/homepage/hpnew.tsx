import './hpnew.css';
import IconButton from "../IconButton";

const Hpnew = () => {
    var corner = require("../../assets/corner icons.png");
    var gear = require("../../assets/gear_2699-fe0f 1.png");
    var check = require("../../assets/check-mark_2714-fe0f 1.png");
    var globe = require("../../assets/globe-showing-americas_1f30e 1 (1).png");

    return(
        <body>
            <div className="container">
                <div className="bg">
                    <img id="corner" src={corner} width="100%" height="100%"></img>
                </div>
                <div className="top-right">
                     
                        <IconButton
                            imageSrc={globe}
                            text="Language"
                            color="#428bb9"
                        ></IconButton>

                        Log Out
                </div>
                <div className="top-center">
                    <h1>Moody Melodies</h1>
                </div>
                <div className="centered">
                    No Playlists Saved. Take a Survey and Make One Now!
                </div>
                <div className="ButtonRow">
 
                        <IconButton
                            imageSrc={gear}
                            text="Advanced"
                            color="#428bb9"
                        ></IconButton>

                        <IconButton
                            imageSrc={check}
                            text="Simple"
                            color="#428bb9"
                        ></IconButton>
                </div>
            </div>
        </body>
    );
};

export default Hpnew;