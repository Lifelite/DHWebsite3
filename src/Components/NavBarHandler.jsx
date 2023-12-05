import MobileNav from "./MobileNav";
import NavBar from "./NavBar";


export function NavBarHandler(props, {children}) {

    if (props.isMobile === true) {
        return <MobileNav
            userFlow={props.userFlow}
            startTab={props.startTab}
        >{children}</MobileNav>
    } else {
        return <NavBar
            userFlow={props.userFlow}
            startTab={props.startTab}
        >{children}</NavBar>
    }

}