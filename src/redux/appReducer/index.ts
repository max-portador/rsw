import {getAuthUserData} from "../authReducer";
import { AppAction, AppActionsEnum, AppState, SetInitializedSuccessAction } from "./types";
import { CustomThunkAction } from "../storeTypes";


let initialState: AppState = {
    initialized: false,
}

const index = (state= initialState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionsEnum.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccess = (): SetInitializedSuccessAction => ({type: AppActionsEnum.INITIALIZED_SUCCESS})

export const initializeApp = (): CustomThunkAction<AppAction> =>
    async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess())
}

export default index