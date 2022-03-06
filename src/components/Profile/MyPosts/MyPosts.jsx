import React from "react";
import {Form, Field, Formik} from 'formik';
import Post from "./Post/Post";
import css from "./MyPosts.module.css";

const AddPostForm = (props) => {
    const submit = (values, { setSubmitting, setFieldValue }) => {
        props.addPost(values.newPostText)
        setFieldValue("newPostText", "")
        setSubmitting(false)
    }

    const validate = (values) => {
        let errors = {};
        return errors;
    }

    return <div>
        <Formik  initialValues= {{ newPostText: "" }}
                 validate={validate}  onSubmit={submit}>
            <Form>
                <div>
                <Field name="newPostText" component={"textarea"} placeholder={"Новый пост"}
                       type="text" className={css.textarea} />
                </div>
                <button type="submit" className={css.button}>Add post</button>
            </Form>
        </Formik>

    </div>
}

const MyPosts = (props) => {
    let posts = props.posts.map((d, i) => <Post
        message={d.message}  likesCount={d.likesCount}
        id={d.id}  key={i}/>)

    return <div className={css.posts}><h3>My posts</h3>
             <AddPostForm newPostText={props.newPostText} addPost={props.addPost}/>
            {posts}
            </div>
}

export default MyPosts;