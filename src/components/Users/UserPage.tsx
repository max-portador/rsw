import React, {FC} from "react";
import Users from "./Users";
import PreLoader from "../common/PreLoader/PreLoader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Redirect} from "react-router-dom";


const UsersPage: FC = () => {
    const { isFetching } = useTypedSelector(state => state.usersPage)
    const { isAuth } = useTypedSelector(state => state.auth)

    if (isAuth){
        return <>
            {isFetching ? <PreLoader/> : null}
            <Users />
        </>
    } else {
        return <Redirect to='/login' />
    }


};


export default UsersPage
