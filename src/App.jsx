import * as React from 'react';
import NavBar from "./NavBar";
import {useEffect, useState} from "react";
import MobileNav from "./MobileNav";
import {auth} from "./firebase"
import {NavBarHandler} from "./NavBarHandler";

export default function App() {
    const [width, setWidth] = useState(window.innerWidth);

    const signedIn = useState(auth.currentUser)

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function toolbar() {
        if (isMobile) {
            return <MobileNav />
        } else {
            return <NavBar />
        }
    }

    const isMobile = width <= 768;
  return (
    <>
        <NavBarHandler
            isMobile={isMobile}
            signedIn={signedIn}
        />
        </>

  );
}
