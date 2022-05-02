import {AppDispatch} from "../reduxStore";
import {CustomThunkAction, InferActionsType} from "../storeTypes";
import {ChatsTypeActionEnum, MessageType} from "./types";
import {chatAPI} from "../../api/chat-api";

let initialState = {
    messages: [] as MessageType[]
}

const chatsReducer = (state: ChatsStateType = initialState, action: ChatsActionType):ChatsStateType => {
    switch (action.type) {
        case (ChatsTypeActionEnum.MESSAGES_RECEIVED):
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
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


export const startMessageListening = ():CustomThunkAction<ChatsActionType> =>
    async (dispatch: AppDispatch) => {
        chatAPI.start()
        chatAPI.subscribe( newMessageHandlerCreator(dispatch))
}

export const stopMessageListening = ():CustomThunkAction<ChatsActionType> =>
    async (dispatch: AppDispatch) => {
        chatAPI.unsubscribe( newMessageHandlerCreator(dispatch) )
        chatAPI.stop()
    }

export const sendMessage = (message: string):CustomThunkAction<ChatsActionType> =>
    async (dispatch: AppDispatch) => {
        chatAPI.sendMessage(message)
    }


export default chatsReducer;


export type ChatsActionType = InferActionsType<typeof actions>
export type ChatsStateType = typeof initialState