import React from 'react'
import './ProfileMyDetail.css'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';


const ProfileMyDetail = ({ profile }) => {

  return (
    <section style={{
      position: 'relative',
      paddingTop: '32px',
      paddingBottom: '32px'
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

            <Grid container sx={{ justifyContent: 'center', paddingTop: '24px' }}>

              <Grid item lg={3} sx={{ order: '2' }}>
                <div className="profile__top">
                  <Avatar src={profile.image} alt='' />
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
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <h3>
                {profile.name || 'name'}
              </h3>
              <div style={{ fontSize: '16px' }}>
                <i />
                Living in {profile.country || 'country'}
              </div>
              <div>
                <i />
                {profile.graduatedCoursesConnection.edges.map((course) => (
                <div>
                  <i />
                   Graduated {course.node.name || 'Course?'} in {course.year}
                </div>
              ))}
              </div>
              <div style={{ marginTop: '12px' }}>
                <h4> Interests in: </h4>
              </div>
              {profile.interests.map((interests) => (
                <div>
                  <i />
                  <Link to={`/interest/${interests.name}`}>
                    {interests.name || 'Interests?'}
                  </Link>
                </div>
              ))}


            </div>
            <div style={{ marginTop: '18px', paddingTop: '18px', borderTop: 'true', textAlign: 'left' }}>
              <Grid container sx={{
                justifyContent: 'center'
              }}>
                <Grid item lg={9}>
                  <div style={{ paddingBottom: '48px' }}>
                    <p>
                      {profile.bio || 'bio'}
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

export default ProfileMyDetail