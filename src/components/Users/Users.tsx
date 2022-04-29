import React, {FC, useEffect} from "react";
import Pagination from "./Pagination/Pagination";
import User from "./User";
import css from "./Users.module.css";
import UsersSearchForm from "./UsersSearchForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/reduxStore";
import {requestUsers} from "../../redux/usersReducer";


const Users: FC = () => {

    const { users, currentPage, pageSize, filter, followingInProgress } = useTypedSelector( state =>  state.usersPage)
    const dispatch = useDispatch<AppDispatch>()

    useEffect( () => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    return (
        <div className={css.users}>
            <span className={css.title}>САМУРАИ</span>
            <UsersSearchForm />
           <Pagination />
            {(users.map(user => <User user={ user } key={ user.id } followingInProgress={followingInProgress}/> ) )}
        </div>
    )
}

export default Users;