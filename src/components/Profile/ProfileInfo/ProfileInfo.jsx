import React, {useState} from "react";
import css from "./ProfileInfo.module.css";
import {user_icon} from "../../../redux/usersReducer";
import PreLoader from "../../common/PreLoader/PreLoader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, myId, isOwner,  updateStatus, savePhoto}) => {

    let [editMode, setEditMode] = useState(false);

    const onPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }
    return <div className={css.profileInfo}>
        <div>
            <img src="https://static.orgpage.ru/socialnewsphotos/3c/3cc80415aa324fa2833df20a6aaf7e3a.jpg"
                 className={css.img} alt="Praha"/>
        </div>
        { profile
            ?   <div className={css.description}>
                    <img className={css.photo_large} alt="фото пользователя"
                            src={profile.photos.large || user_icon}/>
                    {isOwner && <div>
                        <input type="file"
                               onChange={onPhotoSelected}
                        />
                    </div>}
                <ProfileStatus status={ status }   myId={ myId }
                               updateStatus={ updateStatus }/>

                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData profile={profile} isOwner={{isOwner}}
                             goToEditMode={() => {setEditMode(true)} }/> }
                </div>
            :  <PreLoader/>
        }

    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
            <b>Имя:</b>  {profile.fullName}
        </div>

        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>Professional skills:</b> {profile.lookingForAJobDescription}
            </div>
        }

        {profile.aboutMe
            ?    <div><pre>
                                {`${"О себе:".padEnd(10, " ")} ${profile.aboutMe}`}
                        </pre></div>
            :   null}
        <div><b>{"Контакты"}</b></div>
        {
            Object.keys(profile.contacts).map((key, i) => Contact(key, profile.contacts[key]))
        }
    </div>
}


const Contact = (contactTitle, contactValue)=> {
    return <div>
        <pre><b>{`${contactTitle.padEnd(10, " ")}`}:</b> {contactValue || null}</pre>
    </div>

}

export default ProfileInfo;