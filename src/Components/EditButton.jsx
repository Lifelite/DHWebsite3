import EditIcon from "@mui/icons-material/Edit";
import {Fab} from "@mui/material";
import React from "react";

export function EditButton(props) {
    const field = props.fieldType


    return (
        <Fab size="small" color="secondary" aria-label="add" sx={{position: 'relative', left:'90%', top:'20%'
        }}>
            <EditIcon />
        </Fab>
    )
}