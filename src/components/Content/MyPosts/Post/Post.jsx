import React from "react";
import css from "./Post.module.css";

const Post = ({name}) => {
    return <div className={css.item} >
        {name}
    </div>
}

export default Post