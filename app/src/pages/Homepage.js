import React from 'react'
import './HomePage.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Feed from '../components/Feed/Feed';
import Widgets from '../components/Widgets/Widgets';
import Layout from '../containers/Layout';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@apollo/client';
import { GET_PROFILE_FROM_TOKENID } from './ProfileMyPage';
import QueryResult from '../containers/QueryResult';

function Homepage() {

  const { isLoading, user } = useAuth0()

  const { loading, error, data, refetch } = useQuery(GET_PROFILE_FROM_TOKENID, {
    variables: {
      where: {
        user: {
          tokenId: user.sub
        }
      },
      first: 8,
      postsConnectionFirst2: 5
    },
  });

  if (isLoading) {
    return (<Box sx={{ display: 'center' }}>
      <CircularProgress />
    </Box>)
  }

  refetch()

  return (

    <Layout>
      <div>
        <div className="homepage">
          <div className='homepage__body'>
            <QueryResult error={error} loading={loading} data={data}>
              {data?.people?.map((profile) => (
                <Sidebar key={profile.id} profile={profile}/>
              ))}
              {data?.people?.map((profile) => (
                <Feed key={profile.id} profile={profile}/>
              ))}
            </QueryResult >
            <Widgets />
          </div>
        </div>
      </div>
    </Layout>

  );
}

export default Homepage