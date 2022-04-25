import {updateObjectInArray} from "../../utils/object-helper";
import { IUser,  UsersActionsEnum, UsersState } from "./types";
import {IResponse, ResultCodesEnum} from "../../api/types";
import {AllActions, CustomThunkAction, InferActionsType} from "../storeTypes";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/users-api";

export let user_icon = "https://cdn-icons-png.flaticon.com/512/126/126486.png"

let initialState: UsersState = {
    users: [],
    pageSize: 25,
    totalUsersCount: null,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action: UserActionsType): UsersState => {
    switch (action.type) {
        case UsersActionsEnum.FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, 'id', {followed: true})
            }
        }
        case UsersActionsEnum.UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, 'id', {followed: false})
            }
        }
        case UsersActionsEnum.SET_USERS: {
            return {...state, users: [...action.payload]}
        }
        case UsersActionsEnum.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload}
        }
        case UsersActionsEnum.SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.payload}
        }
        case UsersActionsEnum.TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload}
        }
        case UsersActionsEnum.TOGGLE_IS_FOLLOWING_PROGRESS: {
            let ids_list;
            if (action.payload.isFetching) {
                ids_list = [...state.followingInProgress, action.payload.userId]
            } else {
                ids_list = state.followingInProgress.filter(id => id !== action.payload.userId)
            }
            return {...state, followingInProgress: ids_list}
        }

        default:
            return state;
    }
}

export type UserActionsType = InferActionsType<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({
        type: UsersActionsEnum.FOLLOW,
        payload: userId
    } as const),

    unfollowSuccess: (userId: number) => ({
        type: UsersActionsEnum.UNFOLLOW,
        payload: userId
    }  as const),

    setUsers: (users: IUser[]) => ({
        type: UsersActionsEnum.SET_USERS,
        payload: users
    } as const),

    setCurrentPage: (pageNum: number) => ({
        type: UsersActionsEnum.SET_CURRENT_PAGE,
        payload: pageNum
    }  as const),

    setTotalUsersCount: (totalUsersCount: number) => ({
        type: UsersActionsEnum.SET_TOTAL_USERS_COUNT,
        payload: totalUsersCount
    }  as const),

    setIsFetching: (isFetching: boolean) => ({
        type: UsersActionsEnum.TOGGLE_IS_FETCHING,
        payload: isFetching
    } as const),

    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: UsersActionsEnum.TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {isFetching, userId}
    }  as const)
}


export const requestUsers = (page: number, pageSize: number): CustomThunkAction<UserActionsType> =>
    async (dispatch) => {
        dispatch(actions.setIsFetching(true));
        dispatch(actions.setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize)

        dispatch(actions.setIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow =
    async (dispatch: Dispatch<AllActions>,
           userId:number,
           apiMethod: (id: number) => Promise<IResponse<{}>>,
           actionCreator: (userId: number) => UserActionsType): Promise<void> =>
    {
    dispatch(actions.toggleFollowingProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === ResultCodesEnum.SUCCESS) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): CustomThunkAction<UserActionsType> =>
    async (dispatch) => {
       followUnfollowFlow(dispatch,
           userId,
           usersAPI.follow.bind(usersAPI),
           actions.followSuccess)
}

export const unfollow = (userId: number): CustomThunkAction<UserActionsType> =>
    async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
}


export default usersReducer;