import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HouseIcon from "@mui/icons-material/House";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhotoIcon from "@mui/icons-material/Photo";
import LinkIcon from "@mui/icons-material/Link";
import Divider from "@mui/material/Divider";
import {SignedIn, SignedOut, UserButton, useUser} from "@clerk/clerk-react";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import Link from "@mui/material/Link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {ListItem} from "@mui/material";
import {Navigate, useNavigate} from "react-router-dom";


export const PublicMenuDesktop = ({callback}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        callback(event);
    };

    const {isSignedIn, user, isLoaded} = useUser();

    function getUser() {


        if (!isLoaded) {
            return null
        }

        if (isSignedIn) {
            return user.firstName
        }
    }

    const menuText = getUser()
    const navigate = useNavigate()
    const handlePageSwitch = () => {
        navigate('/user')
    }

    return (
        <React.Fragment>
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => handleListItemClick("home", 0)}
            >
                <ListItemIcon>
                    <HouseIcon/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={() => handleListItemClick("events", 1)}
            >
                <ListItemIcon>
                    <CalendarMonthIcon/>
                </ListItemIcon>
                <ListItemText primary="Events"/>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={() => handleListItemClick("gallery", 2)}
            >
                <ListItemIcon>
                    <PhotoIcon/>
                </ListItemIcon>
                <ListItemText primary="Gallery"/>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 4}
                onClick={() => handleListItemClick("links", 4)}
            >
                <ListItemIcon>
                    <LinkIcon/>
                </ListItemIcon>
                <ListItemText primary="Links"/>
            </ListItemButton>
            <Divider/>
            <SignedOut>
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={() => handleListItemClick("signin", 3)}
                >
                    <ListItemIcon>
                        <PermIdentityRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Sign In"}/>
                </ListItemButton>
            </SignedOut>
            <SignedIn>
                <ListItem>
                    <ListItemIcon>
                        <UserButton/>
                    </ListItemIcon>
                    <ListItemText primary={menuText}/>
                </ListItem>
                <ListItemButton
                    onClick={handlePageSwitch}
                >
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard"}/>
                </ListItemButton>
            </SignedIn>
        </React.Fragment>
    )
}
