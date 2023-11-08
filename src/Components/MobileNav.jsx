import {ThemeProvider} from "@mui/material/styles";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import * as React from "react";
import LinkIcon from "@mui/icons-material/Link";
import PhotoIcon from "@mui/icons-material/Photo";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HouseIcon from "@mui/icons-material/House";
import {ViewBox} from "./ViewBox";
import theme from "../theme"
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {UserButton, useUser} from "@clerk/clerk-react";

export default function MobileNav() {

    function matchPage(number) {
        switch (number) {
            case 0 :
                return "home"
            case 1:
                return "events"
            case 2:
                return "gallery"
            case 3:
                return "links"
            case 4:
                return "signin"
        }
    }

    const [value, setValue] = React.useState(0);
    const [thisPage, setPage] = React.useState("home")
    const handleChange = (e, value) => {
        setValue(value)
        setPage(matchPage(value))
    };

    const {isSignedIn} = useUser();

    // const menuText = () => {
    //     if (!isLoaded) {
    //         return "Sign In"
    //     }
    //
    //     if (isSignedIn) {
    //         return user.firstName
    //     }
    // }
    // const menuIcon = () => {
    //     if (!isLoaded) {
    //         return <PermIdentityRoundedIcon/>
    //     }
    //     if (isSignedIn) {
    //         return <UserButton userProfileMode={'navigation'}/>
    //     }
    // }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <ViewBox view={thisPage}/>
            </Box>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10,}} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction
                        label="Home"
                        icon={<HouseIcon/>}
                        value={0}
                    />
                    <BottomNavigationAction
                        label="Events"
                        icon={<CalendarMonthIcon/>}
                        value={1}
                    />
                    <BottomNavigationAction
                        label="Gallery"
                        icon={<PhotoIcon/>}
                        value={2}
                    />
                    <BottomNavigationAction
                        label="Links"
                        icon={<LinkIcon/>}
                        value={3}
                    />

                    <BottomNavigationAction
                        label={"Profile"}
                        icon={<PermIdentityRoundedIcon/>}
                        value={4}
                    />

                </BottomNavigation>
            </Paper>
        </ThemeProvider>
    )
};