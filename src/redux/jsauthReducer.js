import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_AUTH = "SET_IS_AUTH";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                }
            }

        case SET_IS_AUTH: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId , email , login )  => (
    {type: SET_USER_DATA, payload: {userId, email, login}}
)

export const setIsAuth = (isAuth)  => (
    {type: SET_IS_AUTH, payload: {isAuth}}
)

export const getAuthUserData = () => dispatch => {
    authAPI.me().then(content => {
        if (content.resultCode === 0){
            let {id, login, email} = content.data
            dispatch(setAuthUserData(id, email, login));
            dispatch(setIsAuth(true));
        }
    })
}

export const login = (email, password) => dispatch => {
    authAPI.login(email, password).then(content => {
        if (content.resultCode === 0){
            let userId = content.data.userId;
            dispatch(setAuthUserData(userId, email, email));
            dispatch(setIsAuth(true));
        }
    })
}

export const authLogout = () => dispatch => {
    authAPI.logout().then(content => {
        if (content.resultCode === 0){
            dispatch(setAuthUserData(null, null, null))
            dispatch(setIsAuth(false))
        }
    })
}

export default authReducer;