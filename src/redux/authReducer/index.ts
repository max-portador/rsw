import {authAPI, securityAPI} from "../../api/api";
import {AuthAction, AuthActionsEnum, AuthState, GetCaptchaUrlSuccessAction, SetAuthUserDataAction} from "./types";
import {AppDispatch, RootState} from "../reduxStore";
import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";

let initialState: AuthState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    contacts: {
        "facebook": "facebook.com",
        "website": null,
        "vk": "vk.com/dimych",
        "twitter": "https://twitter.com/",
        "instagram": "instagram.com/sds",
        "youtube": null,
        "github": "github.com",
        "mainLink": null
    },
}

const auth = (state: AuthState = initialState, action: AuthAction):AuthState => {
    switch (action.type) {
        case AuthActionsEnum.SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case AuthActionsEnum.GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.payload,
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean): SetAuthUserDataAction => (
    {type: AuthActionsEnum.SET_USER_DATA, payload: {userId, email, login, isAuth}}
)

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessAction =>
    ({type: AuthActionsEnum.GET_CAPTCHA_URL_SUCCESS, payload: captchaUrl})


export const getAuthUserData = () => async (dispatch: Dispatch<SetAuthUserDataAction>) => {
    const response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const authUserLogin = (setFieldValue: any, email: string, password: string, rememberMe: boolean, captcha: string=null ) =>
    async (dispatch: ThunkDispatch<void, RootState, any>) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (response.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            setFieldValue("general", response.messages.join(" "))
        }
}

export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
    let response = await securityAPI.getCaptcha()

    const captchaUrl = response.data.url;
    if (response.status === 200) {
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
}

export const authLogout = () => async (dispatch: AppDispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default auth;