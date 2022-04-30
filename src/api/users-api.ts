import {IResponse, IUsersResponse} from "./types";
import {instance} from "./api";
import {profileAPI} from "./profile-api";
import {FilterFriendEnum} from "../redux/usersReducer/types";

export const usersAPI = {
    async getUsers(currentPage: number = 1, pageSize: number = 25, term: string = '', friend:FilterFriendEnum = FilterFriendEnum.ALL) {
        let url = `users?page=${currentPage}&count=${pageSize}`
        if (term){
            url += `&term=${term}`
        }
        if (friend !== FilterFriendEnum.ALL) {
            url += `&friend=${friend}`
        }
        const response = await instance.get<IUsersResponse>(url);
        return response.data;
    },
    async getProfile(profileId: number) {
        console.warn("Obsolete method. Please use profileAPI object.")
        return profileAPI.getProfile(profileId);
    },
    async unfollow(userId: number) {
        const response = await instance.delete<IResponse>(`follow/${userId}`);
        return response.data;
    },
    async follow(userId) {
        const response = await instance.post<IResponse>(`follow/${userId}`, {});
        return response.data;
    }
}