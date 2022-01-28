import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={css.posts}><h3>My posts</h3>
        <div>
            <textarea className={css.textarea}/>
        </div>
        <button className={css.button}>New post</button>
        <Post message="post1"/>
        <Post message="post2"/>
        <Post message="post3"/>
    </div>
}

export default MyPosts;