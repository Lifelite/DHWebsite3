import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import {useEffect, useState} from "react";
import Home from "../Pages/PublicPage/Home";
import Gallery from "../Pages/PublicPage/Gallery";
import Links from "../Pages/PublicPage/Links";
import {Profile} from "../Pages/PublicPage/Profile";
import {UserProfile} from "@clerk/clerk-react";
import {UserHome} from "../Pages/Dashboard/UserHome";
import {Messages} from "../Pages/Dashboard/Messages";
import {UserInfo} from "../Pages/Dashboard/UserInfo";
import {VictimInfo} from "../Pages/Dashboard/VictimInfo";
import NewUserHome from "../Pages/Dashboard/NewUserHome";
import {SantaInfo} from "../../Data/mySQL";
import {UserSSInfo} from "../functions/userInfo";
import {Events} from "../Pages/PublicPage/Events";

export function ViewBox(props) {
    const [userData, setData] = useState(null);


    useEffect(() => {


        async function fetchData() {
            const userID = props.userID
            const userEmail = props.userEmail
            try {
                const sInfo = new SantaInfo(userID, userEmail);
                let ss = await sInfo.getSantaData()
                const ssInfo = await new UserSSInfo(ss)
                await setData(ssInfo.getInfo())
            }catch (e) {
                console.log(e)
            }
        }
        fetchData()

    }, []);

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
                return <UserInfo userData={userData}/>
            case "victimInfo":
                return <VictimInfo userID={props.userID} userEmail={props.userEmail} userData={userData}/>
            case "profile":
                return <UserProfile/>
            case "newUser":
                return <NewUserHome/>
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