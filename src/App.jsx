import * as React from 'react';
import {useEffect, useState} from "react";
import {NavBarHandler} from "./Components/NavBarHandler";
import {ClerkProvider} from "@clerk/clerk-react";


const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

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
  return (
    <>
    <ClerkProvider publishableKey={clerkPubKey}>
        <NavBarHandler
            isMobile={isMobile}
        />
    </ClerkProvider>
        </>

  );
}
