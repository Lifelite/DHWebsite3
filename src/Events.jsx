import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {addressState} from "./listItems";
import {Input, MenuItem, Select} from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Events() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [state, setState] = React.useState('AR');

    const handleState = (event) => {
        setState(event.target.value);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="l">
                <CssBaseline/>
                <Box
                    sx={{
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        bgcolor: 'background.paper',
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pt: 8,
                        pb: 6,
                        px: 6,
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="discord"
                                    label="Discord Username"
                                    name="discord"
                                    autoComplete="discord"
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="address-line1"
                                    label="Address Line 1"
                                    id="address-line1"
                                    autoComplete="address-line1"
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="address-line2"
                                    label="Address Line 2"
                                    id="address-line2"
                                    autoComplete="address-line2"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    name="city"
                                    autoComplete="home city"
                                />
                            </Grid>
                            <Grid item sm={2}>
                                <Select
                                    labelId="address-level1"
                                    id="address-level1"
                                    value={state}
                                    name="address-level1"
                                    autoComplete="address-level1"
                                    onChange={handleState}
                                    fullWidth
                                >
                                    {addressState.map((aState) => (
                                        <MenuItem value={aState}>{aState}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item sm={4}>
                                <TextField
                                    fullWidth
                                    required
                                    id="postal-code"
                                    label="Zip Code"
                                    name="postal-code"
                                    autoComplete="postal-code"
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <FormControlLabel
                                    control={<Checkbox value="Accept Santa" color="primary"/>}
                                    label="I solemnly swear to be an awesome Secret Santa"
                                />
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
