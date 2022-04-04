import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import InterestsPage from './pages/InterestsPage';
import Header from './components/Header/Header';
import Profile from './pages/ProfilePage';
import LandingPage from './pages/LandingPage';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileEditPage from './pages/ProfileEditPage';

function App() {

  const { isAuthenticated } = useAuth0()

  return (
    <div>
      <div className='app'>
        <Routes>
          {isAuthenticated ?
            <Route path="/" element={<HomePage />} />
            : <Route path="/" element={<LandingPage />} />}
          <Route path="/interest" element={<InterestsPage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;