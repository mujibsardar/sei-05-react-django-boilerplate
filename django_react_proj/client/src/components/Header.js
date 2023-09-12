import React from 'react';
import LogOut from './Auth/LogOut';
import SpotifyButton from './Spotify/SpotifyButton';

function Header({ user, setUser }) {
  return (
    <div className="text-center">
      <h1>Boilerplate Home</h1>

      {user ? (
        <>
          <LogOut user={user} setUser={setUser} /> 
          <SpotifyButton />
        </>
      ) : null}
    </div>
  );
}

export default Header;
