import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Home from "./Home";
import Events from "./Events";
import Gallery from "./Gallery";
import SignIn from "./SignIn";
import Links from "./Links";
import {Fab, useTheme, Zoom} from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import {Cancel} from "@mui/icons-material";

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};

const [fabOpen, setFabOpen] = React.useState(closed)
const [value, setValue] = React.useState(0)
const handleFABChange = (event, newValue) => {
    setValue(newValue)
}
const handleFABMenu = (e) => {
    if (fabOpen) {
        setFabOpen(closed)
        handleFABChange(e, 0)
    } else {
        setFabOpen(open)
        handleFABChange(e, 1)
    }
    switch(e) {
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
export function MenuPopupState() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu" disableAutoFocus={false}>
            {(popupState) => (
                <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                        Dashboard
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={() => handleFABMenu("home")}>Home</MenuItem>
                        <MenuItem onClick={() => handleFABMenu("events")}>Events</MenuItem>
                        <MenuItem onClick={() => handleFABMenu("gallery")}>Gallery</MenuItem>
                        <MenuItem onClick={() => handleFABMenu("links")}>Links</MenuItem>
                        <MenuItem onClick={() => handleFABMenu("signin")}>Sign In</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}

export default function MobileNav() {
    const theme = useTheme()
    const [fabOpen, setFabOpen] = React.useState(closed)
    const [value, setValue] = React.useState(0)




}
const handleChangeIndex = (index) => {
    setValue(index);
}

const handleMenuClick = (e, screen) => {
    fabOpen.close
}

const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
}

const fabs = [
    {
        color: 'primary',
        sx: fabStyle,
        icon: <MenuIcon/>,
        label: "Menu",
    },
    {
        color: 'error',
        sx: fabStyle,
        icon: <Cancel/>,
        label: "Exit Menu",
    }
]
return (
    <Box
        component="main"
        sx={{
            bgcolor: 'background.paper',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        }}
    >

        {fabs.map((fab, index) => (
            <Zoom
                key={fab.color}
                in={value === index}
                timeout={transitionDuration}
                style={{
                    transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                }}
                unmountOnExit
            >
                <Menu {...bindMenu(fabOpen)}>
                    <MenuItem onClick={() => handleFABMenu("home")}>Home</MenuItem>
                    <MenuItem onClick={() => handleFABMenu("events")}>Events</MenuItem>
                    <MenuItem onClick={() => handleFABMenu("gallery")}>Gallery</MenuItem>
                    <MenuItem onClick={() => handleFABMenu("links")}>Links</MenuItem>
                    <MenuItem onClick={() => handleFABMenu("signin")}>Sign In</MenuItem>
                </Menu>
                <Fab sx={fab.sx} aria-label={fab.label} color={fab.color} {...bindTrigger(fabOpen)} onClick={handleFABMenu}>
                    {fab.icon}
                </Fab>
            </Zoom>
        ))}

    </Box>
);