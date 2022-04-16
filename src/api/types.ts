export interface IMeData {
    id: number,
    email: string,
    login: string
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