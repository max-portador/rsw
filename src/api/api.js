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
    async getProfile(profileId){
        console.warn("Obsolete method. Please use profileAPI object.")
        return profileAPI.getProfile(profileId);
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

export const profileAPI = {
    async getProfile(profileId){
        const response = await instance.get(`profile/${profileId}`);
        return response.data;
    },

    async getStatus(profileId){
        const response = await instance.get(`profile/status/${profileId}`);
        return response.data;
    },

    async updateStatus(status){
        const response = await instance.put(`profile/status`, { status: status });
        return response.data;
    },
}


export const authAPI = {
    async me(){
        const response = await instance.get("auth/me")
        return response.data;
    },

    async login(email, password, rememberMe=false   ){
        const response = await instance.post("/auth/login",
            { email, password, rememberMe })
        return response.data
    },

    async logout(){
        const response = await instance.delete("/auth/login",{})
        return response.data
    }
}