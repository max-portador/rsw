import css from "./Users.module.css"
import {user_icon} from "../../redux/usersReducer";

const UserFollowBtn = (props) => {
    if (props.followed) {
        return (
            <button className={css.button + " " + css.followed}
                    onClick={() => {
                        props.unfollow(props.id)
                    }}
            > UNFOLLOW </button>
        )
    }
    return (
        <button className={css.button}
                onClick={() => {
                    props.follow(props.id)
                }}
        > FOLLOW </button>)
}

const UserAvaBtn = (props) => {
    return (
        <div className={css.ava_btn}>
            <img className={css.img} src={props.img} alt="user ava"/>
            <UserFollowBtn followed={props.followed} follow={props.follow} unfollow={props.unfollow} id={props.id}/>
        </div>
    )
}

const UserBoxInfo = (props) => {
    return (
        <div className={css.info_box + " " + (!props.followed || css.followed_info_box)}>
                        <span className={css.info}>
                            <div>{props.fullName}</div>
                            <div>{props.status}</div>
                        </span>
            <span className={css.location}>
                            <div>{props.location.country}</div>
                            <div>{props.location.city}</div>
                        </span>
        </div>
    )
}

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    followed: true,
                    img: user_icon,
                    fullName: 'Artyom',
                    status: 'I,m a boss',
                    location: {city: 'Samara', country: 'Russia'}
                },
                {
                    id: 2,
                    followed: true,
                    img: user_icon,
                    fullName: 'Maksim',
                    status: 'I,m a middle developer',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    followed: false,
                    img: user_icon,
                    fullName: 'Svetlana',
                    status: 'I,m a model',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 4,
                    followed: false,
                    img: user_icon,
                    fullName: 'Anna',
                    status: 'I,m a couch',
                    location: {city: 'Saint Petersburg', country: 'Russia'}
                },
            ],
        )

    }

    return (
        <div className={css.users}>
            {(props.users.map(user =>
                    <div key={user.id}>
                        <span className={css.user}>
                            <UserAvaBtn id={user.id} img={user.img} follow={props.follow}
                                        followed={user.followed}
                                        unfollow={props.unfollow}/>

                            <UserBoxInfo followed={user.followed} fullName={user.fullName}
                                         status={user.status} location={user.location}/>
                        </span>
                    </div>)
            )}
        </div>
    )
}

export default Users;