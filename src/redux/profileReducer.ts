import { profileAPI } from '../api/api';

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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
                let _id = state.posts.length + 1;
                let text = action.payload.newPostText;
                const newPost = { id: _id, message: text,  likesCount: 0 };
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                };
        case DELETE_POST:
            let postId = action.payload.post_id;
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== postId)],
            };
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
            profile: {...state.profile,  photos: action.payload.photos }
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

type DeletePostActionType = {
    type: typeof DELETE_POST,
    payload: {
        post_id: number
    }
}
export const deletePostCreator = (id: number): DeletePostActionType => ({ type: DELETE_POST, payload: {post_id: id}})

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

type savePhotoSuccesType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    payload: {
        photos: any
    }
}

export const savePhotoSuccess = (photos: any): savePhotoSuccesType => ({type: SAVE_PHOTO_SUCCESS, payload: {photos}})

export const getUserProfile = (userId: number) => async (dispatch) => {
   let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId: number) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status: string) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export default profileReducer;