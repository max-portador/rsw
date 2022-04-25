import {profileAPI} from '../../api/api';
import {
    AddPostAction, DeletePostAction, IProfile,
    IUserPhoto, SavePhotoSuccessAction, SetStatusAction,
    SetUserAction, ProfileAction, UsersActionsEnum,
    ProfileState
} from "./types";
import {CustomThunkAction} from "../storeTypes";

let initialState: ProfileState = {
    profile: null,
    status: null,
    posts: [
        {id: 1, message: "post1", likesCount: 0},
        {id: 2, message: "post2", likesCount: 23},
        {id: 3, message: "post3", likesCount: 12},
        {id: 4, message: "post4", likesCount: 108},
    ],
};

const profileReducer = (state = initialState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case UsersActionsEnum.ADD_POST:
                let _id = state.posts.length + 1;
                let text = action.payload;
                const newPost = { id: _id, message: text,  likesCount: 0 };
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                };
        case UsersActionsEnum.DELETE_POST:
            let postId = action.payload;
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== postId)],
            };
        case UsersActionsEnum.SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload,
            };
        }
        case UsersActionsEnum.SET_STATUS: {
            return {
                ...state,
                status: action.payload,
            };
        }
        case UsersActionsEnum.SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
            profile: {...state.profile,  photos: action.payload }
            };
        }
        default:
            return state;
    }
}

export const addPostCreator = (text: string): AddPostAction => ({
    type: UsersActionsEnum.ADD_POST,
    payload: text
})

export const deletePostCreator = (post_id: number): DeletePostAction => ({
    type: UsersActionsEnum.DELETE_POST,
    payload: post_id
})

export const setUserProfile = (profile: IProfile): SetUserAction => ({
    type: UsersActionsEnum.SET_USER_PROFILE,
    payload: profile
})

export const setStatus = (status: string): SetStatusAction => ({
    type: UsersActionsEnum.SET_STATUS,
    payload: status
})

export const savePhotoSuccess = (photos: IUserPhoto): SavePhotoSuccessAction => ({
    type: UsersActionsEnum.SAVE_PHOTO_SUCCESS,
    payload: photos
})


export const getUserProfile = (userId: number):CustomThunkAction<SetUserAction> =>
    async (dispatch) => {
   let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId: number): CustomThunkAction<SetStatusAction> =>
    async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status: string): CustomThunkAction<SetStatusAction> =>
    async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        alert(e)
    }
}

export const savePhoto = (file: File): CustomThunkAction<SavePhotoSuccessAction> =>
    async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (formData: any): CustomThunkAction<ProfileAction> =>
    async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const data = await profileAPI.saveProfile({userId, ...formData});
        if (data.resultCode === 0) {
            await dispatch(getUserProfile(userId))
        }
}

export default profileReducer;