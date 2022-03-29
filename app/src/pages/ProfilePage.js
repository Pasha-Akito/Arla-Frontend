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

    <Grid container sx={{
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block'
    }} >
      <CssBaseline />

      <Card sx={{
        marginTop: '120px'
      }}>

        <div style={{
          paddingRight: '24px',
          paddingLeft: '24px'
        }}>

          <Grid item
            sx={{
              justifyContent: 'center',
            }}>

            <Grid item
              lg={10}
            >
              <div className="profile__top">
                <Avatar
                  src={user.picture}
                />
              </div>
            </Grid>

            <Grid item
              xs={12}
            >

              <div>
                <div>
                  <Button
                  >
                    Connect
                  </Button>
                  <Button
                  >
                    Message
                  </Button>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <span >22</span>
                    <span >Friends</span>
                  </div>
                  <div>
                    <span >10</span>
                    <span >Photos</span>
                  </div>
                  <div>
                    <span >89</span>
                    <span >Comments</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div>
            <h3>
              Jessica Jones{" "}
              <span>, 27</span>
            </h3>
            <div>
              <i />
              Bucharest, Romania
            </div>
            <div>
              <i />
              Solution Manager - Creative Tim Officer
            </div>
            <div>
              <i />
              University of Computer Science
            </div>
          </div>
          <div >
            <div>
              <div>
                <p>
                  An artist of considerable range, Ryan — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy —
                  writes, performs and records all of his own music,
                  giving it a warm, intimate feel with a solid groove
                  structure. An artist of considerable range.
                </p>
                <h4>Show More</h4>
              </div>
            </div>
          </div>
        </div>

      </Card>

    </Grid>
  )

}

export default ProfilePage