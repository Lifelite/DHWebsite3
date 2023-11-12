import Typography from "@mui/material/Typography";
import {remainingDays} from "../../functions/christmasCountDown";
import React from "react";
import {useUser} from "@clerk/clerk-react";
import Box from "@mui/material/Box";


export function SSUserHome() {
    const user = useUser().user
    const firstName = user.firstName

    return (
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
            <Typography
                component="h2"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Welcome {firstName}!
            </Typography>
            <Typography
                component="h4"
                variant="h4"
                align="center"
                color="text.secondary"
            >
                It is {remainingDays} till Christmas!
            </Typography>
                <Typography
                    component="h5"
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                    sx={{pt:5, px:2}}
                >
                    Secret Santa sorting is coming soon!  Signups are ongoing, and we're looking
                    to expand these "under construction" pages to add more functionality and
                    make this year's Secret Santa awesome!  Look out for announcements on Discord!
                </Typography>
            </Box>
        </>
    )
}