import {usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/object-helper";
import {
    FollowSuccessAction, FollowUnfollowAction, IUser,
    SetCurrentPageAction, SetIsFetchingAction, SetTotalUsersCountAction,
    SetUsersAction, ToggleFollowingProgressAction, UnfollowSuccessAction,
    UserAction, UsersActionsEnum, UsersState
} from "./types";
import {ThunkAction } from "redux-thunk";
import { RootState } from "../reduxStore";
import {IResponse} from "../../api/types";
import {AllActions, CustomThunkAction} from "../storeTypes";
import {Dispatch} from "redux";

export let user_icon = "https://cdn-icons-png.flaticon.com/512/126/126486.png"

let initialState: UsersState = {
    users: [],
    pageSize: 25,
    totalUsersCount: null,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action: UserAction): UsersState => {
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

export const followSuccess = (userId: number): FollowSuccessAction => ({
    type: UsersActionsEnum.FOLLOW,
    payload: userId
})

export const unfollowSuccess = (userId: number): UnfollowSuccessAction => ({
    type: UsersActionsEnum.UNFOLLOW,
    payload: userId
})

export const setUsers = (users: IUser[]): SetUsersAction => ({
    type: UsersActionsEnum.SET_USERS,
    payload: users
})

export const setCurrentPage = (pageNum: number): SetCurrentPageAction => ({
    type: UsersActionsEnum.SET_CURRENT_PAGE,
    payload: pageNum
})

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountAction => ({
    type: UsersActionsEnum.SET_TOTAL_USERS_COUNT,
    payload: totalUsersCount
})

export const setIsFetching = (isFetching: boolean): SetIsFetchingAction => ({
    type: UsersActionsEnum.TOGGLE_IS_FETCHING,
    payload: isFetching
})

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressAction => ({
    type: UsersActionsEnum.TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {isFetching, userId}
})


export const requestUsers = (page: number, pageSize: number): ThunkAction<Promise<void>, RootState, unknown, UserAction> =>
    async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize)

        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow =
    async (dispatch: Dispatch<AllActions>,
           userId:number,
           apiMethod: (id: number) => Promise<IResponse<{}>>,
           actionCreator: (userId: number) => FollowUnfollowAction): Promise<void> =>
    {
    dispatch(toggleFollowingProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): CustomThunkAction<FollowUnfollowAction> =>
    async (dispatch) => {
       followUnfollowFlow(dispatch,
           userId,
           usersAPI.follow.bind(usersAPI),
           followSuccess)
}

export const unfollow = (userId: number): ThunkAction<void, RootState, unknown, UnfollowSuccessAction> =>
    async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}


export default usersReducer;