import {ThunkAction} from "redux-thunk";
import {RootState} from "./reduxStore";
import {AuthAction} from "./authReducer/types";
import {DialogsAction} from "./dialogsReducer/types";
import {ProfileAction} from "./profileReducer/types";
import {UserActionsType} from "./usersReducer";
import {AppActionsType} from "./appReducer";

export type AllActions =
    AppActionsType |
    AuthAction |
    DialogsAction |
    ProfileAction |
    UserActionsType

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AuthAction
    >

export type CustomThunkAction<T extends AllActions> = ThunkAction<Promise<void>, RootState, unknown, T>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
