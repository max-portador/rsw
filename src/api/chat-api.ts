import {MessageType} from "../redux/chatReducer/types";
import {ChatStatusType} from "../redux/chatReducer";


const socketURL = 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx';
let ws: WebSocket | null;

let subscribers = {
    'messages-received': [] as MessageReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[],
}

const closeHandler = () => {
    console.log('WS CLOSED')
    notifyAboutStatus("pending")
    setTimeout( createChannel, 3000)
};

const messageHandler = (e:MessageEvent) => {
    let newMessages: MessageType[] = JSON.parse(e.data);
    subscribers['messages-received'].forEach(s => s(newMessages))
};

const openHandler = () => {
    notifyAboutStatus("ready")
}

const errorHandler = (e: Event) => {
    notifyAboutStatus("error")
    console.log(e, "ERROR! TRY REFRESH!")
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.removeEventListener('error', errorHandler)
    ws?.removeEventListener('open', openHandler)
}

const notifyAboutStatus = (status: ChatStatusType) => {
    subscribers["status-changed"].forEach(s => s(status))
}

function createChannel(){
    cleanUp();
    ws?.close();
    ws = new WebSocket(socketURL);
    notifyAboutStatus("pending")
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHandler)
    ws?.addEventListener('error', errorHandler)
    ws?.addEventListener('open', openHandler)
}

export const chatAPI = {
    start(){
        createChannel()
    },

    stop(){
        subscribers["messages-received"] = [];
        subscribers["status-changed"] = [];
        cleanUp();
        ws?.close();
    },

    subscribe(eventName: EventsNamesTypes, callback: SubscribersType){
        // @ts-ignore
        subscribers[eventName].push(callback)
    },

    unsubscribe(eventName: EventsNamesTypes, callback: SubscribersType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },

    sendMessage(message: string) {
        ws?.send(message)
    }
}

type MessageReceivedSubscriberType = (messages: MessageType[]) => void
type StatusChangedSubscriberType = (status: ChatStatusType) => void
export type SubscribersType = MessageReceivedSubscriberType |
    StatusChangedSubscriberType

export type EventsNamesTypes = 'messages-received' | 'status-changed'