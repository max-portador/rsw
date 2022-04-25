import {ICaptchaResponse} from "./types";
import {instance} from "./api";

export const securityAPI = {
    async getCaptcha() {
        return await instance.get<ICaptchaResponse>('security/get-captcha-url').then( res => res.data)

    }
}