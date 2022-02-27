const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

export let user_icon = "https://cdn-icons-png.flaticon.com/512/126/126486.png"

let initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                }),
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



        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, payload: {userId}})

export const unfollow = (userId) => ({type: UNFOLLOW, payload: {userId}})

export const setUsers = users => ({type: SET_USERS, payload: {users}})

export const setCurrentPage = pageNum => ({type: SET_CURRENT_PAGE, payload: {currentPage: pageNum}})
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, payload: {totalUsersCount: totalUsersCount}})

export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}})
export default usersReducer;