import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
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
        onMessageBodyChange: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    };
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;