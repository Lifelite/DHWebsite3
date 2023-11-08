import Fragment from "react"
import {SignedIn, SignedOut, useUser} from "@clerk/clerk-react";
import {UserDashboard} from "../UserPage/UserDashboard";
import SignInPage from "./SignInPage";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import theme from "../../theme";
import {Dashboard} from "../Dashboard/Dashboard";
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
                    <Dashboard />
                </SignedIn>
                <SignedOut>
                    <SignInPage/>
                </SignedOut>
            </Box>
        </ThemeProvider>
    )
}