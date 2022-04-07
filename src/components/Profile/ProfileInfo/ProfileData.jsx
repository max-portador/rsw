import React from "react";

export const ProfileData = ({profile}) => {
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
            Object.keys(profile.contacts).map(key => Contact(key, profile.contacts[key]))
        }
    </div>
}


const Contact = (contactTitle, contactValue)=> {
    return <div>
        <pre><b>{`${contactTitle.padEnd(10, " ")}`}:</b> {contactValue || null}</pre>
    </div>

}