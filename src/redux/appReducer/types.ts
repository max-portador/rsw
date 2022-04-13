
export interface AppState {
    initialized: boolean
}

export enum AppActionsEnum {
    INITIALIZED_SUCCESS= 'INITIALIZED_SUCCESS'
}

export interface SetInitializedSuccessAction {
    type: AppActionsEnum.INITIALIZED_SUCCESS
}

export type AppAction =
    SetInitializedSuccessAction