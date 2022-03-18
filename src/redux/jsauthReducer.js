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

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const authUserLogin = (email, password, rememberMe, setFieldValue) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        setFieldValue("general", response.messages.join(" "))
    }
}

export const authLogout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;