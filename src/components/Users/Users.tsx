import React, {FC, useEffect} from "react";
import Pagination from "./Pagination/Pagination";
import User from "./User";
import css from "./Users.module.css";
import UsersSearchForm from "./UsersSearchForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/reduxStore";
import {requestUsers} from "../../redux/usersReducer";
import {useHistory} from "react-router-dom";
import {FilterFriendEnum} from "../../redux/usersReducer/types";


const Users: FC = () => {

    const { users, currentPage, pageSize, filter, followingInProgress } = useTypedSelector( state =>  state.usersPage)
    const dispatch = useDispatch<AppDispatch>()
    const history = useHistory();

    useEffect( () => {
        const params = Object.fromEntries(new URLSearchParams(history.location.search)) as
            {term: string, friend: null | string, page: string}
        let actualPage = currentPage
        let actualFilter = filter
        if ('page' in params){
            actualPage = Number(params.page)
        }
        if ('term' in params) {
            actualFilter = {...actualFilter, term: params.term}
        }

        if ('friend' in params){
            actualFilter = {
                ...actualFilter,
                friend: params.friend === FilterFriendEnum.ALL
                    ? FilterFriendEnum.ALL
                    : params.friend === FilterFriendEnum.ONLY_FRIENDS
                        ? FilterFriendEnum.ONLY_FRIENDS
                        : FilterFriendEnum.NOT_FRIENDS
            }
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        let search = ''
        if (filter.term){
            search += `term=${filter.term}`
        }
        if (filter.friend !== FilterFriendEnum.ALL) {
            search += (search.length > 1 ? `&` : '')  + `filter=${filter.friend}`
        }
        if (currentPage > 1) {
            search += (search.length > 1 ? `&` : '')  +  `page=${currentPage}`
        }

        history.push({
            pathname: '/users',
            search
        })

    }, [filter, currentPage])

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