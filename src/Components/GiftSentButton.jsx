import Box from "@mui/material/Box";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import {LogisticConfirm} from "../../Data/mySQL";


export function GiftSentButton(props) {
    const {
        user,
        userData
    } = props



    const [modalPop, setModalPop] = useState(false)
    const handleShipClick = () => {
        setModalPop(true)
    }

    const handleClose = () => {
        setModalPop(false)
    }

    const handleSaveClose = (e) => {
        e.preventDefault();
        let s = new LogisticConfirm(user)
        s.shipped().then(r => {
            console.log("Confirmed" + r)
        }).catch(e => {
            console.log(e)
        });
        handleClose()
    }

    const confirmText = "Confirm that your gift has been shipped off to your victim! " +
        "Or if you just wanted to see what this button did, click cancel."

    const alreadyShippedText = "You already said you shipped!  But while you're here, let me tell you a story...." +
        "Have you ever heard the tragedy of Darth Plagueis the Wise? I thought not. " +
        "It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, " +
        "so powerful and so wise he could use the Force to influence the midichlorians to create life… " +
        "He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. " +
        "The dark side of the Force is a pathway to many abilities some consider to be unnatural. " +
        "He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. " +
        "Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. " +
        "Ironic. He could save others from death, but not himself"

    const hasShipped = () => {
        if (userData.sent) {
            return alreadyShippedText
        }else{
            return confirmText
        }
    }

    const buttonText = () => {
        if (!userData.sent) {
            return "I sent the Gift!"
        }
        else {
            return "No reason to click this"
        }
    }



    return (
        <Box sx={{pt:6}}>
            <Button
                variant="contained"
                startIcon={<LocalShippingIcon/>}
                onClick={handleShipClick}
            >
                {buttonText()}
            </Button>
            <Dialog open={modalPop} onClose={handleClose}>
                <Box component='form' onSubmit={handleSaveClose} id="allergies">
                    <DialogTitle>Confirmed Gift Shipped</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {hasShipped()}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button name='Save' type='submit'>Confirm</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </Box>
    )
}