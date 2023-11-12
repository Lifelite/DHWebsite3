import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HouseIcon from "@mui/icons-material/House";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhotoIcon from "@mui/icons-material/Photo";
import LinkIcon from "@mui/icons-material/Link";
import Divider from "@mui/material/Divider";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {SignedIn, SignedOut, UserButton, useUser} from "@clerk/clerk-react";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import ForumIcon from '@mui/icons-material/Forum';
import DashboardIcon from "@mui/icons-material/Dashboard";
import {ListItem} from "@mui/material";
import {Navigate, useNavigate} from "react-router-dom";





export const UserMenuDesktop = ({ callback }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        callback(event);
    };

    const { isSignedIn, user, isLoaded } = useUser();

    function getUser () {


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

        navigate('/')
    }

    return (
        <React.Fragment>
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => handleListItemClick("userHome", 0)}
            >
                <ListItemIcon>
                    <HouseIcon/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={() => handleListItemClick("messages", 1)}
            >
                <ListItemIcon>
                    <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Messages"/>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={() => handleListItemClick("userInfo", 2)}
            >
                <ListItemIcon>
                    <PermIdentityRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Your Info"/>
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 4}
                onClick={() => handleListItemClick("victimInfo", 4)}
            >
                <ListItemIcon>
                    <InsertEmoticonIcon/>
                </ListItemIcon>
                <ListItemText primary="Your Victim"/>
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
                    <ListItemText primary={menuText} />
                </ListItem>
                <ListItemButton
                    onClick={handlePageSwitch}
                >
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Home Page"}/>
                </ListItemButton>
            </SignedIn>
        </React.Fragment>
    )
}
