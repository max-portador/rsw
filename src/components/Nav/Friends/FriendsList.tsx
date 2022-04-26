import React, {FC} from "react";
import css from "./FriendsList.module.css";
import Friend from "./FriendItem/FriendItem";
import {NavPropsType} from "../Nav";



const FriendsList:FC<NavPropsType> = (props) => {
    return (
        <div className={css.list}>
            {
                props.friends.map((d, i) => {
                    return <Friend name={d.name} image={d.image} key={i}/>
                })
            }
        </div>
    )
}

export default FriendsList;
