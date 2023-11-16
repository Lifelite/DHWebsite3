import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Fragment} from "react";
import * as React from "react";
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

export function NotAuthorized() {
    return (
        <Fragment>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    backgroundImage: "url('/dhbg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    backgroundRepeat: "no-repeat"
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Paper
                        elevation={24}
                    >
                        <Box
                            component='img'
                            alt='Drunken Huntsman'
                            src='/you-shall-not-pass.gif'
                            width={'100%'}

                            sx={{
                                height: '14rem',
                                objectFit: 'contain'

                            }}
                        />
                        <Typography variant="h5" pt={5}>
                            You do not have access to this page!
                        </Typography>
                        <Typography variant="h5" pt={2}>
                            Click the button below to go back.
                        </Typography>
                        <Button variant="contained" href="https://drunkenhuntsman.com" pt={5}>Go to Homepage</Button>
                    </Paper>

                </Box>
            </Box>
        </Fragment>
    )
}