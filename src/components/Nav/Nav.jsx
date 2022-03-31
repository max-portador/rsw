import React from "react";
import {NavLink} from "react-router-dom";
import FriendsList from "./Friends/FriendsList";
import css from "./Nav.module.css";

const Nav = (props) => {
    return <nav className={css.nav}>
        <div className={css.links}>
            <NavLink to="/profile" activeClassName={css.active} >Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={css.active} >Messages</NavLink>
            <NavLink to="/users" activeClassName={css.active} >Users</NavLink>
            <NavLink to="/news" activeClassName={css.active} >News</NavLink>
            <NavLink to="/music" activeClassName={css.active} >Music</NavLink>
            <NavLink to="/settings" activeClassName={css.active} >Settings</NavLink>
        </div>

        <FriendsList friends={props.friends}/>
    </nav>
}

export default Nav;