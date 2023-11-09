import MobileNav from "./MobileNav";
import NavBar from "./NavBar";


export function NavBarHandler(props) {

    if (props.isMobile === true) {
        return <MobileNav
            userFlow={props.userFlow}
        />
    } else {
        return <NavBar
            userFlow={props.userFlow}
        />
    }

}