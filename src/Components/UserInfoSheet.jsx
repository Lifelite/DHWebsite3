import {Card, CardActionArea, MenuItem, Select, Switch} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import * as React from "react";
import {useState} from "react";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {SantaSubmit} from "../../Data/mySQL";
import {addressState} from "../functions/states";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useNavigate} from "react-router-dom";

export function UserInfoSheet(props) {
    let data = props.data
    let navigate = useNavigate()

    const [namePop, setNamePop] = React.useState(false);
    const [emailPop, setEmailPop] = React.useState(false);
    const [addressPop, setAddressPop] = React.useState(false);
    const [discordPop, setDiscordPop] = React.useState(false);
    const [likePop, setLikePop] = React.useState(false);
    const [hatePop, setHatePop] = React.useState(false);
    const [charityPop, setCharityPop] = React.useState(false);
    const [allergicPop, setAllergicPop] = React.useState(false);
    const [giftPop, setGiftPop] = React.useState(false);
    const handleClick = (e) => {
        switch (e.currentTarget.id) {
            case "name": {
                setNamePop(true)
                break
            }
            case "email": {
                setEmailPop(true)
                break
            }
            case "address": {
                setAddressPop(true)
                break
            }
            case "discord": {
                setDiscordPop(true)
                break
            }
            case "likes": {
                setLikePop(true)
                break
            }
            case "hate": {
                setHatePop(true)
                break
            }
            case "charity": {
                setCharityPop(true)
                break
            }
            case "allergic": {
                setAllergicPop(true)
                break
            }
            case "gift": {
                setGiftPop(true)
                break
            }
        }
    };

    const [firstNameValue, setFirstNameValue] = useState(data.firstName);
    const [lastNameValue, setLastNameValue] = useState(data.lastName);
    const [emailValue, setEmailValue] = useState(data.email);
    const [streetValue, setStreetValue] = useState(data.address1);
    const [line2Value, setLine2Value] = useState(data.address2);
    const [cityValue, setCityValue] = useState(data.city);
    const [stateValue, setStateValue] = useState(data.state);
    const [zipValue, setZipValue] = useState(data.zip);
    const [discordValue, setDiscordValue] = useState(data.discord);
    const [likeValue, setLikeValue] = useState(data.likes);
    const [hateValue, setHateValue] = useState(data.dislikes);
    const [allergyValue, setAllergyValue] = useState(data.allergies)
    const [charityValue, setCharityValue] = useState(data.charity)
    const [nsfwValue, setNSFWValue] = useState(data.nsfw)
    const [irlValue, setIRLValue] = useState("No")
    const [backupValue, setBackupValue] = useState("No")

    const handleLNChange = (e) => {
        const value = e.target.value;
        setLastNameValue(value)
    };

    const handleFNChange = (e) => {
        const value = e.target.value;
        setFirstNameValue(value)
    };

    const handleEmailChange = (e) => {
        const value = e.target.value
        setEmailValue(value)
    };

    const handleDiscordChange = (e) => {
        const value = e.target.value
        setDiscordValue(value)
    };
    const handleStreetChange = (e) => {
        const value = e.target.value
        setStreetValue(value)
    };

    const handleLine2Change = (e) => {
        const value = e.target.value
        setLine2Value(value)
    };
    const handleCityChange = (e) => {
        const value = e.target.value
        setCityValue(value)
    };

    const handleStateChange = (e) => {
        const value = e.target.value
        setStateValue(value)
    };
    const handleZipChange = (e) => {
        const value = e.target.value
        setZipValue(value)
    };

    const handleLikeChange = (e) => {
        const value = e.target.value
        setLikeValue(value)
    };

    const handleHateChange = (e) => {
        const value = e.target.value;
        setHateValue(value)
    };

    const handleAllergyChange = (e) => {
        const value = e.target.value
        setAllergyValue(value)
    };
    const handleCharityChange = (e) => {
        const value = e.target.value
        setCharityValue(value)
    };

    const handleNSFWChange = (e) => {
        const value = e.target.value
        setNSFWValue(value)
    };

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



    const handleClose = () => {
        setNamePop(false);
        setEmailPop(false);
        setAddressPop(false);
        setDiscordPop(false);
        setLikePop(false);
        setHatePop(false);
        setAllergicPop(false);
        setCharityPop(false);
        setGiftPop(false);
    };

    const handleSaveClose = (e) => {
        e.preventDefault();
        const newData = new FormData(e.currentTarget);
        let ss = new SantaSubmit(newData)
        ss.editSantaData(e.currentTarget.id, data.userName).then(r => {
            console.log("Form Submitted" + r)
            navigate('/userInfo')
            window.location.reload()
        }).catch(e => {
            console.log(e)
        });
        handleClose()

    }

    return (
        <Container component="main" maxWidth="l">
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
            <Typography component="h2" variant="h4" mb={3} gutterBottom>
                Your Secret Santa Info

            </Typography>
            <Grid
                container={true}
                spacing={2}
                columns={16}
                mt={3}
                sx={{alignItems: "stretch"}}
                gridTemplateColumns="repeat(9, 1fr)"
            >
                <Grid
                    item={true}
                    xs={16}
                    sm={16}
                    md={8}
                    lg={8}

                >
                    <CardActionArea
                        name="name"
                        id="name"
                        onClick={handleClick}
                    >

                        <Card
                            sx={{
                                p: 2,
                                margin: 'auto',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                backGroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >

                            <Typography variant='h6' gutterBottom>
                                Name
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {data.firstName} {data.lastName}
                            </Typography>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid
                    item={true}
                    xs={16}
                    sm={16}
                    md={8}
                    lg={8}

                >
                    <CardActionArea
                        onClick={handleClick}
                        id="email"
                    >

                        <Card
                            sx={{
                                p: 2,
                                margin: 'auto',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                backGroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >

                            <Typography variant='h6' gutterBottom>
                                Email
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {data.email}
                            </Typography>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid
                    item={true}
                    xs={16}
                    sm={16}
                    md={8}
                    lg={8}

                >
                    <CardActionArea
                        onClick={handleClick}
                        id="address"
                    >

                        <Card
                            sx={{
                                p: 2,
                                margin: 'auto',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                backGroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >
                            <Typography variant='h6' gutterBottom>
                                Address
                            </Typography>
                            <Typography variant='body1'>
                                {data.address1}
                            </Typography>
                            <Typography variant='body1'>
                                {data.address2}
                            </Typography>
                            <Typography variant='body1'>
                                {data.city} {data.state} {data.zip}
                            </Typography>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid
                    item={true}
                    xs={16}
                    sm={16}
                    md={8}
                    lg={8}

                >
                    <CardActionArea
                        id="discord"
                        onClick={handleClick}
                    >

                        <Card
                            sx={{
                                p: 2,
                                margin: 'auto',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                backGroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >

                            <Typography variant='h6' gutterBottom>
                                Discord Username
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {data.discord}
                            </Typography>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid
                    item={true}
                    xs={16}
                    sm={16}
                    md={8}
                    lg={8}

                >
                    <CardActionArea
                        id="likes"
                        onClick={handleClick}
                    >

                        <Card
                            sx={{
                                p: 2,
                                margin: 'auto',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                backGroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >

                            <Typography variant='h6' gutterBottom>
                                Likes
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {data.likes}
                            </Typography>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid
                    item={true}
                    xs={16}
                    sm={16}
                    md={8}
                    lg={8}

                >
                    <CardActionArea
                        id="hate"
                        onClick={handleClick}
                    >

                        <Card
                            sx={{
                                p: 2,
                                margin: 'auto',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                backGroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >

                            <Typography variant='h6' gutterBottom>
                                Dislikes
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {data.dislikes}
                            </Typography>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid
                    item={true}
                    xs={16}
                    sm={16}
                    md={8}
                    lg={8}

                >
                    <CardActionArea
                        id="allergic"
                        onClick={handleClick}
                    >

                        <Card
                            sx={{
                                p: 2,
                                margin: 'auto',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                backGroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >

                            <Typography variant='h6' gutterBottom>
                                Allergies
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {data.allergies}
                            </Typography>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid
                    item={true}
                    xs={16}
                    sm={16}
                    md={8}
                    lg={8}

                >
                    <CardActionArea
                        id="charity"
                        onClick={handleClick}
                    >

                        <Card
                            sx={{
                                p: 2,
                                margin: 'auto',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                backGroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >

                            <Typography variant='h6' gutterBottom>
                                Charity
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {data.charity}
                            </Typography>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid
                    item={true}
                    xs={16}
                    sm={16}
                    md={8}
                    lg={8}

                >
                    <CardActionArea
                        onClick={handleClick}
                        id="gift"
                    >

                        <Card
                            sx={{
                                p: 2,
                                margin: 'auto',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'left',
                                flexDirection: 'column',
                                backGroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >
                            <Typography variant='h6' gutterBottom>
                                Gift Options
                            </Typography>
                            <Typography variant='body1'>
                                NSFW: {data.nsfw}
                            </Typography>
                            <Typography variant='body1'>
                                Backup Santa: {data.backup}
                            </Typography>
                            <Typography variant='body1'>
                                In Person Gifting: {data.irl}
                            </Typography>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </Box>
        <Dialog open={namePop} onClose={handleClose}>
            <Box component='form' onSubmit={handleSaveClose} id="name">
                <DialogTitle>Edit Name</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        (Yes it's separate fields, bite me)
                    </DialogContentText>
                    <TextField
                        inputProps={{maxLength: '20'}}
                        required
                        margin="dense"
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={firstNameValue}
                        onChange={handleFNChange}
                    />
                    <TextField
                        inputProps={{maxLength: '20'}}
                        required
                        margin="dense"
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={lastNameValue}
                        onChange={handleLNChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button name='Save' type='submit'>Save</Button>
                </DialogActions>
            </Box>
        </Dialog>
        <Dialog open={emailPop} onClose={handleClose}>
            <Box component='form' onSubmit={handleSaveClose} id="email">
                <DialogTitle>Edit Email</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Email change is not enabled at this time, if you need to change email, refer to DH admins.
                    </DialogContentText>

                    <TextField
                        inputProps={{maxLength: '50'}}
                        disabled
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        sx={{minWidth: '15rem'}}
                        variant="standard"
                        value={emailValue}
                        onChange={handleEmailChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button disabled name='Save' type='submit'>Save</Button>
                </DialogActions>
            </Box>
        </Dialog>
        <Dialog open={addressPop} onClose={handleClose}>
            <Box component='form' onSubmit={handleSaveClose} id="address">
                <DialogTitle>Edit Address</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit your address.
                    </DialogContentText>
                    <TextField
                        inputProps={{maxLength: '100'}}
                        required
                        margin="dense"
                        id="street"
                        name="address1"
                        label="Address Line 1"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={streetValue}
                        onChange={handleStreetChange}
                    />
                    <TextField
                        inputProps={{maxLength: '100'}}
                        margin="dense"
                        id="address-line2"
                        name="address-line2"
                        label="Address Line 2"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={line2Value}
                        onChange={handleLine2Change}
                    />
                    <TextField
                        inputProps={{maxLength: '50'}}
                        required
                        sx={{pr:2}}
                        id="city"
                        name="city"
                        label="City"
                        type="text"
                        variant="standard"
                        value={cityValue}
                        onChange={handleCityChange}
                    />
                    <Select
                        labelId="state"
                        label={"State"}
                        size={'small'}
                        variant='standard'
                        sx={{height:48, pt:2.5}}
                        required
                        id="state"
                        margin='dense'
                        value={stateValue}
                        name="state"
                        onChange={handleStateChange}
                    >
                        {addressState.map((aState) => (
                            <MenuItem key={aState} value={aState}>{aState}</MenuItem>
                        ))}
                    </Select>
                    <TextField
                        inputProps={{maxLength: '10'}}
                        required
                        sx={{px:2}}
                        id="zip"
                        name="zip"
                        label="Zip"
                        type="number"
                        variant="standard"
                        value={zipValue}
                        onChange={handleZipChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button name='Save' type='submit'>Save</Button>
                </DialogActions>
            </Box>
        </Dialog>
        <Dialog open={discordPop} onClose={handleClose}>
            <Box component='form' onSubmit={handleSaveClose} id="discord">
                <DialogTitle>Edit Discord Username</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit your Discord Username
                    </DialogContentText>

                    <TextField
                        inputProps={{maxLength: '50'}}
                        required
                        id="discord"
                        name="discord"
                        label="Discord Username"
                        type="text"
                        fullWidth
                        sx={{minWidth: '15rem'}}
                        variant="standard"
                        value={discordValue}
                        onChange={handleDiscordChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button name='Save' type='submit'>Save</Button>
                </DialogActions>
            </Box>
        </Dialog>
        <Dialog open={likePop} onClose={handleClose}>
            <Box component='form' onSubmit={handleSaveClose} id="likes">
                <DialogTitle>Edit Likes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit your likes.  Provide detail!
                    </DialogContentText>

                    <TextField
                        inputProps={{maxLength: '3000'}}
                        required
                        minRows={4}
                        maxRows={10}
                        multiline
                        id="likes"
                        name="likes"
                        label="Likes"
                        type="text"
                        fullWidth
                        sx={{minWidth: '15rem', mt:2}}
                        variant="outlined"
                        value={likeValue}
                        onChange={handleLikeChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button name='Save' type='submit'>Save</Button>
                </DialogActions>
            </Box>
        </Dialog>
        <Dialog open={hatePop} onClose={handleClose}>
            <Box component='form' onSubmit={handleSaveClose} id="dislikes">
                <DialogTitle>Edit Dislikes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit your Dislikes.  Don't forget Gary!
                    </DialogContentText>
                        <TextField
                        inputProps={{maxLength: '3000'}}
                        required
                        multiline
                        minRows={4}
                        maxRows={10}
                        id="dislikes"
                        name="dislikes"
                        label="Dislikes"
                        type="text"
                        fullWidth
                        sx={{minWidth: '15rem', mt:2}}
                        variant="outlined"
                        value={hateValue}
                        onChange={handleHateChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button name='Save' type='submit'>Save</Button>
                </DialogActions>
            </Box>
        </Dialog>
        <Dialog open={charityPop} onClose={handleClose}>
            <Box component='form' onSubmit={handleSaveClose} id="charity">
                <DialogTitle>Edit Charity</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit your preferred Charity
                    </DialogContentText>

                    <TextField
                        inputProps={{maxLength: '50'}}
                        id="charity"
                        name="charity"
                        label="Charity"
                        type="text"
                        fullWidth
                        sx={{minWidth: '15rem'}}
                        variant="outlined"
                        value={charityValue}
                        onChange={handleCharityChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button name='Save' type='submit'>Save</Button>
                </DialogActions>
            </Box>
        </Dialog>
        <Dialog open={allergicPop} onClose={handleClose}>
            <Box component='form' onSubmit={handleSaveClose} id="allergies">
                <DialogTitle>Edit Allergies</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit what's broken about you...I mean...allergies.
                    </DialogContentText>

                    <TextField
                        inputProps={{maxLength: '50'}}
                        id="allergy-text"
                        name="allergy-text"
                        label="Allergies"
                        type="text"
                        fullWidth
                        sx={{minWidth: '15rem'}}
                        variant="standard"
                        value={allergyValue}
                        onChange={handleAllergyChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button name='Save' type='submit'>Save</Button>
                </DialogActions>
            </Box>
        </Dialog>
        <Dialog open={giftPop} onClose={handleClose}>
            <Box component='form' onSubmit={handleSaveClose} id="gift">
                <DialogTitle>Edit Gift Options</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit your gift options.
                    </DialogContentText>
                    <Grid container direction={'column'}>
                    <FormControlLabel id="backup" name='backup' control={<Switch onChange={handleBackupChange} value={backupValue}/>} label="Serve as a Backup Santa?" />
                    <FormControlLabel id="irl" name='irl' control={<Switch onChange={handleIRLChange} value={irlValue}/>} label="In Person Gift Okay?" />
                        <Typography sx={{pt:2}}>NSFW Okay?</Typography>
                        <Select
                        labelId="NSFW"
                        id="nsfw"
                        name='nsfw'
                        autoWidth
                        value={nsfwValue}
                        onChange={handleNSFWChange}
                    >
                        <MenuItem key="No" value={"No"}>No</MenuItem>
                        <MenuItem key="Yes" value={"Yes"}>Yes</MenuItem>
                        <MenuItem key="Degenerate" value={"Degenerate"}>I'm a Degenerate</MenuItem>
                    </Select>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button name='Save' type='submit'>Save</Button>
                </DialogActions>
            </Box>
        </Dialog>
    </Container>)
}