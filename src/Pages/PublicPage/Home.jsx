import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme";
import {Image} from "@mui/icons-material";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
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
                    <Container maxWidth="sm" sx={{alignContent: 'center', }}>
                        <Box
                            component='img'
                            alt='Drunken Huntsman'
                            src='/DH-Logo.png'
                            width={'100%'}

                            sx={{
                                height: '14rem',
                                objectFit: 'contain'

                            }}
                        />
                        <Typography variant="paragraph" align="center" color="text.secondary" paragraph>
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
                            <Button variant="contained" href={"https://discord.gg/kAXQJBMXB3"}>Join our Discord!</Button>
                        </Stack>
                    </Container>
                </Box>
            </main>
        </ThemeProvider>
    );
}