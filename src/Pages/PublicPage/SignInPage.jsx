import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {SignIn, SignUp} from "@clerk/clerk-react";


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


export default function SignInPage() {
    return (
        <React.Fragment>
                <SignIn />
        </React.Fragment>
    );
}
