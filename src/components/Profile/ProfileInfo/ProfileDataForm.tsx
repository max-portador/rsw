import React, {FC} from "react";
import css from "./ProfileDataForm.module.css";
import { useFormik } from 'formik'
import { IProfile } from "../../../redux/profileReducer/types";
import {FormDataType} from "./ProfileInfo";

type PropsType = {
    profile: IProfile,
    onFormSubmit: (formData: FormDataType) => void
}


const ProfileDataForm: FC<PropsType> = ({profile, onFormSubmit}) => {
    const profileInitialValues: FormDataType = {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription || '',
            aboutMe: profile.aboutMe || '',
            github: profile.contacts.github || '',
            vk: profile.contacts.vk || '',
            facebook: profile.contacts.facebook || '',
            instagram: profile.contacts.instagram || '',
            twitter: profile.contacts.twitter || '',
            website: profile.contacts.website || '',
            youtube: profile.contacts.youtube || '',
            mainLink: profile.contacts.mainLink || '',
        }
    const { handleSubmit, handleChange, values, handleBlur } = useFormik(
        {
            initialValues: profileInitialValues,
            onSubmit: (values: FormDataType) => {
                onFormSubmit(values)
            }


    })


    return <form  onSubmit={handleSubmit}>
        <div>
            <div><button className={css.button} type='submit'>Save</button></div>
            <div className={css.field}>
                <label htmlFor='fullName' className={css.label}>Имя:</label>
                <input
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='fullName'
                    name='fullName'
                    type='text'
                    className={css.input}
                />
            </div>

            <div className={css.field}>
                <label htmlFor='lookingForAJob' className={css.label}>Looking for a job:</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='lookingForAJob'
                    name='lookingForAJob'
                    type='checkbox'
                    checked={values.lookingForAJob}
                    className={css.input}
                />
            </div>

            <div className={css.field}>
                <label htmlFor='lookingForAJobDescription' className={css.label}>Description:</label>
                <textarea
                    value={values.lookingForAJobDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='lookingForAJobDescription'
                    name='lookingForAJobDescription'
                    className={css.textarea}
                />
            </div>

            <div className={css.field}>
                <label htmlFor='aboutMe' className={css.label}>О себе:</label>
                <textarea
                    value={values.aboutMe}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='aboutMe'
                    name='aboutMe'
                    className={css.textarea}
                />
            </div>

            <div className={css.contacts_label}><b>{"Контакты"}</b></div>

            {
                Object.keys(profile.contacts).map((key) => {
                    return <div className={css.field}>
                            <label htmlFor={key} className={css.label}>{key}:</label>
                            <input
                                value={values[key]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id={key}
                                name={key}
                                type='text'
                                className={css.input}
                            />
                    </div>
                })
            }

        </div>
    </form>
}


export default ProfileDataForm
