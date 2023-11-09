import * as React from 'react';
import {useEffect, useState} from "react";
import {NavBarHandler} from "./Components/NavBarHandler";
import {ClerkProvider, SignedIn, SignedOut, SignIn} from "@clerk/clerk-react";
import {Route, Routes} from "react-router-dom";
import Button from "@mui/material/Button";


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
                                />
                            </SignedIn>
                            <SignedOut>
                                <SignIn
                                    redirectUrl={'/user'}
                                />
                                <Button variant="contained" href="https://drunkenhuntsman.com">Go to Homepage</Button>
                            </SignedOut>
                        </>

                    }
                />
            </Routes>
        </ClerkProvider>
    );
}
