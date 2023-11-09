import Typography from "@mui/material/Typography";
import {useUser} from "@clerk/clerk-react";


const user = () => {
    try {
        return useUser().user
    }catch (e) {
        return null
    }

}

let today = new Date()
let holiday = new Date(2023, 12, 25)

let daysTill = holiday.getDay() - today.getDay()
export function UserHome() {
    return (
        <>
            <Typography>Welcome ${user.firstName}</Typography>
            <Typography>It is ${daysTill} till Christmas!</Typography>
        </>
    )
}