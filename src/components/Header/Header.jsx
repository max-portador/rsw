import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Header.module.css";

const Header = (props) => {
   return <header className={css.header}>
        <img src="https://img.icons8.com/nolan/50/venn-diagram.png" alt='header logo'/>
       <div className={css.loginBlock}>
           {
               props.isAuth
                   ? <span>
                        {props.login} -
                       <button onClick={ props.authLogout }>Logout</button>
                   </span>
                   : null
                   // : <NavLink to={"/login"}>Login</NavLink>
           }

       </div>
    </header>
}

export default Header;