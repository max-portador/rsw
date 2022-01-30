import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let newPostElement = React.createRef()

    const addPost = ()=> {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = "";
    }

    return <div className={css.posts}><h3>My posts</h3>
        <div>
            <textarea className={css.textarea} ref={newPostElement}/>
        </div>
        <button onClick={addPost} className={css.button}>Add post</button>
        {
            props.posts.map((d, i) => {
                return <Post message={d.message} likesCount={d.likesCount} id={d.id} key={i}/>
            })
        }
    </div>
}

export default MyPosts;