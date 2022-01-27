import React from "react";
import css from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={css.nav}>
        <div>
            <NavLink to="/profile" className={ navData => navData.isActive ? css.active : "" }>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" className={ navData => navData.isActive ? css.active : "" }>Messages</NavLink>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
}

export default Nav;