import React from 'react';
import LogOut from './Auth/LogOut';

function Header({ user, setUser }) {
  return (
    <div className="text-center">
      <h1>Gene Picks</h1>

      {user ? <LogOut user={user} setUser={setUser} /> : null}
    </div>
  );
}

export default Header;
