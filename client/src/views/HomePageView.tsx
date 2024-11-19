import React from 'react';
import Hp from '../components/homepage/hp';
// import PlaylistCard from '../components/PlaylistCard';

const HomePageView = () => {
  const playlists = [
    { id: 1, color: '#FF6961', name: 'Chill Vibes', mood: 'Relaxed' },
    { id: 2, color: '#77DD77', name: 'Workout Mix', mood: 'Energetic' },
    { id: 3, color: '#FFD700', name: 'Focus Flow', mood: 'Focused' },
  ];

  return (
    <div>
      {/* Hp component above Playlist section */}
      <Hp />

      {/* Playlist section below Hp */}
      <div className="playlist-section" style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>Saved Playlists:</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '10px' }}>
          {/* {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              color={playlist.color}
              name={playlist.name}
              mood={playlist.mood}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default HomePageView;

