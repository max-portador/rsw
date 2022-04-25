import {AuthAction, AuthActionsEnum, AuthState, GetCaptchaUrlSuccessAction, SetAuthUserDataAction} from "./types";
import {AppDispatch} from "../reduxStore";
import {CustomThunkAction} from "../storeTypes";
import {ResultCodesEnum, ResultCodesRotCaptchaEnum} from "../../api/types";
import {authAPI} from "../../api/auth-api";
import {securityAPI} from "../../api/security-api";

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


export const getAuthUserData = ():CustomThunkAction<SetAuthUserDataAction> =>
    async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === ResultCodesEnum.SUCCESS) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const authUserLogin = (setFieldValue: any,
                              email: string,
                              password: string,
                              rememberMe: boolean,
                              captcha: string=null):
    CustomThunkAction< SetAuthUserDataAction | GetCaptchaUrlSuccessAction> =>
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

export const getCaptchaUrl = (): CustomThunkAction<GetCaptchaUrlSuccessAction> =>
    async (dispatch: AppDispatch) => {
    let data = await securityAPI.getCaptcha()

    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const authLogout = (): CustomThunkAction<SetAuthUserDataAction> =>
    async (dispatch: AppDispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === ResultCodesEnum.SUCCESS){
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default auth;