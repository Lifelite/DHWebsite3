import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

export function EditButton(props) {
    //const field = props.fieldType


    return (
        <Button variant="contained" size="medium" color="secondary" aria-label="edit">
            Edit Information
        </Button>
    )
}