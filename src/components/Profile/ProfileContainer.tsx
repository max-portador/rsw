import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import { compose } from 'redux';
import {
    IProfile,
    ProfileAction,
    SavePhotoSuccessAction,
    SetStatusAction,
    SetUserAction
} from "../../redux/profileReducer/types";
import {RootState} from "../../redux/reduxStore";
import {CustomThunkAction} from "../../redux/storeTypes";

type MapStatePropsType = {
    profile: IProfile,
    status: string,
    authorizedUserId: number,
    isAuth: boolean,
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => CustomThunkAction<SetUserAction>,
    getStatus: (userId: number) => CustomThunkAction<SetStatusAction>,
    updateStatus: (status: string) => CustomThunkAction<SetStatusAction>,
    savePhoto: (file: File) => CustomThunkAction<SavePhotoSuccessAction>,
    saveProfile: (formData: any) => CustomThunkAction<ProfileAction>
}

type MatchParamsProps = {
    userId?: string
}

type PropsType = MapStatePropsType & RouteComponentProps<MatchParamsProps, any, any> & MapDispatchPropsType


class ProfileContainer extends React.Component<PropsType , unknown> {

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

    componentDidUpdate(prevProps, prevState, snapshot){
      if (this.props.match.params.userId !== prevProps.match.params.userId){
        this.refreshUserProfile()
      }
    }


    render() {
        return <Profile status={this.props.status}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}
        />;
    }
}


let mapStateToProps = (state: RootState): MapStatePropsType => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    })

let dispatches: MapDispatchPropsType = {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}

export default compose<React.Component>(
        connect<MapStatePropsType, MapDispatchPropsType>(mapStateToProps, dispatches),
        withRouter,
        withAuthRedirect
    )(ProfileContainer)