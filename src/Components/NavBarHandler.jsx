import MobileNav from "./MobileNav";
import NavBar from "./NavBar";


export function NavBarHandler(props) {

    if (props.isMobile === true) {
        return <MobileNav />
    } else {
        return <NavBar />
    }

}