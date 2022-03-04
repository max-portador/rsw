import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "0ba318fc-0fe2-47ea-8841-df74f5ee4690",
    }
})

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 25) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async getProfile(profileID){
        const response = await instance.get(`profile/${profileID}`);
        return response.data;
    },
    async unfollow(userId) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data;
    },
    async follow(userId) {
        const response = await instance.post(`follow/${userId}`, {});
        return response.data;
    }
}

export const authAPI = {
    async me(){
        const response = await instance.get("auth/me")
        return response.data;
    }
}