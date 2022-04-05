import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import InterestsListPage from './pages/InterestsListPage';
import InterestPage from './pages/InterestPage';
import Profile from './pages/ProfilePage';
import SignInPage from './pages/SignInPage';
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
            : <Route path="/" element={<SignInPage />} />}
          <Route path="/interest" element={<InterestsListPage />} />
          <Route path='/interest/:interestId' element={<InterestPage/>} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/profile/:profileId" element={<Profile />} />
          <Route path="/*" element={<Navigate to='/' replace/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;