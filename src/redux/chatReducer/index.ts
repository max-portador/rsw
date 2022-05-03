import {AppDispatch} from "../reduxStore";
import {CustomThunkAction, InferActionsType} from "../storeTypes";
import {ChatsTypeActionEnum, MessageType} from "./types";
import {chatAPI} from "../../api/chat-api";
import {v1} from 'uuid'


let initialState = {
    messages: [] as MessageType[],
    status: 'pending' as ChatStatusType
}

const chatsReducer = (state: ChatsStateType = initialState, action: ChatsActionType):ChatsStateType => {
    switch (action.type) {
        case (ChatsTypeActionEnum.MESSAGES_RECEIVED):

            return {
                ...state,
                messages: [...state.messages,
                    ...action.payload
                        .map(m => ({...m, id: v1()}) )]
                    .filter((m, i, arr) => i >= (arr.length - 100))
            }
        case (ChatsTypeActionEnum.STATUS_CHANGED):
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    messagesReceived: (messages: MessageType[]) => ({
        type: ChatsTypeActionEnum.MESSAGES_RECEIVED,
        payload: messages
    } as const),

    statusChanged: (status: ChatStatusType) => ({
        type: ChatsTypeActionEnum.STATUS_CHANGED,
        payload: status
    } as const)

}

let _newMessageHandler: ((messages: MessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: AppDispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
};

let _statusChangedHandler: ((status: ChatStatusType) => void) | null = null

const statusChangedHandlerCreator = (dispatch: AppDispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
};


export const startMessageListening = ():CustomThunkAction<ChatsActionType> =>
    async (dispatch: AppDispatch) => {
        chatAPI.start()
        chatAPI.subscribe("messages-received", newMessageHandlerCreator(dispatch))
        chatAPI.subscribe("status-changed", statusChangedHandlerCreator(dispatch))
}

export const stopMessageListening = ():CustomThunkAction<ChatsActionType> =>
    async (dispatch: AppDispatch) => {
        chatAPI.unsubscribe( "messages-received", newMessageHandlerCreator(dispatch) )
        chatAPI.unsubscribe("status-changed", statusChangedHandlerCreator(dispatch))
        chatAPI.stop()
    }

export const sendMessage = (message: string):CustomThunkAction<ChatsActionType> =>
    async () => {
       chatAPI.sendMessage(message)
    }


export default chatsReducer;


export type ChatsActionType = InferActionsType<typeof actions>
export type ChatsStateType = typeof initialState
export type ChatStatusType = 'pending' | 'ready' | 'error';