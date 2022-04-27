import  {follow} from "./index";
import {IResponse, ResultCodesEnum} from "../../api/types";
import {usersAPI} from "../../api/users-api";

jest.mock("../../api/users-api")
const result: IResponse = {
    resultCode: ResultCodesEnum.SUCCESS,
    messages: ['rvgbtny'],
    data: {}
}

const userAPIMock = usersAPI;



test('thunk follow Success', async () => {
    // @ts-ignore
    userAPIMock.follow.mockReturnValue(Promise.resolve(result))
    const thunk = follow(1);
    const dispatchMock = jest.fn()

    // @ts-ignore
    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(3)
})