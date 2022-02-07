import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const addPost = () => {
        let text = state.profilePage.newPostText;
        props.store.dispatch(addPostCreator(text));
    }

    const changeHandler = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text))
    }

    return <MyPosts
        onPostChange={changeHandler}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />;
}

export default MyPostsContainer;