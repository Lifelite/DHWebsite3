import {useUser} from "@clerk/clerk-react";
import AdminDashboard from "../../Pages/AdminPage/AdminDashboard";
import {NotAuthorized} from "../../Pages/AdminPage/NotAuthorized";

export function AdminAuth() {

    const user = useUser().user
    const isAdmin = user.publicMetadata["admin"]


    function verifyAdmin () {
        if (isAdmin){
            return <AdminDashboard/>
        }else{
            return <NotAuthorized />
        }
    }



    return (
        <>
            {verifyAdmin()}
        </>
    )
}