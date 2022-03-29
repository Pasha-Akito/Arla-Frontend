import React from 'react'
import './HomePage.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Feed from '../components/Feed/Feed';
import Widgets from '../components/Widgets/Widgets';
import Admin from '../components/AdminAPI/Admin';
import InterestList from '../components/ListSelectors/Interest/InterestList';

function Homepage() {
    return (
        <div>
          <div className="homepage">
            <Admin />
            <InterestList />
            <div className='homepage__body'>
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </div>
        </div>
      );
}

export default Homepage