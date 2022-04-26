export interface IPost {
    id: number,
    message: string,
    likesCount: number
}

export interface IUserPhoto {
    small: string,
    large: string
}

export interface IContacts {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export interface IProfile {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: IContacts,
    photos?: IUserPhoto,
    aboutMe?: string,
}

export interface ProfileState {
    profile: IProfile,
    status: string,
    posts: IPost[]
}

export const enum UsersActionsEnum {
 ADD_POST = "ADD_POST",
 DELETE_POST = "DELETE_POST",
 SET_USER_PROFILE = "SET_USER_PROFILE",
 SET_STATUS = "SET_STATUS",
 SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS",
}