import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts.map((d, i) => <Post
        message={d.message}
        likesCount={d.likesCount}
        id={d.id}
        key={i}/>)

    const addPost = () => {
        props.addPost();
    }

    const onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text)
    }

    return <div className={css.posts}><h3>My posts</h3>
        <div>
            <textarea
                className={css.textarea}
                onChange={onPostChange}
                value={props.newPostText}
            />
        </div>
        <button onClick={addPost} className={css.button}>
            Add post
        </button>

        {posts}

    </div>
}

export default MyPosts;