import Typography from "@mui/material/Typography";
import {Card, CardActionArea} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export function InfoItem(props) {
    const label = props.label
    const info = props.info

    const [pop, setPop] = React.useState(false)

    const handleClick = (e) => {
        setPop(true)
    }

    return (


            <Grid
                item={true}
                xs={16}
                sm={16}
                md={8}
                lg={8}

            >
                <CardActionArea
                onClick={() => handleClick(label)}
                >

                <Card
                    sx={{
                        p: 2,
                        margin: 'auto',
                        flexGrow: 1,
                        backGroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >

                <Typography variant='h6' gutterBottom>
                     {label}
                </Typography>
                <Typography variant='body1' gutterBottom>
                    {info}
                </Typography>
                </Card>
                </CardActionArea>
            </Grid>
    )
}

export function EditNameModal(props) {
    const data = props.data ? props.data : "null"
    const firstName = data.firstName ? data.firstName : ""
    const lastName = data.lastName ? data.lastName : ""
    const pop = props.pop

    const [open, setOpen] = useState(pop);
    const [firstNameValue, setFirstNameValue] = useState(firstName)
    const [lastNameValue, setLastNameValue] = useState(lastName)

    const handleLNChange = (e) => {
        const value = e.target;
        setLastNameValue(value)
    }

    const handleFNChange = (e) => {
        const value = e.target;
        setFirstNameValue(value)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveClose = (saveField) => {

        setOpen(false)
    }

    return (
        <Dialog component='form' open={open} onClose={handleClose}>
            <DialogTitle>Edit Name</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    (Yes it's separate fields, bite me)
                </DialogContentText>
                <TextField
                    inputProps={{ maxLength: '20' }}
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
                    inputProps={{ maxLength: '20' }}
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
                <Button type='submit' name='Save' onClick={handleSaveClose}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}