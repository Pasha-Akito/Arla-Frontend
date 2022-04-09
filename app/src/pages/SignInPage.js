import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useAuth0 } from '@auth0/auth0-react'

export default function SignInPage() {

    const { loginWithRedirect } = useAuth0();

    return (
        <div style={{backgroundColor: '#4a99c7', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Grid container sx={{
                    height: '100vh',
                    maxWidth: '1200px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }} >
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={12}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'lightblue'
                    }} xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Welcome To ArlaArla
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{ mt: 1, mb: 2 }}
                                onClick={() => {
                                    loginWithRedirect();
                                }}>
                                Sign In Using Google
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
        </div>
    );
}
