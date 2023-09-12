import React from 'react';

const SpotifyButton = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8000/api/spotify/login/';
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        padding: '10px 20px',
        backgroundColor: '#1DB954',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      Spotify
    </button>
  );
};

export default SpotifyButton;
