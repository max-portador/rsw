import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import { compose } from 'redux';
import Dialogs from "./Dialogs";
import { RootState} from "../../redux/reduxStore";

let mapStateToProps = (state: RootState) => {
    return {
        dialogs: state.messagesPage.dialogs,
        isAuth: state.auth.isAuth,
    };
}

export default compose<React.ComponentType>(
        connect(mapStateToProps),
        withAuthRedirect
    )(Dialogs)