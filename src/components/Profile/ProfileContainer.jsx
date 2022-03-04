import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params["userId"] || 2
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props}  profile={this.props.profile} />;
    }
}

let mapStateToProps = state => (
    {
        profile: state.profilePage.profile,
    })

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps,
    {getUserProfile})(WithUrlDataContainerComponent);