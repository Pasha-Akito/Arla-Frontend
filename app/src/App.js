import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import InterestsListPage from './pages/InterestsListPage';
import InterestPage from './pages/InterestPage';
import ProfilePage from './pages/ProfilePage';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileEditPage from './pages/ProfileEditPage';
import ProfileMyPage from './pages/ProfileMyPage';
import QueryResult from './containers/QueryResult';
import { useQuery, gql } from '@apollo/client';

const GET_COUNT_FROM_TOKENID = gql`
query Query($tokenId: String!) {
  userCount(tokenId: $tokenId)
}
`;

const App = () => {

  const { user } = useAuth0();

  const { data, loading, error } = useQuery(GET_COUNT_FROM_TOKENID, {
    variables: {tokenId: user.sub}
  });

  if (loading) return <text>Loading...</text>;
  if (error) return (
    <text>Error! ${error.message}</text>
  );

  return (
    <div>
      <div className='app'>
        <Routes>
          <Route
            path="/"
            element={data.userCount > 0 ? <HomePage /> : <Navigate to='/profile/my/register' />}
          />
          <Route path="/interest" element={<InterestsListPage />} />
          <Route path='/interest/:interestId' element={<InterestPage />} />
          <Route path="/profile/my/register" element={<ProfileEditPage />} />
          <Route path="/profile/my" element={<ProfileMyPage />} />
          <Route path="/profile/:profileId" element={<ProfilePage />} />
          <Route path="/*" element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;