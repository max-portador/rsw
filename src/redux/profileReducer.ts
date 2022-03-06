import { profileAPI } from '../api/api';

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

type PostType = {
    id: number,
    message: string,
    likesCount: number
}
type PhotosType = {
    small: string | null,
    large: string | null
}

type ContactsType = {
    github: string | null,
    vk: string | null,
    twitter: string | null,
    website: string | null,
    youtube: string | null,
    mainLink: string | null,

}

type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType
    photos: PhotosType
}

let initialState = {
    profile: null as ProfileType,
    status: null as null | string,
    posts: [
        {id: 1, message: "post1", likesCount: 0},
        {id: 2, message: "post2", likesCount: 23},
        {id: 3, message: "post3", likesCount: 12},
        {id: 4, message: "post4", likesCount: 108},
    ] as PostType[],
};

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            if (action.payload.newPostText.trim()) {
                let _id = state.posts.length + 1;
                let text = action.payload.newPostText;
                const newPost = {
                    id: _id,
                    message: text,
                    likesCount: 0
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                };
            }
            return state;
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload.profile,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload.status,
            };
        }
        default:
            return state;
    }
}

type AddPostActionType = {
    type: typeof ADD_POST,
    payload: {
        newPostText: string
    }
}
export const addPostCreator = (text: string): AddPostActionType => ({ type: ADD_POST, payload: {newPostText: text}})

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    payload: {
        profile: ProfileType
    }
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, payload: {profile}})

type SetStatusType = {
    type: typeof SET_STATUS,
    payload: {
        status: string
    }
}
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, payload: {status}})

export const getUserProfile = (userId: number) => dispatch => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data)) 
        })
}

export const getStatus = (userId: number) => dispatch => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data)) 
        })
}

export const updateStatus = (status: string) => dispatch => {
    profileAPI.updateStatus(status)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status)) 
            }
        })
}

export default profileReducer;