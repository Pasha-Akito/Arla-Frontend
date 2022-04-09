import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CountrySelector from '../components/ListSelectors/CountrySelector';
import YearSelector from '../components/ListSelectors/YearSelector';
import CourseSelector from '../components/ListSelectors/CourseSelector';
import InterestSelector from '../components/ListSelectors/InterestSelector';
import styled from '@emotion/styled';
import { useMutation, gql } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { GET_COUNT_FROM_TOKENID } from '../App'

const CREATE_USER_MUTATION = gql`
mutation CreateUsersWithProfile($input: [UserCreateInput!]!) {
  createUsers(input: $input) {
    users {
      tokenId
      email
      profile {
        name
        bio
        image
        country
        id
        graduatedCourses {
          name
        }
        interests {
          name
        }
      }
    }
  }
}
`;

export default function ProfileRegisterPage() {

  const { user } = useAuth0();
  const navigate = useNavigate();

  const [formState, setFormState] = React.useState({
    name: '',
    bio: '',
    country: '',
    year: 2022,
    course: '',
    interest: ''
  });

  const [registerUser] = useMutation(CREATE_USER_MUTATION, {
    variables: {
      input: {
        tokenId: user.sub,
        email: user.email,
        profile: {
          create: {
            node: {
              name: formState.name,
              bio: formState.bio,
              image: user.picture,
              country: formState.country,
              graduatedCourses: {
                connect: {
                  where: {
                    node: {
                      name: formState.course
                    }
                  },
                  edge: {
                    year: formState.year
                  }
                }
              },
              interests: {
                connect: {
                  where: {
                    node: {
                      name: formState.interest
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    refetchQueries: [ GET_COUNT_FROM_TOKENID, 'UserCount' ],
    onCompleted: () => navigate("/profile/my"),
  });

  const countryHandler = value => setFormState({
    ...formState,
    country: value
  });

  const courseHandler = value => setFormState({
    ...formState,
    course: value
  });

  const interestHandler = value => setFormState({
    ...formState,
    interest: value
  });

  const yearHandler = value => setFormState({
    ...formState,
    year: value
  });

  return (
    <PageContainer>
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
          Please enter your profile details
        </Typography>

        <Box component="form"
          onSubmit={(e) => {
            e.preventDefault();
            registerUser();
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

            <Grid item xs={12} sm={8}>
              <CourseSelector onChange={courseHandler} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <YearSelector onChange={yearHandler} />
            </Grid>

            <Grid item xs={12}>
              <InterestSelector onChange={interestHandler} />
            </Grid>

          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register my account
          </Button>

        </Box>
      </Box>
    </PageContainer>
  );
}

const PageContainer = styled.div((props) => ({
  display: 'flex',
  backgroundColor: 'lightblue',
  justifyContent: props.grid ? 'center' : 'top',
  flexDirection: props.grid ? 'row' : 'column',
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  maxWidth: props.fullWidth ? null : `1100px`,
  width: '100%',
  padding: props.fullWidth ? 0 : 8 * 2,
  paddingLeft: props.fullWidth ? 0 : 8 * 5,
  paddingRight: props.fullWidth ? 0 : 8 * 5,
  paddingBottom: 8 * 5,
  marginLeft: 'auto',
  marginRight: 'auto'
}));