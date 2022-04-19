import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import InterestsListPage from './pages/InterestsListPage';
import InterestPage from './pages/InterestPage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileRegisterPage from './pages/ProfileRegisterPage';
import ProfileMyPage from './pages/ProfileMyPage';
import { useQuery, gql } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import SignInPage from './pages/SignInPage';
import CoursePage from './pages/CoursePage';

export const GET_COUNT_FROM_TOKENID = gql`
query UserCount($tokenId: String!) {
  userCount(tokenId: $tokenId)
}
`;

const App = () => {

  const { user, isAuthenticated } = useAuth0();

  const { data, loading, error } = useQuery(GET_COUNT_FROM_TOKENID, {
    variables: { tokenId: user.sub },
    fetchPolicy: "network-only"
  });

  if(!isAuthenticated)
  return (
    <Navigate to='/' replace element={<SignInPage />}/>
  )

  if (loading) return <Box sx={{ display: 'center' }}>
    <CircularProgress />
  </Box>;

  if (error) return (
    <text>Error! ${error.message}</text>
  );



  return (
    <div>
      <div className='app'>
        <Routes>
          <Route
            path="/"
            element=
            {data.userCount > 0 
              ? 
              <HomePage /> 
              : 
              <Navigate to='/profile/my/register' />}
          />
          <Route path="/interest" element={<InterestsListPage />} />
          <Route path='/interest/:interestName' element={<InterestPage />} />
          <Route path='/course/my' element={<CoursePage />} />
          <Route path="/profile/my" element={<ProfileMyPage />} />
          <Route path="/profile/my/register" element={<ProfileRegisterPage />} />
          <Route path="/profile/my/edit" element={<ProfileEditPage />} />
          <Route path="/profile/:profileId" element={<ProfilePage />} />
          <Route path="/*" element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;