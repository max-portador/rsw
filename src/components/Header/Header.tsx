import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import css from "./Header.module.css";

const Header: FC<PropsType> = (props) => {
   return <header className={css.header}>
        <img src="https://img.icons8.com/nolan/50/venn-diagram.png" alt='header logo'/>
       <div className={css.loginBlock}>
           {
               props.isAuth
                   ? <span>
                        {props.login} -
                       <button onClick={ props.authLogout }>Logout</button>
                   </span>
                   // : ""
                   : <NavLink to={"/login"}>Login</NavLink>
           }

       </div>
    </header>
}

export default Header;

type PropsType = {
    isAuth: boolean,
    login: string,
    authLogout: () => void,
}