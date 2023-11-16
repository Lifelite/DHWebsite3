import {Fragment} from "react";
import Box from "@mui/material/Box";
import SignInPage from "./SignInPage";
import Button from "@mui/material/Button";
import {SignedOut} from "@clerk/clerk-react";
import * as React from "react";

export function SignedOutPage() {
    return (
        <Fragment>
            <SignedOut>
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
                        <SignInPage />
                        <Button variant="contained" href="https://drunkenhuntsman.com" pt={5}>Go to Homepage</Button>
                    </Box></Box>
            </SignedOut>
        </Fragment>
    )
}