import React, { useState, useEffect } from 'react';

function SpotifyTopTracks() {
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    // Fetch the top tracks from the API when the component mounts

    const headers = new Headers({
      Authorization: `Bearer ${accessToken}`,
    });
    
    const requestOptions = {
      method: 'GET',
      headers: headers,
    };
    
    fetch('http://localhost:8000/api/spotify/top-tracks/', requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTopTracks(data.tracks);
        console.log(JSON.stringify(data.tracks, null, 2))
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching top tracks:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Top Spotify Tracks</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {topTracks.map((track) => (
            <li key={track.id} style={{ marginBottom: '10px' }}>
              <strong>{track.name}</strong> - {track.artist}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SpotifyTopTracks;
