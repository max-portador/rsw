import React, {FC} from "react";
import ProfileInfo, {ProfileInfoPropsType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import css from "./Profile.module.css";


const Profile:FC<ProfileInfoPropsType> = (props) => {
    return <div className={css.content}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
    </div>
}

export default Profile;