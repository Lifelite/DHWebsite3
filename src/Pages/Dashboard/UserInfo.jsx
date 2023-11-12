import Typography from "@mui/material/Typography";
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {SantaInfo} from "../../api/MySQL/mySQL";
import {UserSSInfo} from "../../functions/userInfo";
import {useUser} from "@clerk/clerk-react";
import {useEffect, useState} from "react";
import {Backdrop, CircularProgress} from "@mui/material";
import {UserInfoSheet} from "../../Components/UserInfoSheet";


export function UserInfo(props) {
    const currentUser = useUser().user;
    const userID = currentUser.id;
    const userEmail =  currentUser.emailAddresses[0]
    // const [data, setData] = useState(null);
    const [loading, isLoading] = React.useState(true);
    const data = props.userData


    console.log(props.userData)

    function showView () {
        if (props.userData) {
            return <UserInfoSheet data={data} />
        }
    }

    return (
        <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}

        >
            <CircularProgress color="inherit" />


        </Backdrop>
            {showView()}
</>
    )
}
