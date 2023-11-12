import {Backdrop, CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import * as React from "react";

export function UserInfoSheet(props) {
    const data = props.data

    return (
        <Container component="main" maxWidth="l">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}

            >
                <CircularProgress color="inherit" />


            </Backdrop>
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
                <Typography component="h2" variant="h4">
                    Your Secret Santa Info
                    {data}

                </Typography>

            </Box>
        </Container>
    )
}