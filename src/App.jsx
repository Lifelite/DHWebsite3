import * as React from 'react';
import {useEffect, useState} from "react";
import {NavBarHandler} from "./NavBarHandler";

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

    console.log(import.meta.env)

    const isMobile = width <= 768;
  return (
    <>
        <NavBarHandler
            isMobile={isMobile}
        />
        </>

  );
}
