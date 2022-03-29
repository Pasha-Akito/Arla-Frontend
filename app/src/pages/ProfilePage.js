import React from 'react'
import './ProfilePage.css'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

function ProfilePage() {
  const { user, isAuthenticated } = useAuth0()

  return (
    <section style={{
      position: 'relative',
      paddingTop: '64px',
      paddingBottom: '64px'
    }}>
      <Container sx={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '15px'
      }} >
        <CssBaseline />

        <Card sx={{ marginTop: '60px', position: 'relative' }}>

          <div style={{ paddingRight: '24px', paddingLeft: '24px' }}>

            <Grid container sx={{ justifyContent: 'center' }}>

              <Grid item lg={3} sx={{ order: '2' }}>
                <div className="profile__top">
                  <Avatar src={user.picture} />
                </div>
              </Grid>

              <Grid item
                lg={4}
                sx={{ textAlign: 'right', alignSelf: 'center', order: '3' }}>

                <div style={{ padding: '12px' }}>

                  <Button sx={{ marginRight: '24px' }} variant="contained">
                    Connect
                  </Button>

                  <Button sx={{ float: 'right' }} variant="contained">
                    Message
                  </Button>
                </div>
              </Grid>

              <Grid item lg={4} sx={{ order: '1', alignSelf: 'center' }}>

                <div style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>

                  <div style={{ textAlign: 'center', marginRight: '16px', padding: '14px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', display: 'block' }}>22</span>
                    <span style={{ fontSize: '14px', }}>Friends</span>
                  </div>
                  <div style={{ textAlign: 'center', marginRight: '16px', padding: '14px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', display: 'block' }}>10</span>
                    <span style={{ fontSize: '14px', }}>Photos</span>
                  </div>
                  <div style={{ textAlign: 'center', marginRight: '16px', padding: '14px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', display: 'block' }}>89</span>
                    <span style={{ fontSize: '14px', }}>Comments</span>
                  </div>
                </div>
              </Grid>

            </Grid>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <h3>
                Pasha Antonov
              </h3>
              <div style={{ fontSize: '16px' }}>
                <i style={{ marginRight: '8px' }} />
                Ireland
              </div>
              <div>
                <i />
                Graduated Course
              </div>
              <div>
                <i />
                Interests?
              </div>
            </div>
            <div style={{ marginTop: '48px', paddingTop: '48px', borderTop: 'true', textAlign: 'center' }}>
              <Grid container sx={{
                justifyContent: 'center'
              }}>
                <Grid item lg={9}>
                  <div style={{ paddingBottom: '48px' }}>
                    <p>
                      Fourth year student doing his final year project
                      using react for the front end
                      graphql to querry, apolloserver as the provider
                      and neo4j as the database housing everything                      Fourth year student doing his final year project
                      using react for the front end
                      graphql to querry, apolloserver as the provider
                      and neo4j as the database housing everything
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>

      </Container>
    </section >
  )
}

export default ProfilePage