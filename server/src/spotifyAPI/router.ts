/*
description: This file contains the router for the Spotify API.

author: @enrique
*/ 

import express, { Request, Response } from 'express';
import { getRecommendations } from './spotify';

const router = express.Router();

router.get('/recommendations', async (req: Request, res: Response) => {
    const { genre, mood} = req.query;

    if (!genre || !mood) {
        return res.status(400).json({ error: 'Missing required query parameters.' });
    }
    //happy: target_valence: 0.8, min_energy: 0.6, target_energy: undefined, min_danceability: 0.7, target_acousticness: 0.4, min_popularity: 50
    if(mood === "happy"){
        try {

            const tracks = await getRecommendations(
                String(genre),
                //targetValence: 0.8
                0.8,
                //minEnergy: 0.6
                0.6,
                //targetEnergy: undefined
                undefined,
                //minDanceability: 0.7
                0.7,
                //targetAcousticness: 0.4
                0.4,
                //minPopularity: 50
                50
            );
            res.json({ tracks });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }






});

export default router;
