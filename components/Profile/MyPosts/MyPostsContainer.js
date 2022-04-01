"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const profileReducer_1 = require("../../../redux/profileReducer");
const MyPosts_1 = __importDefault(require("./MyPosts"));
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch((0, profileReducer_1.updateNewPostTextCreator)(text));
        },
        addPost: () => {
            dispatch((0, profileReducer_1.addPostCreator)());
        }
    };
};
const MyPostsContainer = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(MyPosts_1.default);
exports.default = MyPostsContainer;
