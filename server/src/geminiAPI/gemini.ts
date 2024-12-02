import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';


export interface Song {
    songName: string;
    artistName: string;
    genre: string;
    duration: string; // Format: "MM:SS"
}
export type Playlist = Song[];

const genAI = new GoogleGenerativeAI("AIzaSyD2TzN5WBBVC-TpS-LGu39S-dvQDXAIG98");

const playlistSchema = {
    description: "A playlist consisting of curated songs",
    type: SchemaType.ARRAY,
    items: {
        type: SchemaType.OBJECT,
        properties: {
            songName: {
                type: SchemaType.STRING,
                description: "The name of the song",
                nullable: false,
            },
            artistName: {
                type: SchemaType.STRING,
                description: "The name of the artist",
                nullable: false,
            },
            duration: {
                type: SchemaType.STRING,
                description: "The duration of the song in MM:SS format",
                nullable: false,
            }
        },
        required: ["songName", "artistName", "duration"],
    },
};

/**
 * Generates a playlist based on the provided parameters.
 *
 * @param currentMood - The listener's current mood.
 * @param targetMood - The desired mood after the playlist.
 * @param genres - Array of genres to include or emulate.
 * @param instruments - Array of instruments to feature.
 * @param length - Number of songs in the playlist.
 * @returns A Promise resolving to a Playlist.
 */
export async function getRecommendations(
    currentMood: string,
    targetMood: string,
    genres: string[],
    instruments: string[],
    length: string
): Promise<Playlist> {
        const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash-latest",
        generationConfig: {
            temperature: 1.25,
            responseMimeType: "application/json",
            responseSchema: playlistSchema,
        },
    });

    const prompt = `You are an AI music curator. You are tasked with creating a playlist of ${length} songs that will transition the listener from ${currentMood} to ${targetMood}. The playlist should feature ${instruments.join(', ')} and consist of songs in the following genres or match the general energy of them: ${genres.join(', ')}.
    The songs in your playlists should be real songs by popular artists. Carefully select each song to adhere to the guidelines and the desired mood transition.`;
    
    try{
        const result = await model.generateContent(prompt);
        const jsonString = await result.response.text();
        const playlist = JSON.parse(jsonString);
        console.log(playlist)
        return playlist;
    } catch (error) {
        console.error("Error when generating playlist:", error);
        throw error;
    }
};

getRecommendations("happy", "sad", ["pop", "rock"], ["guitar", "drums"], "5"); // Example usage

