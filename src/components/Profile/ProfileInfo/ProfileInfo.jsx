import React from "react";
import css from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <div></div>
    }
    return <div>
        <div>
            <img src="https://static.orgpage.ru/socialnewsphotos/3c/3cc80415aa324fa2833df20a6aaf7e3a.jpg"
                 className={css.img} alt="Praha"/>
        </div>
        <div className={css.description}>
            <img src={props.profile.photos.large} alt="фото пользователя"/>
        </div>
    </div>
}

export default ProfileInfo;