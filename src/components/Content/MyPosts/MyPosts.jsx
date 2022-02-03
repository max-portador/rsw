import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let newPostElement = React.createRef()

    const addPost = () => {
        let text = props.state.newPostText;
        props.dispatch(addPostActionCreator(text));
        props.dispatch(updateNewPostTextActionCreator(""))
    }

    const changeHandler = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return <div className={css.posts}><h3>My posts</h3>
        <div>
            <textarea
                className={css.textarea}
                ref={newPostElement}
                onChange={changeHandler}
                value={props.state.newPostText}/>
        </div>
        <button onClick={addPost} className={css.button}>Add post</button>
        {
            props.state.posts.map((d, i) => {
                return <Post message={d.message} likesCount={d.likesCount} id={d.id} key={i}/>
            })
        }
    </div>
}

export default MyPosts;