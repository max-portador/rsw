import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import css from "./Content.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Content = () => {
    return <div className={css.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
    </div>
}

export default Content;