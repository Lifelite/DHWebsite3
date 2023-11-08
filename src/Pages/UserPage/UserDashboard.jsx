import {UserButton, useUser} from "@clerk/clerk-react";
import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


export function UserDashboard() {
    const {isLoaded, isSignedIn, user} = useUser()

    return (
        <React.Fragment>
            <Grid container sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                direction: 'column-reverse'
            }}>
                <UserButton/>
                <Badge color="secondary" variant="dot">
                    <MailIcon/>
                </Badge>
            </Grid>
            <Box
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    pt: 2,
                }}>


                <Grid
                    container
                    spacing={{xs: 2, md: 3}}
                    columns={{xs: 4, sm: 8, md: 12}}
                    sx={{
                        bgcolor: 'background.paper',
                        display: 'flex',
                        flexGrow: 1,
                    }}>
                    <Grid item xs={12} sm={6}>
                        <Typography>
                            I'm just putting a placeholder here for funzies
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}