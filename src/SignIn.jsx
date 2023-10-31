import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {initializeApp} from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://DrunkenHuntsman.com">
                Drunken Huntsman
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}




// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const firebaseConfig = {
    apiKey: "AIzaSyBwUiYjX6d8azQobMYTmfWoV0GNEmJ-7AI",
    authDomain: "drunken-huntsman-website.firebaseapp.com",
    databaseURL: "https://drunken-huntsman-website-default-rtdb.firebaseio.com",
    projectId: "drunken-huntsman-website",
    storageBucket: "drunken-huntsman-website.appspot.com",
    messagingSenderId: "372293584198",
    appId: "1:372293584198:web:31790e84ba875b9f825147",
    measurementId: "G-ZS15LY1VT3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();



export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let email = data.get('email');
        let password = data.get('password');

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                        px: 6,
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Admin Sign in
                    </Typography>
                    <Box component="form" id="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" id="Remember"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
