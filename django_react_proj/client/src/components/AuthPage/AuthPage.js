import { useState } from 'react';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <SignIn setUser={setUser} /> : <SignUp setUser={setUser} />}
    </main>
  );
}