const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export let user_icon = "https://cdn-icons-png.flaticon.com/512/126/126486.png"

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            img: user_icon,
            fullName: 'Artyom',
            status: 'I,m a boss',
            location: {city: 'Samara', country: 'Russia'}
        },
        {
            id: 2,
            followed: true,
            img: user_icon,
            fullName: 'Maksim',
            status: 'I,m a middle developer',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            img: user_icon,
            fullName: 'Svetlana',
            status: 'I,m a model',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 4,
            followed: false,
            img: user_icon,
            fullName: 'Anna',
            status: 'I,m a couch',
            location: {city: 'Saint Petersburg', country: 'Russia'}
        },
    ],
    offset: 4,
};

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
            return {...state, users: [...state.users, action.payload.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, payload: {userId}})

export const unfollowAC = (userId) => ({type: UNFOLLOW, payload: {userId}})

export const setUsersAC = users => ({type: SET_USERS, payload: {users}})

export default usersReducer;