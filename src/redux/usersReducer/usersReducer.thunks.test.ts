import {actions, follow} from "./index";
import {IResponse, ResultCodesEnum} from "../../api/types";
import {usersAPI} from "../../api/users-api";

jest.mock("../../api/users-api")
const result: IResponse = {
    resultCode: ResultCodesEnum.SUCCESS,
    messages: ['rvgbtny'],
    data: {}
}

const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;
const dispatchMock = jest.fn();
const getState = jest.fn();

beforeEach(() => {
    userAPIMock.follow.mockReturnValue(Promise.resolve(result));
    dispatchMock.mockClear();
    getState.mockClear();
})


test('thunk follow Success', async () => {
    const thunk = follow(1);
    await thunk(dispatchMock, getState, null)

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1));
})