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

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0){
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0){
        dispatch(getAuthUserData());
    }
}

export const logOut = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;