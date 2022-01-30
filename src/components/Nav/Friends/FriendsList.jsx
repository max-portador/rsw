import React from "react";
import css from "./FriendsList.module.css";
import Friend from "./FriendItem/FriendItem";



const FriendsList = (props) => {
    return (
        <div className={css.list}>
            {
                props.friends.map(d => {
                    return <Friend name={d.name} image={d.image}/>
                })
            }
        </div>
    )
}

export default FriendsList;
