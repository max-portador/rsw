import {ThunkAction} from "redux-thunk";
import {RootState} from "./reduxStore";
import {AnyAction} from "redux";


export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
    >