import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export let user_icon = "https://cdn-icons-png.flaticon.com/512/126/126486.png"

let initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userId, 'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userId, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.payload.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
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

export const followSuccess = (userId) => ({type: FOLLOW, payload: {userId}})

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, payload: {userId}})

export const setUsers = users => ({type: SET_USERS, payload: {users}})

export const setCurrentPage = pageNum => ({type: SET_CURRENT_PAGE, payload: {currentPage: pageNum}})

export const setTotalUsersCount = totalUsersCount => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {totalUsersCount: totalUsersCount}
})

export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}})

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {isFetching, userId}
})


export const requestUsers = (page, pageSize) => async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize)

        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));

        let totalCount = data.totalCount >= 300 ? 300 : data.totalCount
        dispatch(setTotalUsersCount(totalCount))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
       followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}


export default usersReducer;