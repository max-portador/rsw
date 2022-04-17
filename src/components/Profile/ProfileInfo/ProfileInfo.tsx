import React, {ChangeEvent, FC, useState} from "react";
import css from "./ProfileInfo.module.css";
import {user_icon} from "../../../redux/usersReducer";
import PreLoader from "../../common/PreLoader/PreLoader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";
import {IContacts, IProfile, IUserPhoto} from "../../../redux/profileReducer/types";
import Contact from "./Contact";



type ProfileDataPropsType = {
    profile: IProfile,
    isOwner: boolean,
    goToEditMode: () => void,
}

export type ProfileInfoPropsType = {
    profile: IProfile,
    status: string,
    isOwner: boolean,
    updateStatus: () => void,
    savePhoto: (file: File) => void,
    saveProfile: (profile: IProfile) => void,
}

export type FormDataType = {
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    photos?: IUserPhoto,
    aboutMe?: string,
    userId?: number,
} & IContacts


const ProfileInfo:FC<ProfileInfoPropsType> = ({profile, status, isOwner,  updateStatus, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    const onFormSubmit = (formData: FormDataType) => {
        profile = {
            userId: formData.userId,
            aboutMe: formData.aboutMe,
            lookingForAJob: formData.lookingForAJob,
            lookingForAJobDescription: formData.lookingForAJobDescription,
            fullName: formData.fullName,
            contacts: {
                github: formData.github,
                vk: formData.vk,
                facebook: formData.facebook,
                instagram: formData.instagram,
                twitter: formData.twitter,
                website: formData.website,
                youtube: formData.youtube,
                mainLink: formData.mainLink
            }

        }
        saveProfile(profile)
        setEditMode(false)
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
                <ProfileStatus status={ status } updateStatus={ updateStatus }/>

                {editMode
                    ? <ProfileDataForm profile={profile} onFormSubmit={onFormSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner}
                                   goToEditMode={() => {setEditMode(true)} }/> }
                </div>
            :  <PreLoader/>
        }

    </div>
}



const ProfileData:FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
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
            Object.keys(profile.contacts).map((key) => <Contact
                                                                contactTitle={key}
                                                                contactValue={profile.contacts[key]}/>)
        }
    </div>
}

export default ProfileInfo;