import {IUserPhoto} from "../profileReducer/types";

export interface IUser{
    id: number,
    name: string,
    status?: string,
    photos: IUserPhoto,
    followed: boolean
}

export enum FilterFriendEnum {
    ALL= 'null',
    ONLY_FRIENDS = 'true',
    NOT_FRIENDS = 'false'

}

export interface UsersState {
    users: IUser[],
    pageSize: number,
    portionSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
    filter: {
        term: string,
        friend: FilterFriendEnum
    }
}

export enum UsersActionsEnum {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS",
    SET_FILTER = "SET_FILTER"
}
