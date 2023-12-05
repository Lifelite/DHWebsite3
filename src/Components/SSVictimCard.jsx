import Typography from "@mui/material/Typography";
import * as React from "react";
import Paper from "@mui/material/Paper";

export function SSVictimCard(props) {
    const {
        label,
        children
    } = props

    return (
        <Paper
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
                {label}
            </Typography>
            {children}
        </Paper>
    )
}