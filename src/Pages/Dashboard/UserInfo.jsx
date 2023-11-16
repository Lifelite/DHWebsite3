import * as React from "react";
import {Backdrop, CircularProgress} from "@mui/material";
import {UserInfoSheet} from "../../Components/UserInfoSheet";


export function UserInfo(props) {
    const data = props.userData

    function showView () {
        if (props.userData) {
            return <UserInfoSheet data={data} />
        }
    }

    return (
        <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            transitionDuration={1000}
            open={false}
        >
            <CircularProgress color="inherit" />


        </Backdrop>
            {showView()}
</>
    )
}
