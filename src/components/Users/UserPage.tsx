import React, {FC} from "react";
import Users from "./Users";
import PreLoader from "../common/PreLoader/PreLoader";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const UsersPage: FC = () => {
    const { isFetching } = useTypedSelector(state => state.usersPage)
    return <>
        {isFetching ? <PreLoader/> : null}
        <Users />
    </>
};

export default UsersPage
