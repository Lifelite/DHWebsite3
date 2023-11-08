import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const defaultTheme = createTheme();
export function SubmitConfirmation() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="m">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                        px: 3,
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'success.main'}}>
                        <CheckCircleIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h2" align="center" color="text.primary" paragraph>
                        Submission Successful!
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Keep an eye out for more news on the discord!  We'll also send notice out in email and soon you'll be able to log into your personal profile and dashboard!
                    </Typography>
                    <Button variant="contained" href={"https://drunkenhuntsman.com"}>Return to Homepage</Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
}