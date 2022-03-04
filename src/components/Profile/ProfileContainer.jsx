import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params["userId"] || 2
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={"/login"}/>
        }
        
        return <Profile {...this.props}  profile={this.props.profile} />;
    }
}

let mapStateToProps = state => (
    {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
)


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {getUserProfile})(WithUrlDataContainerComponent);