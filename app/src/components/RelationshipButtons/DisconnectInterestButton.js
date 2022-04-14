import React from 'react'
import Button from '@mui/material/Button';
import { useMutation, gql } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { INTEREST_QUERY } from '../../pages/InterestPage';
import { USER_INTEREST_COUNT } from '../Details/InterestDetail';
import { useNavigate } from 'react-router-dom';

const REMOVE_INTEREST_FROM_PERSON = gql`
mutation RemoveInterestRelationshipForPerson($where: PersonWhere, $update: PersonUpdateInput, $disconnect: PersonDisconnectInput) {
  updatePeople(where: $where, update: $update, disconnect: $disconnect) {
    people {
      name
      interests {
        name
      }
    }
  }
}
`;

const DisconnectInterestButton = ({ interestButton }) => {

  const { user } = useAuth0();
  const navigate = useNavigate();
  const [disconnectInterest, { loading, error }] = useMutation(REMOVE_INTEREST_FROM_PERSON, {
    variables: {
      where: {
        user: {
          tokenId: user.sub
        }
      },
      update: {
        interests: {
          disconnect: {
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
          disconnectInterest();
        }}
      >
        Leave
      </Button>
    </div>

  )
}

export default DisconnectInterestButton