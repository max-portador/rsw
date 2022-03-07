import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

type InitialStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
}


let initialState: InitialStateType = {
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

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: {
        userId: number,
        email: string,
        login: string,
        isAuth: boolean,
    }
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) : SetAuthUserDataActionType => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
)

export const getAuthUserData = () => dispatch => {
    authAPI.me().then(content => {
        if (content.resultCode === 0){
            debugger
            let {id, login, email} = content.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}

export const login = (email, password, rememberMe) => dispatch => {
    authAPI.login(email, password, rememberMe).then(content => {
        if (content.resultCode === 0){
            debugger
            dispatch(getAuthUserData());
        }
    })
}

export let logOut;
logOut = () => dispatch => {
    authAPI.logout().then(content => {
        if (content.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}
