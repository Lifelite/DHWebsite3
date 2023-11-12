import * as React from 'react';
import {styled, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {ViewBox} from "./ViewBox";
import theme from "../theme";
import {UserMenuDesktop} from "./UserMenuDesktop";
import {PublicMenuDesktop} from "./PublicMenuDesktop"
import {useUser} from "@clerk/clerk-react";


const drawerWidth = 180;

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(7),
                },
            }),
        },
    }),
);

export default function NavBar(props) {
    const userFlow = props.userFlow
    const startTab = props.startTab

    const [open, setOpen] = React.useState(false);
    const [menuSelected, setMenuSelected] = React.useState(startTab)
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const callback = (displayedObject) => {
        setMenuSelected(displayedObject)
    };

    const currentList = userFlow ? <UserMenuDesktop callback={callback}/> : <PublicMenuDesktop callback={callback}/> ;
    const currentUser = useUser().user;
    const userID = 'id' in currentUser ? currentUser.id : null
    const userEmail =  'emailAddresses' in currentUser ? currentUser.emailAddresses[0] : null

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton
                            onClick={toggleDrawer}
                            edge="start"
                            sx={{
                                marginRight: '10px',
                                ...(!open && {display: 'none'})
                            }}
                        >
                            <ChevronLeftIcon/>
                        </IconButton>
                        <IconButton
                            onClick={toggleDrawer}
                            edge="start"
                            sx={{
                                justifyContent: 'flex-end',
                                ...(open && {display: 'none'})
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List component="nav">
                        {currentList}
                    </List>
                </Drawer>
                <ViewBox
                    view={menuSelected}
                    userID={userID}
                    userEmail={userEmail}
                />
            </Box>
        </ThemeProvider>
    );
}