import {useUser} from "@clerk/clerk-react";
import {SantaInfo} from "../../../Data/mySQL";
import {UserSSInfo} from "../../functions/userInfo";
import React from "react";
import {SSUserHome} from "./SSUserHome";
import {Navigate} from "react-router-dom";


export function UserHome() {

    const user = useUser().user;

    const userEmail = user.emailAddresses[0];
    const ssUser = user.id;
    const [page, setPage] = React.useState("")
    const userPage = async () => {try {
        const sInfo = await new SantaInfo(ssUser, userEmail);
        const info = await sInfo.getSantaData()
        const ss = await new UserSSInfo(info);
        if (await ss.checkForAccount()) {
            setPage("ss")
        }else{
            // let navigate = useNavigate()
            // navigate('/newUser')
            setPage("newUser")
        }
    } catch (e) {
        console.log(e)
        // let navigate = useNavigate()
        // navigate('/newUser')
        setPage("newUser")
    }};

    const currentPage = () => {
        userPage().catch((e) => {
            console.log(e)
            setPage("nope")
        })
        if (page === "newUser") {
            return <Navigate to={"/newUser"}/>
        }else{
            return <SSUserHome />
        }
    };


    return(
        <>
            {currentPage()}
        </>
    )
}