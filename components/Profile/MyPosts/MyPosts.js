"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MyPosts_module_css_1 = __importDefault(require("./MyPosts.module.css"));
const Post_1 = __importDefault(require("./Post/Post"));
const MyPosts = (props) => {
    let posts = props.posts.map((d, i) => <Post_1.default message={d.message} likesCount={d.likesCount} id={d.id} key={i}/>);
    const addPost = () => {
        props.addPost();
    };
    const onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    };
    return <div className={MyPosts_module_css_1.default.posts}><h3>My posts</h3>
        <div>
            <textarea className={MyPosts_module_css_1.default.textarea} onChange={onPostChange} value={props.newPostText}/>
        </div>
        <button onClick={addPost} className={MyPosts_module_css_1.default.button}>
            Add post
        </button>

        {posts}

    </div>;
};
exports.default = MyPosts;
