/**
 * @description: 
 * @author: 
 */

import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import PlaylistCard from '../components/homepage/PlaylistCard';
import { Link } from "react-router-dom";
import PageLoading from '../components/PageLoading';

interface Song {
  songName: string;
  artistName: string;
  genre: string;
  duration: string; // Format: "MM:SS"
}
type Playlist = Song[];


/**
 * Description: a view of the login page, only contains html elements,
 * components should be wrapped inside
 *
 * param {Type}: None
 * returns {Type}: None
 */
const SurveyResultsView: React.FC = () => {

  const location = useLocation();
  const { currentMood, targetMood, genres, length } = location.state || {};

  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    const fetchPlaylist = async () => {
      try {

        const buildQuery = () => {
          const params = new URLSearchParams();
          if (currentMood) params.append('currentMood', currentMood);
          if (targetMood) params.append('targetMood', targetMood);
          if (genres && genres.length > 0) params.append('genres[]', genres.join(','));
          if (length) params.append('length', length.toString());
          return params.toString();
        };
        
        const response = await fetch(`http://localhost:5000/api/gemini/recommendations?${buildQuery()}`);

        if (!response.ok) {
          throw new Error('Failed to fetch playlist');
        }
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchPlaylist();
  }, [currentMood, targetMood, genres, length]);

  // Dummy handlers for onDelete and onRename 
  const handleDelete = (id: number) => {
    console.log(`Deleted playlist with id: ${id}`);
  };

  const handleRename = (id: number, newName: string) => {
    console.log(`Renamed playlist with id: ${id} to ${newName}`);
  };

  return (
    <div style={{ backgroundColor: '#6495ED', height: '100vh', padding: '20px', textAlign: 'center' }}>
      {/* Title Section */}
      <h1 style={{ color: 'black', marginBottom: '20px' }}>
        We have generated a playlist that matches your mood:
      </h1>

      {/* Display error message if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the generated playlist */}
      {playlist ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          {playlist.map((track, index) => (
            <PlaylistCard
              key={index}
              id={index}
              color="#AEC6CF" // Example color, you can customize this
              name={track.songName}
              mood={track.genre}
              onDelete={handleDelete}
              onRename={handleRename}
            />
          ))}
        </div>
      ) : (
          <PageLoading />
      )}

      {/* Return to Home Page Button */}
      <Link to="/home">
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Return to Home Page
        </button>
      </Link>
    </div>
  );
};

export default SurveyResultsView;
