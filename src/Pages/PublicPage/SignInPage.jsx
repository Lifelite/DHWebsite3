import * as React from 'react';
import {SignIn} from "@clerk/clerk-react";

export default function SignInPage() {
    return (
        <React.Fragment>
                <SignIn
                    redirectUrl={'/user'}
                />
        </React.Fragment>
    );
}
