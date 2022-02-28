import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileID = this.props.match.params["userId"] || 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileID}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return <Profile {...this.props}  profile={this.props.profile} />;
    }
}

let mapStateToProps = state => (
    {
        profile: state.profilePage.profile
    }
)


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {setUserProfile})(WithUrlDataContainerComponent);