import {ThemeProvider} from "@mui/material/styles";
import {Paper} from "@mui/material";
import * as React from "react";
import {ViewBox} from "./ViewBox";
import theme from "../theme"
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {UserMenuMobile} from "./UserMenuMobile";
import {PublicMenuMobile} from "./PublicMenuMobile";
import {useUser} from "@clerk/clerk-react";


export default function MobileNav(props) {
    const userFlow = props.userFlow
    const startTab = props.startTab

    const [thisPage, setPage] = React.useState(startTab)

    const callback = (view) => {
        setPage(view)
    };

    const currentList = userFlow ? <UserMenuMobile callback={callback}/> : <PublicMenuMobile callback={callback}/> ;
    const currentUser = useUser().user;
    const userID = currentUser.id ? currentUser.id : null
    const userEmail =  currentUser.emailAddresses[0] ? currentUser.emailAddresses : null

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <ViewBox
                    view={thisPage}
                    userID={userID}
                    userEmail={userEmail}
                />
            </Box>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10,}} elevation={3}>
                {currentList}
            </Paper>
        </ThemeProvider>
    )
};