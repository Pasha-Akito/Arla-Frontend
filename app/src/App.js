import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Admin from './components/AdminAPI/Admin';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Login />
      <div className="app">
        <Admin />
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