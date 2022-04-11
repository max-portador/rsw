import React from "react";
import Pagination from "./Pagination/Pagination";
import User from "./User";
import css from "./Users.module.css";

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