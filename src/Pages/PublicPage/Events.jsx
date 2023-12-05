import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {GiftSentButton} from "../../Components/GiftSentButton";
import Container from "@mui/material/Container";
import * as React from "react";

export function Events() {
    return (
        <Container component="main" maxWidth="l">
            <Box
                sx={{
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: 'auto',
                    bgcolor: 'background.paper',
                    marginTop: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: 6,
                    px: 6,
                }}
            >
                <Typography component="h2" variant="h4" mb={3} gutterBottom>
                    You missed Secret Santa!  Be sure to sign up next year!!!
                </Typography>
            </Box>
        </Container>
    )
}