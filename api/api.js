"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAPI = exports.profileAPI = exports.usersAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const instance = axios_1.default.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "0ba318fc-0fe2-47ea-8841-df74f5ee4690",
    }
});
exports.usersAPI = {
    async getUsers(currentPage = 1, pageSize = 25) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async getProfile(profileId) {
        console.warn("Obsolete method. Please use profileAPI object.");
        return exports.profileAPI.getProfile(profileId);
    },
    async unfollow(userId) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data;
    },
    async follow(userId) {
        const response = await instance.post(`follow/${userId}`, {});
        return response.data;
    }
};
exports.profileAPI = {
    async getProfile(profileId) {
        const response = await instance.get(`profile/${profileId}`);
        return response.data;
    },
    async getStatus(profileId) {
        const response = await instance.get(`profile/status/${profileId}`);
        return response.data;
    },
    async updateStatus(status) {
        console.log(`API -${status}`);
        const response = await instance.put(`profile/status`, { status: status });
        return response.data;
    },
};
exports.authAPI = {
    async me() {
        const response = await instance.get("auth/me");
        return response.data;
    }
};
