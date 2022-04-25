import {ILoginData, IMeData, IResponse, ResultCodesEnum, ResultCodesRotCaptchaEnum} from "./types";
import {instance} from "./api";

export const authAPI = {
    async me() {
        const response = await instance.get<IResponse<IMeData>>("auth/me")
        return response.data;
    },

    async login(email: string, password: string, rememberMe: boolean = false, captcha: string = null) {
        const response = await instance.post<IResponse<ILoginData, ResultCodesRotCaptchaEnum | ResultCodesEnum>>
        ("/auth/login",
        {email, password, rememberMe, captcha})
        return response.data
    },

    async logout() {
        const response = await instance.delete<IResponse<{}>>("/auth/login", {})
        return response.data
    }
}