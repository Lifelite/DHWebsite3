import {ThemeProvider} from "@mui/material/styles";
import {Paper} from "@mui/material";
import * as React from "react";
import {ViewBox} from "./ViewBox";
import theme from "../theme"
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {UserMenuMobile} from "./UserMenuMobile";
import {PublicMenuMobile} from "./PublicMenuMobile";


export default function MobileNav(props) {
    const userFlow = props.userFlow

    const comingFrom = (location.pathname==='/user') ? "userHome" : "home"

    const [thisPage, setPage] = React.useState(comingFrom)

    const callback = (view) => {
        setPage(view)
    };

    const currentList = userFlow ? <UserMenuMobile callback={callback}/> : <PublicMenuMobile callback={callback}/> ;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <ViewBox view={thisPage}/>
            </Box>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10,}} elevation={3}>
                {currentList}
            </Paper>
        </ThemeProvider>
    )
};