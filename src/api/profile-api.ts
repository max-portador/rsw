import {IProfile} from "../redux/profileReducer/types";
import {IPhotoData, IResponse} from "./types";
import {instance} from "./api";

export const profileAPI = {
    async getProfile(profileId: number) {
        const response = await instance.get<IProfile>(`profile/${profileId}`);
        return response.data;
    },

    async getStatus(profileId: number) {
        const response = await instance.get<string>(`profile/status/${profileId}`);
        return response.data;
    },

    async updateStatus(status: string) {
        const response = await instance.put<IResponse<{}>>(`profile/status`, {status});
        return response.data;
    },
    async savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        const response = await instance.put<IResponse<IPhotoData>>(`profile/photo`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        return response.data;
    },
    async saveProfile(profile: IProfile) {
        const response = await instance.put<IResponse<{}>>(`profile`, profile);
        return response.data;
    },
}