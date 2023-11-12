import {Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import * as React from "react";
import Grid from "@mui/material/Grid";
import {InfoItem} from "./InfoItem";

export function UserInfoSheet(props) {
    const data = props.data

    const name = `${data.firstName} ${data.lastName}`
    const email = `${data.email}`
    const discord = `${data.discord}`
    const likes = `${data.likes}`
    const dislikes = 'dislikes' in data ?`${data.dislikes}`: null
    const allergies = `${data.allergies}`
    const charity = `${data.charity}`


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
                <Typography component="h2" variant="h4" mb={6} gutterBottom>
                    Your Secret Santa Info
                </Typography>
                <Grid
                    container={true}
                    spacing={2}
                    columns={16}

                    sx={{alignItems: "stretch"}}
                    gridTemplateColumns="repeat(5, 1fr)"
                >
                    <InfoItem
                        label={"Name"}
                        info={name}
                    />
                    <InfoItem
                        label={"Email"}
                        info={email}
                    />
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
                        </Paper>
                    </Grid>
                    <InfoItem
                        label={"Discord Username"}
                        info={discord}
                    />
                    <InfoItem
                        label={"Likes"}
                        info={likes}
                    />
                    <InfoItem
                        label={"Dislikes"}
                        info={dislikes}
                    />
                    <InfoItem
                        label={"Allergies"}
                        info={allergies}
                    />
                    <InfoItem
                        label={"Charity"}
                        info={charity}
                    />
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
                    </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}