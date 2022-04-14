import React from 'react'
import Button from '@mui/material/Button';
import { useMutation, gql } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { INTEREST_QUERY } from '../../pages/InterestPage';
import { USER_INTEREST_COUNT } from '../Details/InterestDetail';
import { useNavigate } from 'react-router-dom';

const ADD_INTEREST_TO_PERSON = gql`
mutation CreateInterestRelationshipForPerson($where: PersonWhere, $update: PersonUpdateInput) {
  updatePeople(where: $where, update: $update) {
    people {
      name
      interests {
        name
      }
    }
  }
}
`;

const ConnectInterestButton = ({ interestButton }) => {

  const { user } = useAuth0();
  const navigate = useNavigate();
  const [connectInterest, { loading, error }] = useMutation(ADD_INTEREST_TO_PERSON, {
    variables: {
      where: {
        user: {
          tokenId: user.sub
        }
      },
      update: {
        interests: {
          connect: {
            where: {
              node: {
                name: interestButton
              }
            }
          }
        }
      }
    },
    refetchQueries: [INTEREST_QUERY, 'GetInterestByName'],
    refetchQueries: [USER_INTEREST_COUNT, 'UserInterestCount'],
    onCompleted: () => navigate(window.location),
  });

  if (loading) return <Box sx={{ display: 'center' }}>
    <CircularProgress />
  </Box>;

  if (error) return (
    <text>Error! ${error.message}</text>
  );

  return (

    <div>
      <Button
        fullWidth
        variant="contained"
        onClick={() => {
          connectInterest();
        }}
      >
        Join
      </Button>
    </div>

  )
}

export default ConnectInterestButton