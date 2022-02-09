const ADD_POST = "ADD_POST";
const UPDATE_TEXTAREA = "UPDATE_NEW_POST_TEXT";

let initialState = {
    posts: [
        {id: 1, message: "post1", likesCount: 0},
        {id: 2, message: "post2", likesCount: 23},
        {id: 3, message: "post3", likesCount: 12},
        {id: 4, message: "post4", likesCount: 108},
    ],
    newPostText: "Крыльями маши!"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.trim()) {
                let _id = state.posts.length + 1;
                let text = state.newPostText;
                const newPost = {
                    id: _id,
                    message: text,
                    likesCount: 0
                };
                let stateCopy = {...state};
                stateCopy.posts = [...state.posts]
                stateCopy.posts.push(newPost)
                stateCopy.newPostText = "";
                return stateCopy;
            }
            return state;
        case UPDATE_TEXTAREA: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.payload.newPostText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_TEXTAREA,
        payload: {newPostText: text}
    }
}

export default profileReducer;