export interface IContacts {
    "facebook": string | null,
    "website": string | null,
    "vk": string | null,
    "twitter": string | null,
    "instagram": string | null,
    "youtube": string | null,
    "github": string | null,
    "mainLink": string | null,
}

export interface AuthState {
    userId: number | null,
    email: string | null,
    login: string | null,
    password: string | null,
    isAuth: boolean,
    captchaUrl: string | null,
    contacts: IContacts
}

export enum AuthActionsEnum {
    SET_USER_DATA = 'SET_USER_DATA',
    GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'
}