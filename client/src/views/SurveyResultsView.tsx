import React from 'react';
import PlaylistCard from '../components/homepage/PlaylistCard';

const SurveyResultsView: React.FC = () => {
  // Simulated data for the generated playlist
  const generatedPlaylist = {
    id: 1,
    color: '#AEC6CF',
    name: 'Sad Playlist',
    mood: 'Sad',
  };

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

      {/* Use PlaylistCard to display the generated playlist */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <PlaylistCard
          id={generatedPlaylist.id}
          color={generatedPlaylist.color}
          name={generatedPlaylist.name}
          mood={generatedPlaylist.mood}
          onDelete={handleDelete}
          onRename={handleRename}
        />
      </div>

      {/* Return to Home Page Button (Non-Functional) */}
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Return to Home Page
      </button>
    </div>
  );
};

export default SurveyResultsView;
