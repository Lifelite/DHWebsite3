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
import {ThemeProvider} from '@mui/material/styles';
import {addressState} from "../../functions/states";
import {Alert, MenuItem, Radio, RadioGroup, Select, Snackbar, Switch} from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';
import {SantaSubmit} from "../../../Data/mySQL";
import {SubmitConfirmation} from "../../Components/SubmitConfirmation";
import theme from "../../theme";

export default function SSSignup() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formFields = Object.keys(formValues);
        let newFormValues = {...formValues}
        let formReady = true

        for (let index = 0; index < formFields.length; index++) {
            const currentField = formFields[index];
            const currentValue = formValues[currentField].value;

            if (currentValue === '') {
                newFormValues = {
                    ...newFormValues,
                    [currentField]: {
                        ...newFormValues[currentField],
                        error: true
                    }
                }
                formReady = false
            }

        }

        setFormValues(newFormValues)
        if (formReady) {
            const data = new FormData(e.currentTarget);
            let ss = new SantaSubmit(data);
            ss.writeSantaData().then(
                r => {
                    console.log("Form Submitted" + r)
                    setShowSignUp(true)
                    setSubmitDone(false)
                }).catch(e => {
                console.log(e)
                setSubmitAlert(false)
            });
        } else {
            setOpen(true)
        }

    };

    const [open, setOpen] = React.useState(false);

    const handleToasterClose = () => {
        setOpen(false);
    };

    const [formValues, setFormValues] = React.useState({
        firstName: {
            value: '',
            error: false,
            errorMessage: 'First Name is Required'
        },
        lastName: {
            value: '',
            error: false,
            errorMessage: 'Last Name is Required'
        },
        email: {
            value: '',
            error: false,
            errorMessage: 'Email is Required'
        },
        discord: {
            value: '',
            error: false,
            errorMessage: 'Discord Username is Required'
        },
        address1: {
            value: '',
            error: false,
            errorMessage: 'Address is Required'
        },
        city: {
            value: '',
            error: false,
            errorMessage: 'City is Required'
        },
        zip: {
            value: '',
            error: false,
            errorMessage: 'Zip Code is Required'
        },
        likes: {
            value: '',
            error: false,
            errorMessage: 'Definitely need to know your likes'
        },
    });


    const handleDiscordChange = (e) => {
        const name = e.target.name;
        const value = e.target.value.replace(/[^\w\d]/g, "");
        setFormValues({
            ...formValues,
            [name]: {
                ...formValues[name],
                value
            }
        });
    };

    const handleTextChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: {
                ...formValues[name],
                value
            }
        })
    };

    const [state, setState] = React.useState('AR');

    const handleState = (event) => {
        setState(event.target.value);
    };

    const [allergy, setAllergy] = React.useState(true);
    const handleAllergy = () => {
        if (allergy === true) {
            setAllergy(false)
        } else {
            setAllergy(true)
        }
    };

    const [subButton, setSubButton] = React.useState(true);
    const handleSubButton = () => {
        if (subButton === true) {
            setSubButton(false)
        } else {
            setSubButton(true)
        }
    };

    const [showSignUp, setShowSignUp] = React.useState(false)
    const [submitDone, setSubmitDone] = React.useState(true)
    const [backupValue, setBackupValue] = React.useState("No")
    const [irlValue, setIRLValue] = React.useState("No")
    const [submitAlert, setSubmitAlert] = React.useState(true);

    const handleIRLChange = (e) => {
        let value = e.target.value
        if (value === "Yes") {
            value = "No"
            setIRLValue(value)
        }else{
            value="Yes"
            setIRLValue(value)
        }
    }
    const handleBackupChange = (e) => {
        let value = e.target.value
        if (value === "Yes") {
            value = "No"
            setBackupValue(value)
        }else{
            value = "Yes"
            setBackupValue(value)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div hidden={submitDone}>
                <SubmitConfirmation/>
            </div>
            <div hidden={showSignUp}>
                <Container component="main" maxWidth="l">
                    <CssBaseline/>
                    <Box
                        sx={{
                            flexGrow: 1,
                            flexShrink: 1,
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
                            Secret Santa Sign up
                        </Typography>
                        <div hidden={submitAlert}>
                            <Alert variant="filled" severity="error" sx={{py: 2}}>
                                Submission Error
                            </Alert>
                        </div>
                        <Box component="form" onSubmit={handleSubmit} sx={{mt: 3}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        inputProps={{ maxLength: '20' }}
                                        type='text'
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        onChange={handleTextChange}
                                        error={formValues.firstName.error}
                                        helpertext={formValues.firstName.error ? formValues.firstName.errorMessage : undefined}
                                        value={formValues.firstName.value}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        inputProps={{ maxLength: '20' }}
                                        type='text'
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        onChange={handleTextChange}
                                        error={formValues.lastName.error}
                                        helpertext={formValues.lastName.error ? formValues.lastName.errorMessage : undefined}
                                        value={formValues.lastName.value}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        inputProps={{ maxLength: '50' }}
                                        type='email'
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={handleTextChange}
                                        error={formValues.email.error}
                                        helpertext={formValues.email.error ? formValues.email.errorMessage : undefined}
                                        value={formValues.email.value}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        inputProps={{ maxLength: '20'}}
                                        type='text'
                                        required
                                        fullWidth
                                        id="discord"
                                        label="Discord Username"
                                        name="discord"
                                        autoComplete="discord"
                                        onChange={handleDiscordChange}
                                        error={formValues.discord.error}
                                        helpertext={formValues.discord.error ? formValues.discord.errorMessage : undefined}
                                        value={formValues.discord.value}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        inputProps={{ maxLength: '40' }}
                                        type='text'
                                        required
                                        fullWidth
                                        name="address1"
                                        label="Address Line 1"
                                        id="address-line1"
                                        autoComplete="address-line1"
                                        onChange={handleTextChange}
                                        error={formValues.address1.error}
                                        helpertext={formValues.address1.error ? formValues.address1.errorMessage : undefined}
                                        value={formValues.address1.value}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        inputProps={{ maxLength: '40' }}
                                        type='text'
                                        fullWidth
                                        name="address-line2"
                                        label="Address Line 2"
                                        id="address-line2"
                                        autoComplete="address-line2"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        inputProps={{ maxLength: '30' }}
                                        type='text'
                                        required
                                        fullWidth
                                        id="city"
                                        label="City"
                                        name="city"
                                        autoComplete="address-level2"
                                        onChange={handleTextChange}
                                        error={formValues.city.error}
                                        helpertext={formValues.city.error ? formValues.city.errorMessage : undefined}
                                        value={formValues.city.value}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Select
                                        labelId="address-level1"
                                        id="address-level1"
                                        value={state}
                                        name="state"
                                        autoComplete="address-level1"
                                        onChange={handleState}
                                        fullWidth
                                    >
                                        {addressState.map((aState) => (
                                            <MenuItem key={aState} value={aState}>{aState}</MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <TextField
                                        inputProps={{ maxLength: '5' }}
                                        type='number'
                                        fullWidth
                                        required
                                        id="postal-code"
                                        label="Zip Code"
                                        name="zip"
                                        autoComplete="postal-code"
                                        onChange={handleTextChange}
                                        error={formValues.zip.error}
                                        helpertext={formValues.zip.error ? formValues.zip.errorMessage : undefined}
                                        value={formValues.zip.value}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        inputProps={{ maxLength: '3000' }}
                                        required
                                        fullWidth
                                        id="likes"
                                        name="likes"
                                        label="Hobbies, Likes, etc."
                                        multiline
                                        minRows={4}
                                        maxRows={4}
                                        onChange={handleTextChange}
                                        error={formValues.likes.error}
                                        helpertext={formValues.likes.error ? formValues.likes.errorMessage : undefined}
                                        value={formValues.likes.value}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        inputProps={{ maxLength: '3000' }}
                                        fullWidth
                                        name="dislikes"
                                        id="dislikes"
                                        label="Dislikes (Do Not Want)"
                                        multiline
                                        minRows={4}
                                        maxRows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        inputProps={{ maxLength: '100' }}
                                        fullWidth
                                        name="charity"
                                        label="Favorite Charity?"
                                        id="charity"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allergy" color="primary" id="allergy-checkbox"/>}
                                        label="I have an allergy"
                                        onChange={handleAllergy}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} hidden={allergy}>
                                    <TextField
                                        inputProps={{ maxLength: '100' }}
                                        fullWidth
                                        name="allergy-text"
                                        label="Allergies"
                                        id="allergy-text"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Typography component="h4" variant="body">
                                        NSFW Okay?
                                    </Typography>
                                    <RadioGroup
                                        aria-labelledby="nsfw-radio-button"
                                        id="nsfw"
                                        defaultValue="No"
                                        name="nsfw"
                                        sx={{paddingX: 3}}
                                    >
                                        <FormControlLabel id="nsfw-no" value="No" control={<Radio/>} label="No"/>
                                        <FormControlLabel id="nsfw-yes" value="Yes" control={<Radio/>} label="Yes"/>
                                        <FormControlLabel id="nsfw-degen" value="Degenerate" control={<Radio/>}
                                                          label="I'm a Degenerate"/>
                                    </RadioGroup>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <FormControlLabel id="irl" name='irl' value={irlValue} control={<Switch onChange={handleIRLChange} value={irlValue} />} label="In Person Gift Okay?" />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <FormControlLabel id="backup" name='backup' value={backupValue} control={<Switch onChange={handleBackupChange} value={backupValue} />} label="Serve as a Backup Santa?" />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="Accept Santa" color="primary"/>}
                                        onChange={handleSubButton}
                                        label="I solemnly swear to be an awesome Secret Santa"
                                        id="santa-accept"
                                        name="santa-accept"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Button
                                        disabled={subButton}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        id="submit"
                                        name="submit"
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleToasterClose}>
                                    <Alert onClose={handleToasterClose} severity="error" sx={{width: '100%'}}>
                                        Either fill out the required fields or remove slashes, dumbass!
                                    </Alert>
                                </Snackbar>

                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}
