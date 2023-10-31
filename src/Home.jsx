import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Welcome to the Drunken Huntsman
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            We're a group of adult gamers with
                            like interests.  We do regular events, share memes, all the normal stuff
                            you can find in other servers.  Most of us are friends and family in the
                            real world, but don't hesitate to join our group of misfits, you will be
                            welcome!
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained" href={"https://discord.gg/drunkenhuntsman"}>Join our Discord!</Button>
                            {/*<Button variant="outlined">Secondary action</Button>*/}
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 2 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}