import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={css.posts}>My posts
    <div>New post</div>
        <Post name="post1"/>
        <Post name="post2"/>
        <Post name="post3"/>
    </div>
}

export default MyPosts;