import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

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

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
)

export const getAuthUserData = () => dispatch => {
    return authAPI.me().then(content => {
        if (content.resultCode === 0) {
            let {id,     login, email} = content.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    })

}

export const authUserLogin = (email, password, rememberMe, setFieldValue) => dispatch => {
    authAPI.login(email, password, rememberMe).then(content => {
        if (content.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            setFieldValue("general", content.messages.join(" "))
        }
    })
}

export const authLogout = () => dispatch => {
    authAPI.logout().then(content => {
        if (content.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default authReducer;