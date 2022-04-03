import React from "react";
import css from "./ProfileInfo.module.css";
import {user_icon} from "../../../redux/usersReducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import PreLoader from "../../common/PreLoader/PreLoader";

const ProfileDataForm = ({profile}) => {
    return <form>
        <div>
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
    </form>
}


export default ProfileDataForm
