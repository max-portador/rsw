import React from "react";
import axios from "axios";
import UserAvaBtn from "./UserAvaBtn/UserAvaBtn";
import UserBoxInfo from "./UserBoxInfo/UserBoxInfo";
import {user_icon} from "../../redux/usersReducer";
import css from "./Users.module.css"


const Users = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
            props.setUsers(response.data.items)
        })

        // props.setUsers(
        //     [
        //         {
        //             id: 1,
        //             followed: true,
        //             img: user_icon,
        //             fullName: 'Artyom',
        //             status: 'I,m a boss',
        //             location: {city: 'Samara', country: 'Russia'}
        //         },
        //         {
        //             id: 2,
        //             followed: true,
        //             img: user_icon,
        //             fullName: 'Maksim',
        //             status: 'I,m a middle developer',
        //             location: {city: 'Moscow', country: 'Russia'}
        //         },
        //         {
        //             id: 3,
        //             followed: false,
        //             img: user_icon,
        //             fullName: 'Svetlana',
        //             status: 'I,m a model',
        //             location: {city: 'Kiev', country: 'Ukraine'}
        //         },
        //         {
        //             id: 4,
        //             followed: false,
        //             img: user_icon,
        //             fullName: 'Anna',
        //             status: 'I,m a coach',
        //             location: {city: 'Saint Petersburg', country: 'Russia'}
        //         },
        //     ],
        // )

    }
    return (
        <div className={css.users}>
            {(props.users.map(user =>
                    <div key={user.id}>

                            <span className={css.user}>
                                <UserAvaBtn id={user.id} img={( props.users.photos  ? props.users.photos.small : user_icon)}
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