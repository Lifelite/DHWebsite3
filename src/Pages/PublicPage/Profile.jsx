import {SignedIn, SignedOut} from "@clerk/clerk-react";
import SignInPage from "./SignInPage";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import theme from "../../theme";
import {Navigate} from "react-router-dom";


export function Profile() {


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <SignedIn>
                    <Navigate to={'/user'}/>
                </SignedIn>
                <SignedOut>
                    <SignInPage/>
                </SignedOut>>
            </Box>
        </ThemeProvider>
    )
}