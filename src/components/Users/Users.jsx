import React from "react";
import UserAvaBtn from "./UserAvaBtn/UserAvaBtn";
import UserBoxInfo from "./UserBoxInfo/UserBoxInfo";
import {user_icon} from "../../redux/usersReducer";
import css from "./Users.module.css";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={css.users}>
            <div>
                {
                    pages.map(p =>
                        <span
                            className={`${css.pageNum} ${props.currentPage === p && css.selected}`}
                            onClick={() => {props.onPageChanged(p) }}>
                            {p}
                        </span>)
                }
            </div>


            {(props.users.map(user =>
                    <div key={user.id}>

                            <span className={css.user}>
                                <UserAvaBtn id={user.id}
                                            img={(props.users.photos ? props.users.photos.small : user_icon)}
                                            follow={props.follow}
                                            followed={user.followed}
                                            unfollow={props.unfollow}/>

                                <UserBoxInfo followed={user.followed} fullName={user.name}
                                             status={user.status} location={{city: "city", country: "country"}}/>
                            </span>
                    </div>
                )
            )}
        </div>
    )
}

export default Users;