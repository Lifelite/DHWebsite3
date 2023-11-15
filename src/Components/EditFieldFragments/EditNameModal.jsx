import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useState} from "react";


export function EditNameModal(props) {
    const data = props.data
    const pop = props.pop

    const [open, setOpen] = useState(true);
    const [firstNameValue, setFirstNameValue] = useState(data.firstName)
    const [lastNameValue, setLastNameValue] = useState(data.lastName)

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