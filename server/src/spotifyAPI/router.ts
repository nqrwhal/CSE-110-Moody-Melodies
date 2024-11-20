/*
description: This file contains the router for the Spotify API.

author: @enrique
*/ 

import express, { Request, Response } from 'express';
import { getRecommendations } from './spotify';

const router = express.Router();

router.get('/recommendations', async (req: Request, res: Response) => {
    const { genre, minDanceability, minPopularity } = req.query;

    if (!genre) {
        return res.status(400).json({ error: 'Missing required query parameters.' });
    }

    try {
        const tracks = await getRecommendations(
            String(genre),
            minDanceability ? parseFloat(String(minDanceability)) : undefined,
            minPopularity? parseInt(String(minPopularity), 10) : undefined
        );
        res.json({ tracks });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
