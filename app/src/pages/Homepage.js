import React from 'react'
import './HomePage.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Feed from '../components/Feed/Feed';
import Widgets from '../components/Widgets/Widgets';
import Admin from '../components/AdminAPI/Admin';
import Layout from '../components/Layout';

function Homepage() {
  return (
    <Layout>
      <div>
        <div className="homepage">
          <div className='homepage__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Homepage