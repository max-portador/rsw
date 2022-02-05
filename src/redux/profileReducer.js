const ADD_POST = "ADD_POST";
const UPDATE_TEXTAREA = "UPDATE_NEW_POST_TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let _id = state.posts.length + 1;
            let text = action.payload.newPost
            const newPost = {
                id: _id,
                message: text,
                likesCount: 0
            };
            state.posts.push(newPost);
            return state;
        case UPDATE_TEXTAREA:
            state.newPostText = action.payload.newPostText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = (text) => {
    return {
        type: ADD_POST,
        payload: {newPost: text}
    }
}

export const updateNewPostTextCreator = (text) =>{
    return {
        type: UPDATE_TEXTAREA,
        payload: {newPostText: text}
    }
}

export default profileReducer;