import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Home from "./Home";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HouseIcon from "@mui/icons-material/House";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhotoIcon from "@mui/icons-material/Photo";
import LinkIcon from "@mui/icons-material/Link";
import SignIn from "./SignIn";
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import Gallery from "./Gallery";
import Events from "./Events";
import Links from "./Links";


const drawerWidth = 180;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
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
                    width: theme.spacing(8),
                },
            }),
        },
    }),
);



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function NavBar() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [displayedObject, setSelectedObject] = React.useState("home")

    function eventHandler() {
        switch (displayedObject) {
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

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setSelectedObject(event)
    };

    const mainListItems = (
        <React.Fragment>
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => handleListItemClick("home", 0)}
            >
                <ListItemIcon>
                    <HouseIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={() => handleListItemClick("events", 1)}
            >
                <ListItemIcon>
                    <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={() => handleListItemClick("gallery", 2)}
            >
                <ListItemIcon>
                    <PhotoIcon />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 4}
                onClick={() => handleListItemClick("links", 4)}
            >
                <ListItemIcon>
                    <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="Links" />
            </ListItemButton>
            <Divider/>
            <ListItemButton
                selected={selectedIndex === 3}
                onClick={() => handleListItemClick("signin", 3)}
            >
                <ListItemIcon>
                    <PermIdentityRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Sign In" />
            </ListItemButton>
        </React.Fragment>
    );

    return (
        <ThemeProvider theme={defaultTheme}>
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
                            ...(!open && {display: 'none'})}}
                        >
                            <ChevronLeftIcon/>
                        </IconButton>
                        <IconButton
                            onClick={toggleDrawer}
                            edge="start"
                            sx={{
                                marginRight: '7px',
                                ...(open && {display: 'none'})}}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List component="nav">
                        {mainListItems}
                    </List>
                </Drawer>
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
            </Box>
        </ThemeProvider>
    );
}