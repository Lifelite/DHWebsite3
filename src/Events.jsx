import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {addressState} from "./listItems";
import {Alert, MenuItem, Radio, RadioGroup, Select} from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';
import {SantaSubmit} from "./mySQL";
import NavBar from "./NavBar";


const defaultTheme = createTheme();

export default function Events() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        let ss = new SantaSubmit(data);
        ss.writeSantaData().then(
            r => {

                console.log("Form Submitted")
            }).catch(e => {
             console.log(e)
            setSubmitAlert(false)
        });

    };

    const [state, setState] = React.useState('AR');

    const handleState = (event) => {
        setState(event.target.value);
    };

    const [allergy, setAllergy] = React.useState(true)
    const handleAllergy = () => {
        if (allergy === true) {
            setAllergy(false)
        }
        else {
            setAllergy(true)
        }
    }

    const [submitAlert, setSubmitAlert] = React.useState(true)

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="l">
                <CssBaseline/>
                <Box
                    sx={{
                        flexGrow: 1,
                        overflow: 'auto',
                        bgcolor: 'background.paper',
                        marginTop: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        py: 6,
                        px: 6,
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <StarsIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <div hidden={submitAlert}>
                        <Alert variant="filled" severity="error">
                            Submission Error, Try again later!
                        </Alert>
                    </div>
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
                                    autoComplete="address-level2"
                                />
                            </Grid>
                            <Grid item sm={3}>
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
                                        <MenuItem key={aState} value={aState}>{aState}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item sm={3}>
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
                                <TextField
                                    required
                                    fullWidth
                                    id="likes"
                                    name="likes"
                                    label="Hobbies, Likes, etc."
                                    multiline
                                    minRows={4}
                                    maxRows={4}
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="dislikes"
                                    id="dislikes"
                                    label="Dislikes (Do Not Want)"
                                    multiline
                                    minRows={4}
                                    maxRows={4}
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    fullWidth
                                    name="charity"
                                    label="Favorite Charity?"
                                    id="charity"
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allergy" color="primary" id="allergy-checkbox"/>}
                                    label="I have an allergy"
                                    onChange={handleAllergy}
                                />
                            </Grid>
                            <Grid item sm={12} hidden={allergy}>
                                <TextField
                                    fullWidth
                                    name="allergy-text"
                                    label="Allergies"
                                    id="allergy-text"
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <Typography component="h4" variant="body">
                                    NSFW Okay?
                                </Typography>
                                <RadioGroup
                                    aria-labelledby="nsfw-radio-button"
                                    id="nsfw"
                                    defaultValue="no"
                                    name="nsfw"
                                    sx={{paddingX: 3}}
                                >
                                    <FormControlLabel id="nsfw-no" value="no" control={<Radio />} label="No" />
                                    <FormControlLabel id="nsfw-yes" value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel id="nsfw-degen" value="degen" control={<Radio />} label="I'm a Degenerate" />
                                </RadioGroup>
                            </Grid>

                            <Grid item sm={12}>
                                <FormControlLabel
                                    control={<Checkbox value="Accept Santa" color="primary"/>}
                                    label="I solemnly swear to be an awesome Secret Santa"
                                    id="santa-accept"
                                    name="santa-accept"
                                />
                            </Grid>
                            <Grid item sm={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                id="submit"
                                name="submit"
                            >
                                Sign Up
                            </Button>
                            </Grid>
                            {/*<Grid container justifyContent="flex-end">*/}
                            {/*    <Grid item>*/}
                            {/*        <Link href="#" variant="body2">*/}
                            {/*            Already have an account? Sign in*/}
                            {/*        </Link>*/}
                            {/*    </Grid>*/}
                            {/*</Grid>*/}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
