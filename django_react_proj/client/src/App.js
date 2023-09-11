import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AuthPage from './components/AuthPage/AuthPage';
import { getUser } from './utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <Router>
      <Fragment>
        <Header user={user} setUser={setUser}/>
        {user ? (
          <>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </Fragment>
    </Router>
  );
}

export default App;
