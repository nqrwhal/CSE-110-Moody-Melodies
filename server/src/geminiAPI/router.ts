

import express, { Request, Response } from 'express';
import { getRecommendations, Playlist, Song } from './gemini';

const router = express.Router();

const validMoods = ['happy', 'sad', 'angry', 'relaxed', 'energetic', "calm", "focused", "confident", "comforted", "motivated"];
/**
 * GET /recommendations
 * Query Parameters:
 * - currentMood: string - The listener's current mood
 * - targetMood: string - The desired mood after the playlist
 * - genres: string[] - Array of genres to include or emulate
 * - instruments: string[] - Array of instruments to feature
 * - length: number - Number of songs in the playlist
 * 
 *
 * Returns:
 * - 200: { Playlist }
 * - 400: { error: string }
 * - 500: { error: string }
 */
router.get('/recommendations', async (req: Request, res: Response) => {
    interface RecommendationsQuery {
        currentMood: string;
        targetMood: string;
        genres?: string[];
        instruments?: string[];
        length?: number;
    }

    const currentMood = req.query.currentMood as string;
    const targetMood = req.query.targetMood as string;
    const genres = req.query.genres as string[];
    const instruments = req.query.instruments as string[];
    const length = req.query.length as string;


    if (
        !currentMood ||
        !targetMood ||
        typeof currentMood !== 'string' ||
        typeof targetMood !== 'string'
    ) {
        return res.status(400).json({ error: 'Invalid mood parameter' });
    }

    if (
        !validMoods.includes(currentMood.toLowerCase()) ||
        !validMoods.includes(targetMood.toLowerCase())
    ) {
        return res.status(400).json({ error: 'Invalid mood value' });
    }

    // Validate 'genres' if present
    if (genres && !Array.isArray(genres)) {
        return res.status(400).json({ error: 'Genres must be an array' });
    }

    // Validate 'instruments' if present
    if (instruments && !Array.isArray(instruments)) {
        return res.status(400).json({ error: 'Instruments must be an array' });
    }




    try {
        const recommendations: Playlist = await getRecommendations(
            currentMood.toLowerCase(),
            targetMood.toLowerCase(),
            genres,
            instruments,
            length
        );        
        res.status(200).json(recommendations);
    } catch (error: any) {
        console.error("Error generating recommendations:", error.message || error);
        res.status(500).json({ error: 'Failed to generate recommendations.' });
    }
});
    
export default router;

