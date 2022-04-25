import { IUserPhoto} from "../redux/profileReducer/types";
import { IUser } from "../redux/usersReducer/types";

export interface IMeData {
    id: number,
    email: string,
    login: string
}

export interface IPhotoData{
    photos: IUserPhoto
}

export interface ILoginData {
    id: number,
}

export interface ICaptchaResponse {
    url: string
}


export interface IResponse<T, R=ResultCodesEnum> {
    resultCode: R,
    messages: string[],
    data: T,
}

export interface IUsersResponse{
    items: IUser[],
    totalCount: number,
    error: string
}

export enum ResultCodesEnum {
    SUCCESS = 0,
    ERROR = 1,
}
export enum ResultCodesRotCaptchaEnum {
    CAPTCHA_IS_REQUIRED= 10
}
