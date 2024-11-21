/*
description: This file contains the router for the Spotify API

author: @enrique
*/ 

import express, { Request, Response } from 'express';
import { getRecommendations } from './spotify';


const router = express.Router();

//several if statements to give a unique set of parameters per each mood
router.get('/recommendations', async (req: Request, res: Response) => {
    const { genre, mood} = req.query;

    if (!genre || !mood) {
        return res.status(400).json({ error: 'Missing required query parameters.' });
    }
    //list of valid genres, if genre is not found then return error
    const validGenres = ["acoustic", "afrobeat", "alt-rock", "alternative", "ambient", "anime", "black-metal",
    "bluegrass",
    "blues",
    "bossanova",
    "brazil",
    "breakbeat",
    "british",
    "cantopop",
    "chicago-house",
    "children",
    "chill",
    "classical",
    "club",
    "comedy",
    "country",
    "dance",
    "dancehall",
    "death-metal",
    "deep-house",
    "detroit-techno",
    "disco",
    "disney",
    "drum-and-bass",
    "dub",
    "dubstep",
    "edm",
    "electro",
    "electronic",
    "emo",
    "folk",
    "forro",
    "french",
    "funk",
    "garage",
    "german",
    "gospel",
    "goth",
    "grindcore",
    "groove",
    "grunge",
    "guitar",
    "happy",
    "hard-rock",
    "hardcore",
    "hardstyle",
    "heavy-metal",
    "hip-hop",
    "holidays",
    "honky-tonk",
    "house",
    "idm",
    "indian",
    "indie",
    "indie-pop",
    "industrial",
    "iranian",
    "j-dance",
    "j-idol",
    "j-pop",
    "j-rock",
    "jazz",
    "k-pop",
    "kids",
    "latin",
    "latino",
    "malay",
    "mandopop",
    "metal",
    "metal-misc",
    "metalcore",
    "minimal-techno",
    "movies",
    "mpb",
    "new-age",
    "new-release",
    "opera",
    "pagode",
    "party",
    "philippines-opm",
    "piano",
    "pop",
    "pop-film",
    "post-dubstep",
    "power-pop",
    "progressive-house",
    "psych-rock",
    "punk",
    "punk-rock",
    "r-n-b",
    "rainy-day",
    "reggae",
    "reggaeton",
    "road-trip",
    "rock",
    "rock-n-roll",
    "rockabilly",
    "romance",
    "sad",
    "salsa",
    "samba",
    "sertanejo",
    "show-tunes",
    "singer-songwriter",
    "ska",
    "sleep",
    "songwriter",
    "soul",
    "soundtracks",
    "spanish",
    "study",
    "summer",
    "swedish",
    "synth-pop",
    "tango",
    "techno",
    "trance",
    "trip-hop",
    "turkish",
    "work-out",
    "world-music"];
    if(!validGenres.includes(String(genre))){
        res.status(400).json({ error: "Invalid genre "});
    }
    //list of our valid moods, if mood is not included then return error
    const validMoods = ["happy", "sad", "angry", "energetic", "stressed"];
    if (!validMoods.includes(String(mood))) {
        res.status(400).json({ error: "Invalid mood" });
    }
    

    //happy: target_valence: 0.8, min_energy: 0.6, target_energy: undefined, min_danceability: 0.7, target_acousticness: 0.4, min_popularity: 50
    if(mood === "happy"){
        try {

            const tracks = await getRecommendations(
                String(genre),
                //targetValence: 0.8-1.0
                Math.floor(Math.random() * (100-80+1)+80)/100,
                //minEnergy: 0.6
                0.6,
                //targetEnergy: undefined
                undefined,
                //minDanceability: 0.7
                0.7,
                //targetDanceability: undefined
                undefined,
                //targetAcousticness: 0.4
                0.4,
                //maxAcousticness: undefined
                undefined,
                //targetTempo: undefined
                undefined,
                //targetPopularity: 50
                50
            );
            res.json({ tracks });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    if(mood === "sad"){
        try{
            const tracks = await getRecommendations(
                String(genre),
                //targetValence: 0.2-0.4
                Math.floor(Math.random() * (40-20+1) + 20) / 100,
                //minEnergy: undefined
                undefined,
                //targetEnergy: 0.3
                0.3,
                //minDanceability; undefined
                undefined,
                //targetDanceability: undefined
                undefined,
                //targetAcousticness: undefined
                undefined,
                //maxAcousticness: 0.6
                0.6,
                //targetTempo:
                undefined,
                //targetPopularity: 50
                50
            );
            res.json({ tracks });
        } catch(error: any){
            res.status(500).json({ error: error.message});
        }
    }

    if(mood === "angry"){
        try{
            const tracks = await getRecommendations(
                String(genre),
                //targetValence: 0.1-0.4
                Math.floor(Math.random() * (40-10+1)+10)/100,
                //minEnergy: undefined
                undefined,
                //targetEnergy: 0.7-1.0
                Math.floor(Math.random()*(100-70+1)+70)/100,
                //minDanceability: undefined
                undefined,
                //targetDanceability: undefined
                undefined,
                //targetAcousticness: 0.8
                0.8,
                //maxAcousticness: undefined
                undefined,
                //targetTempo: 130-200
                Math.floor(Math.random()*(200-130+1)+130),
                //targetPopularity: 50
                50
            );
            res.json({ tracks });
        } catch(error:any){
            res.status(500).json({error: error.message});
        }
    }

    if(mood === "energetic"){
        try{
            const tracks = await getRecommendations(
                String(genre),
                //targetValence: 0.6-1.0
                Math.floor(Math.random() * (100-60+1)+60)/100,
                //minEnergy: undefined
                undefined,
                //targetEnergy: 0.8-1.0
                Math.floor(Math.random()*(100-80+1)+80)/100,
                //minDanceability: undefined
                undefined,
                //targetDanceability: 0.7-1.0
                Math.floor(Math.random()*(100-70+1)+70)/100,
                //targetAcousticness: undefined
                undefined,
                //maxAcousticness: undefined
                undefined,
                //targetTempo: 130-200
                Math.floor(Math.random()*(200-130+1)+130),
                //targetPopularity: 50
                50
            );
            res.json({ tracks });
        } catch(error:any){
            res.status(500).json({error: error.message});
        }
    }


    if(mood === "stressed"){
        try{
            const tracks = await getRecommendations(
                String(genre),
                //targetValence: 0.4-0.6
                Math.floor(Math.random() * (60-40+1)+40)/100,
                //minEnergy: undefined
                undefined,
                //targetEnergy: 0.2-0.4
                Math.floor(Math.random()*(100-80+1)+80)/100,
                //minDanceability: undefined
                undefined,
                //targetDanceability: undefined
                undefined,
                //targetAcousticness: 0.8-1.0
                Math.floor(Math.random()*(100-80+1)+80)/100,
                //maxAcousticness: undefined
                undefined,
                //targetTempo: 60-90
                Math.floor(Math.random()*(90-60+1)+60),
                //targetPopularity: 50
                50
            );
            res.json({ tracks });
        } catch(error:any){
            res.status(500).json({error: error.message});
        }
    }
    
    
    

});

export default router;
