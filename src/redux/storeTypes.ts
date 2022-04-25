import {ThunkAction} from "redux-thunk";
import {RootState} from "./reduxStore";
import {AppAction} from "./appReducer/types";
import {AuthAction} from "./authReducer/types";
import {DialogsAction} from "./dialogsReducer/types";
import {ProfileAction} from "./profileReducer/types";
import {UserAction} from "./usersReducer/types";

export type AllActions =
    AppAction |
    AuthAction |
    DialogsAction |
    ProfileAction |
    UserAction

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AuthAction
    >

export type CustomThunkAction<T extends AllActions> = ThunkAction<Promise<void>, RootState, unknown, T>
