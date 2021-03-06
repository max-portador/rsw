import {
    IProfile,
    IUserPhoto,
    ProfileState,
    UsersActionsEnum
} from "./types";
import {CustomThunkAction, InferActionsType} from "../storeTypes";
import {ResultCodesEnum} from "../../api/types";
import {profileAPI} from "../../api/profile-api";

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

const profileReducer = (state = initialState, action: ProfileActionType): ProfileState => {
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

export const actions = {
    addPostCreator: (text: string) => ({
        type: UsersActionsEnum.ADD_POST,
        payload: text,
    } as const),
    deletePostCreator: (post_id: number) => ({
        type: UsersActionsEnum.DELETE_POST,
        payload: post_id
    } as const),

    setUserProfile: (profile: IProfile) => ({
        type: UsersActionsEnum.SET_USER_PROFILE,
        payload: profile
    } as const),

    setStatus: (status: string) => ({
        type: UsersActionsEnum.SET_STATUS,
        payload: status
    } as const),

    savePhotoSuccess: (photos: IUserPhoto) => ({
        type: UsersActionsEnum.SAVE_PHOTO_SUCCESS,
        payload: photos
    } as const),
}

export const getUserProfile = (userId: number):CustomThunkAction<ProfileActionType> =>
    async (dispatch) => {
   let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}


export const getStatus = (userId: number): CustomThunkAction<ProfileActionType> =>
    async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): CustomThunkAction<ProfileActionType> =>
    async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === ResultCodesEnum.SUCCESS) {
            dispatch(actions.setStatus(status))
        }
    } catch (e) {
        alert(e)
    }
}

export const savePhoto = (file: File): CustomThunkAction<ProfileActionType> =>
    async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCodesEnum.SUCCESS) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (formData: any): CustomThunkAction<ProfileActionType> =>
    async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const data = await profileAPI.saveProfile({userId, ...formData});
        if (data.resultCode === ResultCodesEnum.SUCCESS) {
            await dispatch(getUserProfile(userId))
        }
}

export default profileReducer;

export type ProfileActionType = InferActionsType<typeof actions>
