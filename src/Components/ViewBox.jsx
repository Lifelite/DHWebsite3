import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import Home from "../Pages/PublicPage/Home";
import Events from "../Pages/PublicPage/Events";
import Gallery from "../Pages/PublicPage/Gallery";
import Links from "../Pages/PublicPage/Links";
import {Profile} from "../Pages/PublicPage/Profile";
import {UserProfile} from "@clerk/clerk-react";
import {UserHome} from "../Pages/Dashboard/UserHome";
import {Messages} from "../Pages/Dashboard/Messages";
import {UserInfo} from "../Pages/Dashboard/UserInfo";
import {VictimInfo} from "../Pages/Dashboard/VictimInfo";

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
                return <Profile />
            case "links":
                return <Links/>
            case "userHome":
                return <UserHome/>
            case "messages":
                return <Messages/>
            case "userInfo":
                return <UserInfo/>
            case "victimInfo":
                return <VictimInfo/>
            case "profile":
                return <UserProfile/>
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