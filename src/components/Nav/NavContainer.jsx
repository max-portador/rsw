import {connect} from "react-redux";
import Nav from "./Nav";


let mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends,
    };
}

const NavContainer = connect(mapStateToProps, null)(Nav);

export default NavContainer;