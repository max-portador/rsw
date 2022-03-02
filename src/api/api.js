import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "0ba318fc-0fe2-47ea-8841-df74f5ee4690",
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 25) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }

}

export const followAPI = {
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    }

}

