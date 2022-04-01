"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollow = exports.follow = exports.getUsers = exports.toggleFollowingProgress = exports.setIsFetching = exports.setTotalUsersCount = exports.setCurrentPage = exports.setUsers = exports.unfollowSuccess = exports.followSuccess = exports.user_icon = void 0;
const api_1 = require("../api/api");
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
exports.user_icon = "https://cdn-icons-png.flaticon.com/512/126/126486.png";
let initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        }
        case SET_USERS: {
            return { ...state, users: [...action.payload.users] };
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.payload.currentPage };
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.payload.totalUsersCount };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.payload.isFetching };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            let ids_list;
            if (action.payload.isFetching) {
                ids_list = [...state.followingInProgress, action.payload.userId];
            }
            else {
                ids_list = state.followingInProgress.filter(id => id !== action.payload.userId);
            }
            return { ...state, followingInProgress: ids_list };
        }
        default:
            return state;
    }
};
const followSuccess = (userId) => ({ type: FOLLOW, payload: { userId } });
exports.followSuccess = followSuccess;
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, payload: { userId } });
exports.unfollowSuccess = unfollowSuccess;
const setUsers = users => ({ type: SET_USERS, payload: { users } });
exports.setUsers = setUsers;
const setCurrentPage = pageNum => ({ type: SET_CURRENT_PAGE, payload: { currentPage: pageNum } });
exports.setCurrentPage = setCurrentPage;
const setTotalUsersCount = totalUsersCount => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: { totalUsersCount: totalUsersCount }
});
exports.setTotalUsersCount = setTotalUsersCount;
const setIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, payload: { isFetching } });
exports.setIsFetching = setIsFetching;
const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: { isFetching, userId }
});
exports.toggleFollowingProgress = toggleFollowingProgress;
const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch((0, exports.setIsFetching)(true));
        api_1.usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
            dispatch((0, exports.setIsFetching)(false));
            dispatch((0, exports.setUsers)(data.items));
            let totalCount = data.totalCount >= 300 ? 300 : data.totalCount;
            // let totalCount = response.data.totalCount
            dispatch((0, exports.setTotalUsersCount)(totalCount));
        });
    };
};
exports.getUsers = getUsers;
const follow = (userId) => {
    console.log("try to follow");
    return (dispatch) => {
        dispatch((0, exports.toggleFollowingProgress)(true, userId));
        api_1.usersAPI.follow(userId)
            .catch(() => { })
            .then(data => {
            if (data.resultCode === 0) {
                dispatch((0, exports.followSuccess)(userId));
            }
        })
            .finally(() => {
            dispatch((0, exports.toggleFollowingProgress)(false, userId));
        });
    };
};
exports.follow = follow;
const unfollow = (userId) => {
    console.log("try to unfollow");
    return (dispatch) => {
        dispatch((0, exports.toggleFollowingProgress)(true, userId));
        api_1.usersAPI.unfollow(userId)
            .catch(() => { })
            .then(data => {
            if (data.resultCode === 0) {
                dispatch((0, exports.unfollowSuccess)(userId));
            }
        })
            .finally(() => {
            dispatch((0, exports.toggleFollowingProgress)(false, userId));
        });
    };
};
exports.unfollow = unfollow;
exports.default = usersReducer;
