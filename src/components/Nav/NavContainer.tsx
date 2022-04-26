import {connect} from "react-redux";
import Nav from "./Nav";
import {RootState} from "../../redux/reduxStore";


let mapStateToProps = (state: RootState) => {
    return {
        friends: state.sideBar.friends,
    };
}

const NavContainer = connect(mapStateToProps, null)(Nav);

export default NavContainer;