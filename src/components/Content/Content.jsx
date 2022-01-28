import React from "react";
import css from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = () => {
    return  <div className={css.content}>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}

export default Content;