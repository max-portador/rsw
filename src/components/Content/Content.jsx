import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import css from "./Content.module.css";

const Content = (props) => {
    return  <div className={css.content}>
        <ProfileInfo/>
        <MyPosts state={props.state} dispatch={props.dispatch}/>

    </div>
}

export default Content;