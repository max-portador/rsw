import {getAuthUserData} from "../authReducer";
import { AppActionsEnum, AppState } from "./types";
import {CustomThunkAction, InferActionsType} from "../storeTypes";


let initialState: AppState = {
    initialized: false,
}

const index = (state= initialState, action: AppActionsType): AppState => {
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

export const actions = {
    initializedSuccess: () => ({type: AppActionsEnum.INITIALIZED_SUCCESS} as const)
}

export type AppActionsType = InferActionsType<typeof actions>

export const initializeApp = (): CustomThunkAction<AppActionsType> =>
    async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(actions.initializedSuccess())
}

export default index