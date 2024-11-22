/*
description: This file contains the router for the Spotify API

author: @enrique
*/ 

import express, { Request, Response } from 'express';
import { getRecommendations } from './spotify';


const router = express.Router();

//several if statements to give a unique set of parameters per each mood
router.get('/recommendations', async (req: Request, res: Response) => {
    const {mood} = req.query;
    //genre will be implemented in the future
    //prioritizing simple survey first
    if (!mood) {
        return res.status(400).json({ error: 'Missing required query parameters.' });
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
                "pop",
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
                "sad",
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
                "rock",
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
                "club",
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
                "classical",
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
