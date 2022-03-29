import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CountrySelector from '../components/ListSelectors/CountrySelector';
import YearSelector from '../components/ListSelectors/YearSelector';
import CourseSelector from '../components/ListSelectors/CourseSelector';
import InterestSelector from '../components/ListSelectors/InterestSelector';

export default function ProfileEditPage() {

  return (
      <Container  maxWidth="xs">
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
            Your Profile Details
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="name"
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
                />
              </Grid>

              <Grid item xs={12}>
                <CountrySelector />
              </Grid>

              <Grid item xs={12} sm={8}>
                <CourseSelector />
              </Grid>
              <Grid item xs={12} sm={4}>
                <YearSelector />
              </Grid>

              <Grid item xs={12}>
                <InterestSelector />
              </Grid>

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit Profile Details
            </Button>

          </Box>
        </Box>
      </Container>
  );
}