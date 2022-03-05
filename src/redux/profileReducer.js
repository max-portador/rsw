import { profileAPI } from '../api/api';

const ADD_POST = "ADD_POST";
const UPDATE_TEXTAREA = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    profile: null,
    status: null,
    posts: [
        {id: 1, message: "post1", likesCount: 0},
        {id: 2, message: "post2", likesCount: 23},
        {id: 3, message: "post3", likesCount: 12},
        {id: 4, message: "post4", likesCount: 108},
    ],
    newPostText: "Крыльями маши!"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.trim()) {
                let _id = state.posts.length + 1;
                let text = state.newPostText;
                const newPost = {
                    id: _id,
                    message: text,
                    likesCount: 0
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: "",
                };
            }
            return state;
        case UPDATE_TEXTAREA: {
            return {
                ...state,
                newPostText: action.payload.newPostText,
            };
        }
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

export const addPostCreator = () => ({ type: ADD_POST})
export const updateNewPostTextCreator = text => ({type: UPDATE_TEXTAREA, payload: {newPostText: text}})
export const setUserProfile = profile => ({type: SET_USER_PROFILE, payload: {profile}})
export const setStatus = status => ({type: SET_STATUS, payload: {status}})

export const getUserProfile = userId => dispatch => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data)) 
        })
}

export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data)) 
        })
}

export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status)) 
            }
        })
}



export default profileReducer;