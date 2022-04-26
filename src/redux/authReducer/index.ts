import { AuthActionsEnum, AuthState } from "./types";
import {AppDispatch} from "../reduxStore";
import {CustomThunkAction, InferActionsType} from "../storeTypes";
import {ResultCodesEnum, ResultCodesRotCaptchaEnum} from "../../api/types";
import {authAPI} from "../../api/auth-api";
import {securityAPI} from "../../api/security-api";

let initialState: AuthState = {
    userId: null,
    email: null,
    login: null,
    password: null,
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

const auth = (state: AuthState = initialState, action: AuthActionType):AuthState => {
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

export const actions = {
    setAuthUserData: (userId: number, email: string, login: string, isAuth: boolean) => (
        {type: AuthActionsEnum.SET_USER_DATA, payload: {userId, email, login, isAuth}} as const),

    getCaptchaUrlSuccess: (captchaUrl: string) =>
        ({type: AuthActionsEnum.GET_CAPTCHA_URL_SUCCESS, payload: captchaUrl} as const)
}


export const getAuthUserData = ():CustomThunkAction<AuthActionType> =>
    async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === ResultCodesEnum.SUCCESS) {
        let {id, login, email} = response.data
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const authUserLogin = (setFieldValue: any,
                              email: string,
                              password: string,
                              rememberMe: boolean,
                              captcha: string=null): CustomThunkAction<AuthActionType> =>
    async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.resultCode === ResultCodesEnum.SUCCESS) {
            dispatch(getAuthUserData());
        } else {
            if (response.resultCode === ResultCodesRotCaptchaEnum.CAPTCHA_IS_REQUIRED){
                dispatch(getCaptchaUrl())
            }
            setFieldValue("general", response.messages.join(" "))
        }
}

export const getCaptchaUrl = (): CustomThunkAction<AuthActionType> =>
    async (dispatch: AppDispatch) => {
    let data = await securityAPI.getCaptcha()

    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const authLogout = (): CustomThunkAction<AuthActionType> =>
    async (dispatch: AppDispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === ResultCodesEnum.SUCCESS){
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export default auth;

export type AuthActionType = InferActionsType<typeof actions>