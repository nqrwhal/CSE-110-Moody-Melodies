/*
description: this file contains the functions 
to fetch the access token and get the recommendations from the Spotify API

author: @enrique

CHAT-GPT assisted
*/ 

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();



let accessToken: string | null = null;

interface Track {
    id: string;
    name: string;
    artists: { name: string }[];
    album: { name: string; images: { url: string }[] };
    external_urls: { spotify: string };
}

export async function fetchAccessToken(): Promise<string> {
    try {
        console.log(process.env.SPOTIFY_CLIENT_ID);
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({ grant_type: 'client_credentials' }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${Buffer.from(
                        `${'83838f0d51524cec9ef8a3d89b054a23'}:${'9eb029f92dcb416a9e2a56a803d6798b'}`
                    ).toString('base64')}`,
                },
            }
        );
        accessToken = response.data.access_token;
        return accessToken as string;
    } catch (error: any) {
        console.error('Error fetching access token:', error.response?.data || error.message);
        throw new Error('Failed to authenticate with Spotify API.');
    }
}

export async function getRecommendations(
    genre: string,
    minDanceability?: number,
    minPopularity?: number
): Promise<Track[]> {
    if (!accessToken) {
        await fetchAccessToken();
    }

    try {
        const response = await axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                seed_genres: genre,
                min_danceability: minDanceability,
                min_popularity: minPopularity,
            },
        });
        return response.data.tracks as Track[];
    } catch (error: any) {
        console.error('Error fetching recommendations:', error.response?.data || error.message);
        throw new Error('Failed to fetch recommendations.');
    }
}
