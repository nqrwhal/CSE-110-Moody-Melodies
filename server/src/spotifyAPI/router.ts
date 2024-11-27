/*
description: This file contains the router for the Spotify API

author: @enrique
*/ 

import express, { Request, Response } from 'express';
import { getRecommendations } from './spotify';


const router = express.Router();

//updated configuration of the spotify API to include more moods and reduce clutter from the getRecommendations function
const moodConfig = {
    happy: {
        genre: "pop",
        targetValence: () => Math.floor(Math.random() * (100 - 80 + 1) + 80) / 100,
        minEnergy: 0.6,
        targetEnergy: undefined,
        minDanceability: 0.7,
        targetDanceability: undefined,
        targetAcousticness: 0.4,
        maxAcousticness: undefined,
        targetTempo: undefined,
        targetLoudness: undefined,
        targetMode: 1.0,
        targetInstrumentalness: undefined,
        targetPopularity: 50,
        limit: 10,
    },
    sad: {
        genre: "sad",
        targetValence: () => Math.floor(Math.random() * (40 - 20 + 1) + 20) / 100,
        minEnergy: undefined,
        targetEnergy: 0.3,
        minDanceability: undefined,
        targetDanceability: undefined,
        targetAcousticness: undefined,
        maxAcousticness: 0.6,
        targetTempo: undefined,
        targetLoudness: undefined,
        targetMode: 0.0,
        targetInstrumentalness: undefined,
        targetPopularity: 50,
        limit: 10,
    },
    angry: {
        genre: "hard-rock",
        targetValence: () => Math.floor(Math.random() * (40 - 10 + 1) + 10) / 100,
        minEnergy: undefined,
        targetEnergy: () => Math.floor(Math.random() * (100 - 70 + 1) + 70) / 100,
        minDanceability: undefined,
        targetDanceability: undefined,
        targetAcousticness: 0.8,
        maxAcousticness: undefined,
        targetTempo: () => Math.floor(Math.random() * (200 - 130 + 1) + 130),
        targetLoudness: () => Math.floor(Math.random() * (-5 - -10 + 1) + -10),
        targetMode: undefined,
        targetInstrumentalness: () => Math.floor(Math.random() * (80 - 50 + 1) + 50) / 100,
        targetPopularity: 50,
        limit: 10,
    },
    energetic: {
        genre: "club",
        targetValence: () => Math.floor(Math.random() * (100 - 60 + 1) + 60) / 100,
        minEnergy: undefined,
        targetEnergy: () => Math.floor(Math.random() * (100 - 80 + 1) + 80) / 100,
        minDanceability: undefined,
        targetDanceability: () => Math.floor(Math.random() * (100 - 70 + 1) + 70) / 100,
        targetAcousticness: undefined,
        maxAcousticness: undefined,
        targetTempo: () => Math.floor(Math.random() * (200 - 130 + 1) + 130),
        targetLoudness: undefined,
        targetMode: 1,
        targetInstrumentalness: undefined,
        targetPopularity: 50,
        limit: 10,
    },
    stressed: {
        genre: "classical",
        targetValence: () => Math.floor(Math.random() * (60 - 40 + 1) + 40) / 100,
        minEnergy: undefined,
        targetEnergy: () => Math.floor(Math.random() * (40 - 20 + 1) + 20) / 100,
        minDanceability: undefined,
        targetDanceability: undefined,
        targetAcousticness: () => Math.floor(Math.random() * (100 - 80 + 1) + 80) / 100,
        maxAcousticness: undefined,
        targetTempo: () => Math.floor(Math.random() * (90 - 60 + 1) + 60),
        targetLoudness: () => Math.floor(Math.random() * (-10 - -20 + 1) + -20),
        targetMode: 1,
        targetInstrumentalness: () => Math.floor(Math.random() * (100 - 80 + 1) + 80) / 100,
        targetPopularity: 50,
        limit: 10,
    },
    calm: {
        genre: "ambient",
        targetValence: () => Math.floor(Math.random() * (60 - 40 + 1) + 40) / 100,
        minEnergy: undefined,
        targetEnergy: () => Math.floor(Math.random() * (30 - 10 + 1) + 10) / 100,
        minDanceability: undefined,
        targetDanceability: undefined,
        targetAcousticness: () => Math.floor(Math.random() * (100 - 80 + 1) + 80) / 100,
        maxAcousticness: undefined,
        targetTempo: () => Math.floor(Math.random() * (90 - 60 + 1) + 60),
        targetLoudness: () => Math.floor(Math.random() * (-10 - -20 + 1) + -20),
        targetMode: 1,
        targetInstrumentalness: () => Math.floor(Math.random() * (100 - 40 + 1) + 40) / 100,
        targetPopularity: 50,
        limit: 10,
    },//focused, confident, comforted, motivated
    focused:{
        genre: "electronic",
        targetValence: () => Math.floor(Math.random() * (60 - 30 + 1) + 30) / 100,
        minEnergy: undefined,
        targetEnergy: () => Math.floor(Math.random() * (50 - 20 + 1) + 20) / 100,
        minDanceability: undefined,
        targetDanceability: () => Math.floor(Math.random() * (100 - 70 + 1) + 70) / 100,
        targetAcousticness: () => Math.floor(Math.random() * (100 - 50 + 1) + 50) / 100,
        maxAcousticness: undefined,
        targetTempo: undefined,
        targetLoudness: Math.floor(Math.random() * (-10 - -20 + 1) + -20),
        targetMode: undefined,
        targetInstrumentalness: () => Math.floor(Math.random() * (100 - 40 + 1) + 40) / 100,
        targetPopularity: 25,
        limit: 10,

    },
    confident:{
        genre: "hip-hop",
        targetValence: () => Math.floor(Math.random() * (100 - 60 + 1) + 60) / 100,
        minEnergy: undefined,
        targetEnergy: () => Math.floor(Math.random() * (100 - 70 + 1) + 70) / 100,
        minDanceability: undefined,
        targetDanceability: () => Math.floor(Math.random() * (100 - 60 + 1) + 60) / 100,
        targetAcousticness: undefined,
        maxAcousticness: undefined,
        targetTempo: undefined,
        targetLoudness: Math.floor(Math.random() * (0 - -10 + 1) + -10),
        targetMode: undefined,
        targetInstrumentalness: undefined,
        targetPopularity: 35,
        limit: 10,

    },
    comforted:{
        genre: "pop",
        targetValence: () => Math.floor(Math.random() * (80 - 50 + 1) + 50) / 100,
        minEnergy: undefined,
        targetEnergy: () => Math.floor(Math.random() * (60 - 30 + 1) + 30) / 100,
        minDanceability: 0.6,
        targetDanceability: undefined,
        targetAcousticness: undefined,
        maxAcousticness: undefined,
        targetTempo: () => Math.floor(Math.random() * (100 - 80 + 1) + 80),
        targetLoudness: undefined,
        targetMode: undefined,
        targetInstrumentalness: Math.floor(Math.random() * (100 - 50 + 1) + 50) / 100,
        targetPopularity: 65,
        limit: 10,
    },
    motivated:{
        genre: "electro",
        targetValence: () => Math.floor(Math.random() * (100 - 60 + 1) + 60) / 100,
        minEnergy: .7,
        targetEnergy: () => Math.floor(Math.random() * (100 - 90 + 1) + 90) / 100,
        minDanceability: 0.6,
        targetDanceability: undefined,
        targetAcousticness: undefined,
        maxAcousticness: undefined,
        targetTempo: () => Math.floor(Math.random() * (200 - 160 + 1) + 160),
        targetLoudness: undefined,
        targetMode: 1,
        targetInstrumentalness: undefined,
        targetPopularity: 50,
        limit: 10,
    },
    
};

