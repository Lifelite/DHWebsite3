import Grid from "@mui/material/Grid";
import {SSVictimCard} from "./SSVictimCard";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function VictimInfoGrid(props) {

    const {
        data
    } = props



    return (
        <Grid
            container={true}
            spacing={2}
            columns={16}
            mt={3}
            sx={{alignItems: "stretch"}}
            gridTemplateColumns="repeat(6, 1fr)"
        >
            <Grid item={true}
                  xs={16}
                  sm={16}
                  md={8}
                  lg={8}>
                <SSVictimCard label={"Name"}>
                    <Typography variant='body1' gutterBottom>
                        {data.firstName} {data.lastName}
                    </Typography>
                </SSVictimCard>
            </Grid>
            <Grid item={true}
                  xs={16}
                  sm={16}
                  md={8}
                  lg={8}>
                <SSVictimCard label={"Address"}>
                    <Typography variant='body1' gutterBottom>
                        {data.address1}
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        {data.address2}
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        {data.city} {data.state} {data.zip}
                    </Typography>
                </SSVictimCard>
            </Grid>
            <Grid item={true}
                  xs={16}
                  sm={16}
                  md={8}
                  lg={8}>
                <SSVictimCard label={"Likes"}>
                    <Typography variant='body1' gutterBottom>
                        {data.likes}
                    </Typography>
                </SSVictimCard>
            </Grid>
            <Grid item={true}
                  xs={16}
                  sm={16}
                  md={8}
                  lg={8}>
                <SSVictimCard label={"Dislikes"}>
                    <Typography variant='body1' gutterBottom>
                        {data.dislikes}
                    </Typography>
                </SSVictimCard>
            </Grid>
            <Grid item={true}
                  xs={16}
                  sm={16}
                  md={8}
                  lg={8}>
                <SSVictimCard label={"Allergies"}>
                    <Typography variant='body1' gutterBottom>
                        {data.allergies}
                    </Typography>
                </SSVictimCard>
            </Grid>
            <Grid item={true}
                  xs={16}
                  sm={16}
                  md={8}
                  lg={8}>
                <SSVictimCard label={"Gift Preferences"}>
                    <Typography variant='body1' gutterBottom>
                        NSFW Okay: {data.nsfw}
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        In Person Gifting Okay: {data.irl}
                    </Typography>
                </SSVictimCard>
            </Grid>
        </Grid>
    )
}