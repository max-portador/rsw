import React, {useState} from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.css";

const MyPosts = React.memo((props) => {
    let [postText, setPostTex] = useState('')

    const changeHandler =  (e) => {
        setPostTex(e.currentTarget.value)
    }

    const clickHandler = () => {
        if (postText) {
            props.addPost(postText)
            setPostTex('')
        }

    }

    let posts = props.posts.map((d, i) => {
        return <Post message={d.message}  likesCount={d.likesCount}
                     id={d.id}  key={i}/>
    })
    return <div className={css.posts}><h3>My posts</h3>
        <div>
            <textarea placeholder={"Новый пост"}
                      value={postText}
                      className={css.textarea}
                        onChange={ changeHandler }
            />
        </div>
        <button type="submit" onClick = { clickHandler } className={css.button}>Add post</button>
             {/*<AddPostForm addPost={props.addPost}/>*/}
            {posts}
            </div>
})

export default MyPosts;