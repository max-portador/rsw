import React from "react";
import css from "./Users.module.css";
import Pagination from "./Pagination/Pagination";
import User from "./User";

const Users = ({users, followingInProgress, follow, unfollow,  ...props}) => {

    return (
        <div className={css.users}>
           <Pagination {...props}/>
            {(users.map(user =>
                    <User user={ user }
                          key={ user.id }
                          followingInProgress = {followingInProgress}
                          follow = { follow }
                          unfollow = { unfollow } />
                )
            )}
        </div>
    )
}

export default Users;