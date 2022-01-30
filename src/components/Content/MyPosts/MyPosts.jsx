import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return <div className={css.posts}><h3>My posts</h3>
        <div>
            <textarea className={css.textarea}/>
        </div>
        <button className={css.button}>New post</button>
        {
            props.posts.map(d => {
                return <Post message={d.message} likesCount={d.likesCount} id={d.id}/>
            })
        }
    </div>
}

export default MyPosts;