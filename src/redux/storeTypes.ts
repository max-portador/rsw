import {ThunkAction} from "redux-thunk";
import {RootState} from "./reduxStore";
import {UserActionType} from "./usersReducer";
import {AppActionsType} from "./appReducer";
import {DialogsActionType} from "./dialogsReducer";
import {ProfileActionType} from "./profileReducer";
import {AuthActionType} from "./authReducer";
import {ChatsActionType} from "./chatReducer";

export type AllActions =
    AppActionsType |
    AuthActionType |
    DialogsActionType |
    ProfileActionType |
    UserActionType |
    ChatsActionType

export type CustomThunkAction<T extends AllActions> = ThunkAction<Promise<void>, RootState, unknown, T>

export type InferActionsType<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
