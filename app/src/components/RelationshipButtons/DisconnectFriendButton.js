import React from 'react'
import Button from '@mui/material/Button';
import { useMutation, gql } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { GET_PROFILE_FROM_ID } from '../../pages/ProfilePage';
import { USER_FRIEND_COUNT } from '../Details/ProfileDetail';
import { useNavigate } from 'react-router-dom';

const REMOVE_FRIEND_TO_USER = gql`
mutation RemoveFriendRelationshipForUser($where: UserWhere, $update: UserUpdateInput, $disconnect: UserDisconnectInput) {
  updateUsers(where: $where, update: $update, disconnect: $disconnect) {
    users {
      tokenId
    }
  }
}
`;

const DisconnectFriendButton = ({ friendButton }) => {

    const { user } = useAuth0();
    const navigate = useNavigate();

    const [disconnectFriend, { loading, error }] = useMutation(REMOVE_FRIEND_TO_USER, {
        variables: {
            where: {
                tokenId: user.sub
            },
            update: {
                friends: {
                    disconnect: {
                        where: {
                            node: {
                                id: friendButton
                            }
                        }
                    }
                }
            }
        },
        refetchQueries: [GET_PROFILE_FROM_ID, 'GetProfileFromProfileId'],
        refetchQueries: [USER_FRIEND_COUNT, 'UserFriendCount'],
        onCompleted: () => navigate(window.location),
    });

    if (loading) return <Box sx={{ display: 'center' }}>
        <CircularProgress />
    </Box>;

    if (error) return (
        <text>Error! ${error.message}</text>
    );

    return (
            <Button
                sx={{ marginRight: '24px' }}
                variant="contained"
                onClick={() => {
                    disconnectFriend();
                }}
            >
                Remove Friend
            </Button>
    )
}

export default DisconnectFriendButton