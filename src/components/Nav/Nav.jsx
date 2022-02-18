import React from "react";
import {NavLink} from "react-router-dom";
import FriendsList from "./Friends/FriendsList";
import css from "./Nav.module.css";

const Nav = (props) => {
    return <nav className={css.nav}>
        <div className={css.links}>
            <NavLink to="/profile" className={navData => navData.isActive ? css.active : ""}>Profile</NavLink>
            <NavLink to="/dialogs" className={navData => navData.isActive ? css.active : ""}>Messages</NavLink>
            <NavLink to="/users" className={navData => navData.isActive ? css.active : ""}>Users</NavLink>
            <NavLink to="/news" className={navData => navData.isActive ? css.active : ""}>News</NavLink>
            <NavLink to="/music" className={navData => navData.isActive ? css.active : ""}>Music</NavLink>
            <NavLink to="/settings" className={navData => navData.isActive ? css.active : ""}>Settings</NavLink>
        </div>

        <FriendsList friends={props.friends}/>
    </nav>
}

export default Nav;