router.get('/recommendations', async (req: Request, res: Response) => {
    const {mood} = req.query;
    //genre will be implemented in the future
    //prioritizing simple survey first
    if (!mood) {
        return res.status(400).json({ error: 'Missing required query parameters.' });
    }


    //list of our valid moods, if mood is not included then return error
    const validMoods = ["happy", "sad", "angry", "energetic", "stressed", "calm", "focused", "confident", "comforted", "motivated"];
    if (!validMoods.includes(String(mood))) {
        res.status(400).json({ error: "Invalid mood" });
    }
    

    const config = moodConfig[mood as keyof typeof moodConfig];
    try {
        const tracks = await getRecommendations(
            config.genre,
            typeof config.targetValence === 'function' ? config.targetValence() : config.targetValence,
            config.minEnergy,
            typeof config.targetEnergy === 'function' ? config.targetEnergy() : config.targetEnergy,
            config.minDanceability,
            typeof config.targetDanceability === 'function' ? config.targetDanceability() : config.targetDanceability,
            typeof config.targetAcousticness === 'function' ? config.targetAcousticness() : config.targetAcousticness,
            config.maxAcousticness,
            typeof config.targetTempo === 'function' ? config.targetTempo() : config.targetTempo,
            typeof config.targetLoudness === 'function' ? config.targetLoudness() : config.targetLoudness,
            config.targetMode,
            typeof config.targetInstrumentalness === 'function' ? config.targetInstrumentalness() : config.targetInstrumentalness,
            config.targetPopularity,
            config.limit
        );
        //print out the tracks to the server
        res.json(tracks.map((track) => track.name + " by " + track.artists[0].name ));
        //print out the tracks to the console
        console.log(tracks.map((track) => track.name + " by " + track.artists[0].name ));
        } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
