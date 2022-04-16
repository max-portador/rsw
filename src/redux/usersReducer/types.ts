import {IUserPhoto} from "../profileReducer/types";
import {setCurrentPage, setIsFetching, setTotalUsersCount, toggleFollowingProgress} from "./index";

export interface IUser{
    id: number,
    name: string,
    status?: string,
    photos: IUserPhoto,
    followed: boolean
}

export interface UsersState {
    users: IUser[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}

export enum UsersActionsEnum {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"
}


export interface FollowSuccessAction{
    type: UsersActionsEnum.FOLLOW,
    payload: number
}

export interface UnfollowSuccessAction{
    type: UsersActionsEnum.UNFOLLOW,
    payload: number
}

export interface SetUsersAction{
    type: UsersActionsEnum.SET_USERS,
    payload: IUser[]
}

export interface SetCurrentPageAction{
    type: UsersActionsEnum.SET_CURRENT_PAGE,
    payload: number
}

export interface SetTotalUsersCountAction {
    type: UsersActionsEnum.SET_TOTAL_USERS_COUNT,
    payload: number
}

export interface SetIsFetchingAction {
    type: UsersActionsEnum.TOGGLE_IS_FETCHING,
    payload: boolean
}

export interface ToggleFollowingProgressAction {
    type: UsersActionsEnum.TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {
        isFetching: boolean,
        userId: number,
    }
}

export type FollowUnfollowAction =
    FollowSuccessAction |
    UnfollowSuccessAction

export type UserAction =
    FollowUnfollowAction |
    SetUsersAction |
    SetCurrentPageAction |
    SetTotalUsersCountAction |
    SetIsFetchingAction |
    ToggleFollowingProgressAction

