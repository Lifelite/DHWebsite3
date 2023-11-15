import theme from "../../theme";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import {useUser} from "@clerk/clerk-react";
import {SantaInfo} from "../../api/MySQL/mySQL";
import {UserSSInfo} from "../../functions/userInfo";
import {Backdrop, CircularProgress} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AssociationAlert from "../../Components/AssociationError";


export default function NewUserHome() {

    const currentUser = useUser().user
    const userID = currentUser.id
    const userEmail = currentUser.emailAddresses[0]
    const handleAssociateAccount = async (id, email) => {
        await isLoading(true)
        const sInfo = await new SantaInfo(id, email)
        const info = await sInfo.getSantaData()
        const userInfo = await new UserSSInfo(info)


        if (await userInfo.checkForAccountToLink()) {
            try {
                await sInfo.associateUserName().then(r => {
                    console.log("Account Associated" + r)
                    navigate('/user')
                })
            } catch (e) {
                popAlert(true)
            }
        } else {
            console.log("Account not found")
            popAlert(true)
        }
        isLoading(false)
    };

    const [loading, isLoading] = React.useState(false);
    const [alert, popAlert] = React.useState(false)
    const navigate = useNavigate()

    const handleEventNav = () => {
        navigate('/events')
    }


    return (
        <ThemeProvider theme={theme}>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={loading}

            >
                <CircularProgress color="inherit"/>


            </Backdrop>
            <AssociationAlert open={alert}/>
            <CssBaseline/>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                        display: 'flex',
                        flexShrink:1,
                        alignItems: 'center',
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Welcome my fellow Drunken Hunts.....person?
                        </Typography>
                        <Typography variant="paragraph" align="center" color="text.secondary" paragraph>
                            Hello! This user portal is currently built for those participating
                            in the DH Secret Santa event.
                        </Typography>
                        <Typography variant="paragraph" align="center" color="text.secondary" paragraph>
                            Currently you don't have an account associated to a Secret Santa application.
                            If you have filled one out, please click the "Link Account" button. If you
                            still need to sign up, please click the "Sign Up" button to sign up,
                            then head right back over here to link your account!
                        </Typography>
                        <Stack
                            sx={{pt: 4}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained"
                                    onClick={() => handleAssociateAccount(userID, userEmail.emailAddress)}>Link
                                Account</Button>
                            <Button variant="contained" onClick={handleEventNav}>Sign Up</Button>

                        </Stack>
                        <Stack
                            sx={{pt: 4}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button align="center" variant="outlined" href={'/'}>Go to Homepage</Button>
                        </Stack>

                    </Container>

                </Box>
            </main>
        </ThemeProvider>
    );
}