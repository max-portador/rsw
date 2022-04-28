import {UsersState} from './types';
import usersReducer, {actions} from "./index";

let state: UsersState;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: 'Portador', followed: false,
                photos: {small: null, large: null}, status: 'status 0'
            },
            {
                id: 1, name: 'Maks', followed: false,
                photos: {small: null, large: null}, status: 'status 0'
            },
            {
                id: 2, name: 'Temon', followed: true,
                photos: {small: null, large: null}, status: 'status 0'
            },
            {
                id: 3, name: 'Liza', followed: true,
                photos: {small: null, large: null}, status: 'status 0'
            },
        ],
    } as UsersState
})

test('follow Success', () => {


    const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test('unfollow Success', () => {


    const newState = usersReducer(state, actions.unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})