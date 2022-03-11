import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import css from "./Profile.module.css";

const Profile = (props) => {
    debugger
    return <div className={css.content}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
    </div>
}

export default Profile;