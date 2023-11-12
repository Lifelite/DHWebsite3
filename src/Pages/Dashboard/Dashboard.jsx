import {UserButton, useUser} from "@clerk/clerk-react";
import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {AppBar, FormGroup, MenuItem, Switch} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {AccountCircle, Menu} from "@mui/icons-material";


export function Dashboard() {
    const {user} = useUser()
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid
                container
                spacing={{xs: 2, md: 3}}
                columns={{xs: 4, sm: 8, md: 12}}
                sx={{
                    bgcolor: 'background.paper',
                    display: 'flex',
                    flexGrow: 1,
                }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"

                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Dashboard
                    </Typography>
                    {auth && (
                        <div>
                            <UserButton/>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
                <Grid item xs={12} sm={6}>
                    <Typography>
                        I'm just putting a placeholder here for funzies
                    </Typography>
                </Grid>
            </Grid>
    )
}