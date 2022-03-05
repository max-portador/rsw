import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import { compose } from 'redux';



class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params["userId"] || this.props.myId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile status={this.props.status}
                        profile={this.props.profile}
                        updateStatus={this.props.updateStatus}
                        myId={this.props.myId} />;
    }
}


let mapStateToProps = state => (
    { 
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myId: state.auth.userId
    })

export default compose(
        connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
        withRouter,
        withAuthRedirect
    )(ProfileContainer)