import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CountrySelector from '../components/ListSelectors/CountrySelector';
import { useMutation, gql, useQuery } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../containers/Layout';
import { GET_PROFILE_FROM_TOKENID } from '../pages/ProfileMyPage';

const UPDATE_USER_MUTATION = gql`
mutation UpdateProfile($where: PersonWhere, $update: PersonUpdateInput) {
  updatePeople(where: $where, update: $update) {
    people {
      name
      bio
      country
    }
  }
}
`;

const ProfileEditPage = () => {

  const location = useLocation();
  const profileDefault = location.state;
  const { user } = useAuth0();
  const navigate = useNavigate();

  const [formState, setFormState] = React.useState({
    name: profileDefault.name,
    bio: profileDefault.bio,
    country: ''
  });

  const [updateProfile, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    variables: {
      where: {
        user: {
          tokenId: user.sub
        }
      },
      update: {
        name: formState.name,
        bio: formState.bio,
        country: formState.country
      }
    },
    refetchQueries: [GET_PROFILE_FROM_TOKENID, 'GetProfileFromUserId'],
    onCompleted: () => navigate("/profile/my"),
  });

  const countryHandler = value => setFormState({
    ...formState,
    country: value
  });

  if (loading) return <Box sx={{ display: 'center' }}>
    <CircularProgress />
  </Box>;

  if (error) return (
    <text>Error! ${error.message}</text>
  );


  return (
    <Layout>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update your profile details
        </Typography>

        <Box component="form"
          onSubmit={(e) => {
            e.preventDefault();
            updateProfile();
          }}
          sx={{ mt: 3 }}>

          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoComplete="name"
                value={formState.name}
                onChange={(e) => setFormState({
                  ...formState,
                  name: e.target.value
                })}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                rows={4}
                multiline
                required
                fullWidth
                id="bio"
                label="Write a bit about yourself..."
                value={formState.bio}
                onChange={(e) => setFormState({
                  ...formState,
                  bio: e.target.value
                })}
              />
            </Grid>

            <Grid item xs={12}>
              <CountrySelector onChange={countryHandler} />
            </Grid>

          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Changes
          </Button>

        </Box>
      </Box>
    </Layout>
  );
}

export default ProfileEditPage
