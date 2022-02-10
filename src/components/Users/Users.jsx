import css from "./Users.module.css"

const Users = (props) => {
    return (
        <div className={css.users}>
            {String(props.length)}
        </div>
    )
}

export default Users;