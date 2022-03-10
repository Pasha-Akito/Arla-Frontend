import React, { useState } from "react";
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Admin from './components/AdminAPI/Admin';

function App() {
  
  return (
    <div>
      <Admin />
      <div className="app">
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default App;