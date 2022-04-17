import React from 'react';
import './Feed.css';
import Post from './Post';
import CreateIcon from "@material-ui/icons/Create";
import { useMutation, gql, useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import CircularProgress from '@material-ui/core/CircularProgress'
import { useNavigate } from 'react-router-dom';
import { GET_PROFILE_FROM_TOKENID } from '../../pages/ProfileMyPage'

const CONNECT_AND_CREATE_POST = gql`
mutation ConnectAndCreatePost($where: PersonWhere, $create: PersonRelationInput) {
    updatePeople(where: $where, create: $create) {
      people {
        name
        posts {
          content
        }
      }
    }
  }
`;

const Feed = ({ profile }) => {

    const [postContent, setPostContent] = React.useState('')
    const navigate = useNavigate()
    const [connectAndCreatePost, { loading, error }] = useMutation(CONNECT_AND_CREATE_POST, {
        variables: {
            where: {
                id: profile.id
            },
            create: {
                posts: [
                    {
                        node: {
                            content: postContent
                        }
                    }
                ]
            }
        },
        refetchQueries: [GET_PROFILE_FROM_TOKENID, 'GetProfileFromUserId'],
        onCompleted: () => navigate(window.location),
    });

    if (loading) return <Box sx={{ display: 'center' }}>
        <CircularProgress />
    </Box>;

    if (error) return (
        <text>Error! ${error.message}</text>
    );

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form onSubmit={() => {
                        connectAndCreatePost();
                    }}>
                        <input type='text' placeholder='Start a post'
                            required
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)} />

                        <button type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
                <div className='feed__inputOptions'>

                </div>
            </div>

            {profile.postsConnection?.edges.map((post) => (
                <Post key={post.date} post={post} />
            ))}


        </div>
    )
}

export default Feed