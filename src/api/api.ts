import axios, {AxiosResponse} from "axios";
import {IResponse, IMeData, ILoginData, ICaptchaResponse, IPhotoData, IUsersResponse} from "./types";
import { IProfile } from "../redux/profileReducer/types";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "0ba318fc-0fe2-47ea-8841-df74f5ee4690",
    }
})

export const usersAPI = {
    async getUsers(currentPage:number = 1, pageSize:number = 25):Promise<IUsersResponse> {
        const response = await instance.get<IUsersResponse>(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async getProfile(profileId: number): Promise<IProfile>{
        console.warn("Obsolete method. Please use profileAPI object.")
        return profileAPI.getProfile(profileId);
    },
    async unfollow(userId: number): Promise<IResponse<{}>> {
        const response = await instance.delete<IResponse<{}>>(`follow/${userId}`);
        return response.data;
    },
    async follow(userId): Promise<IResponse<{}>> {
        const response = await instance.post<IResponse<{}>>(`follow/${userId}`, {});
        return response.data;
    }
}

export const profileAPI = {
    async getProfile(profileId: number): Promise<IProfile>{
        const response = await instance.get<IProfile>(`profile/${profileId}`);
        return response.data;
    },

    async getStatus(profileId: number): Promise<string>{
        const response = await instance.get<string>(`profile/status/${profileId}`);
        return response.data;
    },

    async updateStatus(status: string):Promise<IResponse<{}>>{
        const response = await instance.put<IResponse<{}>>(`profile/status`, { status });
        return response.data;
    },
    async savePhoto(photoFile: File):Promise<IResponse<IPhotoData>>{
        const formData = new FormData()
        formData.append('image', photoFile)
        const response = await instance.put<IResponse<IPhotoData>>(`profile/photo`, formData,
           {
               headers:{
              'Content-Type': 'multipart/form-data'
               }
          });
        return response.data;
    },
    async saveProfile(profile: IProfile): Promise<IResponse<{}>>{
        const response = await instance.put<IResponse<{}>>(`profile`, profile);
        return response.data;
    },
}


export const authAPI = {
    async me(): Promise<IResponse<IMeData>>{
        const response = await instance.get<IResponse<IMeData>>("auth/me")
        return response.data;
    },

    async login(email: string,
                password: string,
                rememberMe: boolean=false,
                captcha: string = null ): Promise<IResponse<ILoginData>>{
        const response = await instance.post<IResponse<ILoginData>>("/auth/login",
            { email, password, rememberMe, captcha })
        return response.data
    },

    async logout(): Promise<IResponse<{}>>{
        const response = await instance.delete<IResponse<{}>>("/auth/login",{})
        return response.data
    }
}

export const securityAPI = {
    async getCaptcha(): Promise<AxiosResponse<ICaptchaResponse>>{
        return await instance.get<ICaptchaResponse>('security/get-captcha-url')

    }
}