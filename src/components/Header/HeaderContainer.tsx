import React from "react";
import {connect, ConnectedProps } from "react-redux";
import Header from "./Header";
import {authLogout} from "../../redux/authReducer";
import {RootState} from "../../redux/reduxStore";


class HeaderContainer extends React.Component<ConnectedType>{

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

const connector = connect(mapStateToProps, {authLogout});

export default connector(HeaderContainer);

type ConnectedType = ConnectedProps<typeof connector>