import React from "react";
import axios from "axios";
import UserAvaBtn from "./UserAvaBtn/UserAvaBtn";
import UserBoxInfo from "./UserBoxInfo/UserBoxInfo";
import {user_icon} from "../../redux/usersReducer";
import css from "./Users.module.css"



class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <div className={css.users}>
                {(this.props.users.map(user =>
                        <div key={user.id}>

                            <span className={css.user}>
                                <UserAvaBtn id={user.id} img={( this.props.users.photos  ? this.props.users.photos.small : user_icon)}
                                            follow={this.props.follow}
                                            followed={user.followed}
                                            unfollow={this.props.unfollow}/>

                                <UserBoxInfo followed={user.followed} fullName={user.name}
                                             status={user.status} location={{city: "city", country: "country"}}/>
                            </span>
                        </div>
                    )
                )}
            </div>
        )
    }

}

export default Users;