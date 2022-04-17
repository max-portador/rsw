import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import { compose } from 'redux';
import {sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {AppDispatch, RootState} from "../../redux/reduxStore";

let mapStateToProps = (state: RootState) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        isAuth: state.auth.isAuth,
    };
}

let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        sendMessage: (text: string): void => {
            dispatch(sendMessageCreator(text))
        }
    };
}

export default compose<React.Component>(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    )(Dialogs)