import React from "react";
import css from "./ProfileInfo.module.css";
import {user_icon} from "../../../redux/usersReducer";
import PreLoader from "../../common/PreLoader/PreLoader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    let profile = props.profile;
    let contacts = [];
    debugger
    if (profile)
        contacts = Object.keys(profile.contacts).filter(key => profile.contacts[key])
    return <div className={css.profileInfo}>
        <div>
            <img src="https://static.orgpage.ru/socialnewsphotos/3c/3cc80415aa324fa2833df20a6aaf7e3a.jpg"
                 className={css.img} alt="Praha"/>
        </div>
        { props.profile
            ?   <div className={css.description}>
                    <img className={css.photo_large} alt="фото пользователя"
                        src={props.profile.photos.large || user_icon}/>
                    <div>{"Имя: " + profile.fullName}</div>
                    {/*======================================= */}
                    {profile.aboutMe 
                    ?    <div><pre>
                                {`${"О себе:".padEnd(10, " ")} ${profile.aboutMe}`}
                        </pre></div> 
                    :   null}
                    {/*======================================= */}
                    {contacts.length 
                    ?   <div>{"Контакты"}</div> 
                    :   null}
                    {/*======================================= */}
                    <pre>
                        {contacts
                        .map( (val, id) => <div key={id}>
                                            { `${val.padEnd(10, " ")}: ${profile.contacts[val]}` || null }
                                            </div>
                        )}
                    </pre>
                    {/*======================================= */}
                    {profile.lookingForAJob && profile.lookingForAJobDescription
                    ?   <div>{profile.lookingForAJobDescription}</div>
                    :   null}
                    
                </div>
            :  <PreLoader/>
        }
        <ProfileStatus status={ props.status }
                        myId={props.myId}
                        updateStatus={props.updateStatus}/>
    </div>
}

export default ProfileInfo;