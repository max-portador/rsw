import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={css.posts}>My posts
        <div><textarea/></div>
    <div>New post</div>
        <Post message="post1"/>
        <Post message="post2"/>
        <Post message="post3"/>
    </div>
}

export default MyPosts;