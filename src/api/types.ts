import {IProfile, IUserPhoto} from "../redux/profileReducer/types";
import {FollowUnfollowAction, IUser} from "../redux/usersReducer/types";

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


export interface IResponse<T> {
    resultCode: number,
    messages: string[],
    data: T,
}

export interface IUsersResponse{
    items: IUser[],
    totalCount: number,
    error: string
}
