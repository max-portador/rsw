import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import css from "./Profile.module.css";

const Profile = (props) => {
    return <div className={css.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
    </div>
}

export default Profile;