import React, {ChangeEvent, useState} from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.css";
import {IPost} from "../../../redux/profileReducer/types";

const MyPosts  = React.memo<PropsType>((props) => {
    let [postText, setPostTex] = useState<string>('')

    const changeHandler =  (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostTex(e.currentTarget.value)
    }

    const clickHandler = () => {
        if (postText) {
            props.addPost(postText)
            setPostTex('')
        }
    }

    let posts = props.posts.map((d, i) => {
        return <Post message={d.message}  likesCount={d.likesCount} id={d.id}  key={i}/>
    })
    return <div className={css.posts}>
        <h3>My posts</h3>
        <div>
            <textarea placeholder={"Новый пост"}
                      value={postText}
                      className={css.textarea}
                      onChange={ changeHandler }
            />
        </div>
        <button type="submit" onClick = { clickHandler } className={css.button}>Add post</button>
            {posts}
            </div>
})

export default MyPosts;

type PropsType = {
    posts: IPost[],
    addPost: (text: string) => void,
}