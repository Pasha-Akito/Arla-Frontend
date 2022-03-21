import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import NoPage from './pages/NoPage';
import InterestList from './components/Interest/InterestList';
import Header from './components/Header/Header';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <Header />
      <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list" element={<InterestList />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;