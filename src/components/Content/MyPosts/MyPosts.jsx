import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "post1", likesCount: 0},
        {id: 2, message: "post2", likesCount: 23},
        {id: 3, message: "post3", likesCount: 12},
        {id: 4, message: "post4", likesCount: 108},
    ];

    return <div className={css.posts}><h3>My posts</h3>
        <div>
            <textarea className={css.textarea}/>
        </div>
        <button className={css.button}>New post</button>
        {
            posts.map(d => {
                return <Post message={d.message} likesCount={d.likesCount} id={d.id}/>
            })
        }
    </div>
}

export default MyPosts;