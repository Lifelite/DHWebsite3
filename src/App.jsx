import * as React from 'react';
import {useEffect, useState} from "react";
import {NavBarHandler} from "./Components/NavBarHandler";
import {ClerkProvider, SignedIn, SignedOut} from "@clerk/clerk-react";
import {Route, Routes} from "react-router-dom";
import Button from "@mui/material/Button";
import NewUserHome from "./Pages/Dashboard/NewUserHome";
import Box from "@mui/material/Box";
import SignInPage from "./Pages/PublicPage/SignInPage";


export default function App() {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

    if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
        throw new Error("Missing Publishable Key")
    }


    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <Routes>
                <Route
                    path='/'
                    element={
                        <NavBarHandler
                            isMobile={isMobile}
                            userFlow={false}
                            startTab={"home"}
                        />
                    }
                />
                <Route
                    path='/user'
                    element={
                        <>
                            <SignedIn>
                                <NavBarHandler
                                    isMobile={isMobile}
                                    userFlow={true}
                                    startTab={"userHome"}
                                />
                            </SignedIn>
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
                        </>

                    }
                />
                <Route
                    path='/newUser'
                    element={
                        <>
                            <SignedIn>
                                <NewUserHome />
                            </SignedIn>
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
                        </>
                    }
                />
                <Route
                    path='/events'
                    element={
                        <NavBarHandler
                            isMobile={isMobile}
                            userFlow={false}
                            startTab={"events"}
                        />
                        }
                />
            </Routes>
        </ClerkProvider>
    );
}
