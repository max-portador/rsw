import React from "react";
import Profile from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import { compose } from 'redux';
import {RootState} from "../../redux/reduxStore";

class ProfileContainer extends React.Component<PropsType> {

    refreshUserProfile(){
      let userId = Number(this.props.match.params["userId"] || this.props.authorizedUserId);
      if (!userId) {
        this.props.history.push("/login")
      }

      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
    }

    componentDidMount() {
      this.refreshUserProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType){
      if (this.props.match.params.userId !== prevProps.match.params.userId){
        this.refreshUserProfile()
      }
    }


    render() {
        return <Profile status={this.props.status}
                        isOwner={!this.props.match?.params.userId}
                        profile={this.props.profile}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}
        />;
    }
}

let mapStateToProps = (state: RootState) => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    })

let dispatches = {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}

const connector = connect(mapStateToProps, dispatches)

export default compose<React.ComponentType>(
        connector,
        withRouter,
        withAuthRedirect
    )(ProfileContainer)

type ConnectorProps = ConnectedProps<typeof connector>
type PropsType = ConnectorProps & RouteComponentProps<{ userId: string }>
