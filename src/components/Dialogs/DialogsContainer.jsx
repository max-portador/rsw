import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import { compose } from 'redux';
import {sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        isAuth: state.auth.isAuth,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageCreator(text))
        }
    };
}

export default compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    )(Dialogs)