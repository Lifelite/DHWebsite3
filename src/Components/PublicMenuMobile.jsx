import * as React from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhotoIcon from "@mui/icons-material/Photo";
import LinkIcon from "@mui/icons-material/Link";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";

export const PublicMenuMobile = ({callback}) => {

    const [value, setValue] = React.useState(0);
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

    const handleChange = (e, value) => {
        setValue(value)
        callback(matchPage(value))
    }

    return (
        <React.Fragment>
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
                    label="SSSignup"
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
                    label={"User Page"}
                    icon={<PermIdentityRoundedIcon/>}
                    value={4}
                />

            </BottomNavigation>
        </React.Fragment>
    )
}