import {connect} from "react-redux";
import { actions } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {IPost } from "../../../redux/profileReducer/types";
import {AppDispatch, RootState} from "../../../redux/reduxStore";

let mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts,
    };
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addPost: (text: string) => {
            dispatch(actions.addPostCreator(text));
        }
    };
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType>(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

type MapStatePropsType = {
   posts: IPost[]
}

type MapDispatchPropsType = {
    addPost: (text: string) => void,
}
