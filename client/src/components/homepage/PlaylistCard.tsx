/**
 * @description: Provides code for playlist component on homepage
 * @author: Yuliana Chavez
 */

import React, { useState } from 'react';

interface PlaylistCardProps {
  id: number;
  color: string;
  name: string;
  mood: string;
  onDelete: (id: number) => void;
  onRename: (id: number, newName: string) => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ id, color, name, mood, onDelete, onRename }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleRenameClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onRename(id, newName);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        padding: '20px',
        borderRadius: '10px',
        width: '150px',
        textAlign: 'center',
      }}
    >
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{ marginBottom: '10px', padding: '5px' }}
          />
          <button onClick={handleSave} style={{ margin: '5px' }}>Save</button>
          <button onClick={() => setIsEditing(false)} style={{ margin: '5px' }}>Cancel</button>
        </div>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Mood:</strong> {mood}
          </p>
          <p>🎵</p>
          <button onClick={handleRenameClick} style={{ margin: '5px' }}>Rename</button>
          <button onClick={() => onDelete(id)} style={{ margin: '5px' }}>Delete</button>
        </>
      )}
    </div>
  );
};

export default PlaylistCard;
