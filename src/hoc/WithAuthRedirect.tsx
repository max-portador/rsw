import React, {FC} from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import {RootState} from "../redux/reduxStore";

const withAuthRedirect = <WCP, >(Component: React.ComponentType<WCP>) => {
    const RedirectComponent: FC<MapStatePropsType> = (props) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as WCP}/>
    }

    let mapStateToPropsForRedirect = (state: RootState) =>({
        isAuth: state.auth.isAuth,
    })
    
    return connect<MapStatePropsType, unknown, WCP, RootState >(mapStateToPropsForRedirect)(RedirectComponent)
}

export default withAuthRedirect;

type MapStatePropsType = {
    isAuth: boolean,
}