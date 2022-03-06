import {connect} from "react-redux";
import {addPostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostCreator(text));
        }
    };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;