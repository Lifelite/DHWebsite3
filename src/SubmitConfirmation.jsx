import {ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Avatar from "@mui/material/Avatar";

export function SubmitConfirmation() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                        px: 6,
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'confirmation.main'}}>
                        <CheckCircleIcon/>
                    </Avatar>

                    <Typography variant="h1" align="center" color="text.primary" title>
                        Submission Successful!
                    </Typography>
                    <Typography variant="h2" align="center" color="text.secondary" paragraph>

                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
}