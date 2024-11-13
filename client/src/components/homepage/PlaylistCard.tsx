import React from 'react';

interface PlaylistCardProps {
  color: string;
  name: string;
  mood: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ color, name, mood }) => {
  return (
    <div style={{ backgroundColor: color, padding: '20px', borderRadius: '10px', width: '150px', textAlign: 'center' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Mood:</strong> {mood}</p>
      <p>🎵</p>
    </div>
  );
};

export default PlaylistCard;
