import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import Container from "@mui/material/Container";
import {SantaInfo} from "../../../Data/mySQL";
import {VictimSSInfo} from "../../functions/victimInfo";
import {VictimInfoGrid} from "../../Components/VictimInfoGrid";
import {GiftSentButton} from "../../Components/GiftSentButton";

export function VictimInfo(props) {

    const {
        userID,
        userEmail,
        userData
    } = props

    let showButton = useRef(true)

    const [data, setData] = useState(undefined)

    useEffect(() => {


        async function fetchData() {
            try {
                const si = new SantaInfo(userData.victimName, userEmail)
                let vi = await si.getVictimData()
                const victim = await new VictimSSInfo(vi)
                await setData(victim.getInfo())
            }catch (e) {
                console.log(e)
            }
        }
        fetchData()

    }, []);



    function vInfo() {
        if (data) {
            showButton = false
            return <VictimInfoGrid data={data} />
        }else {
            showButton = true
            return <Typography>Coming soon</Typography>
        }
    }

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
                    <Typography component="h2" variant="h4" mb={3} gutterBottom>
                        Your Victim's Info
                    </Typography>
                    {vInfo()}
                    <Box hidden={showButton}>
                        <GiftSentButton user={userID} userData={userData}/>
                    </Box>
                </Box>
            </Container>
        )
}
