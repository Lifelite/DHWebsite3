import * as React from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import {SignedIn} from "@clerk/clerk-react";
import ForumIcon from "@mui/icons-material/Forum";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export const UserMenuMobile = ({callback}) => {

    const [value, setValue] = React.useState(0);
    function matchUserPage(number) {
        switch (number) {
            case 0 :
                return "userHome"
            case 1:
                return "messages"
            case 2:
                return "userInfo"
            case 3:
                return "victimInfo"
            case 4:
                return "profile"
        }
    }

    const handleUserChange = (e, value) => {
        setValue(value)
        callback(matchUserPage(value))
    }

    return (
        <React.Fragment>
            <SignedIn>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleUserChange}
                >
                    <BottomNavigationAction
                        label="Home"
                        icon={<HouseIcon/>}
                        value={0}
                    />
                    <BottomNavigationAction
                        label="Messages"
                        icon={<ForumIcon />}
                        value={1}
                    />
                    <BottomNavigationAction
                        label="Your Info"
                        icon={<PermIdentityRoundedIcon/>}
                        value={2}
                    />
                    <BottomNavigationAction
                        label="Your Victim"
                        icon={<InsertEmoticonIcon/>}
                        value={3}
                    />

                    <BottomNavigationAction
                        label={"Profile"}
                        icon={<SettingsIcon/>}
                        value={4}
                    />
                </BottomNavigation>
            </SignedIn>
        </React.Fragment>
    )
}