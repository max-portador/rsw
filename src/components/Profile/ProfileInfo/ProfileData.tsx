import React, { FC } from "react";
import {IProfile} from "../../../redux/profileReducer/types";
import Contact from "./Contact";

type PropsType = {
    profile: IProfile
}

export const ProfileData: FC<PropsType> = ({profile}) => {
    return <div>

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
            Object.keys(profile.contacts).map(key =>
                                        <Contact
                                        contactTitle={key}
                                        contactValue={profile.contacts[key]}/>)
        }
    </div>
}
