import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
export function InfoItem(props) {
    const label = props.label
    const info = props.info

    return (


            <Grid
                item={true}
                xs={16}
                sm={16}
                md={8}
                lg={8}

            >
                <Paper
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

                </Paper>

            </Grid>



    )
}