import React from 'react'
import './HomePage.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Feed from '../components/Feed/Feed';
import Widgets from '../components/Widgets/Widgets';
import Layout from '../containers/Layout';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { useAuth0 } from '@auth0/auth0-react';




function Homepage() {

  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (      <Box sx={{ display: 'center' }}>
    <CircularProgress />
  </Box>)
  }
  
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