import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import Home from "./Home";
import Events from "./Events";
import Gallery from "./Gallery";
import SignIn from "./SignIn";
import Links from "./Links";

export function ViewBox(props) {

    function eventHandler() {
        switch (props.view) {
            case "home":
                return <Home/>
            case "events":
                return <Events/>
            case "gallery":
                return <Gallery/>
            case "signin":
                return <SignIn/>
            case "links":
                return <Links/>
        }
    }

    return (
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
            <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                {eventHandler()}
            </Container>
        </Box>
    )
}