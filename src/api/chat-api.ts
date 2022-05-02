import {MessageType} from "../redux/chatReducer/types";

let subsribers = [] as SubsriberType[]

const socketURL = 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx';
let ws: WebSocket | null;

let closeHandler = () => {
    console.log('WS CLOSED')
    setTimeout( createChannel, 3000)
};

let messageHandler = (e:MessageEvent) => {
    let newMessages = JSON.parse(e.data);
    subsribers.forEach(s => s(newMessages))
};

function createChannel(){
    if (ws !== null ){
        ws?.removeEventListener('close', closeHandler)
        ws?.close()
    }
    ws = new WebSocket(socketURL);
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHandler)
}

export const chatAPI = {
    start(){
        createChannel()
    },
    stop(){
        subsribers = [];
        ws?.removeEventListener('close', closeHandler);
        ws?.removeEventListener('message', messageHandler);
        ws?.close();
    },
    subscribe(callback: SubsriberType){
        subsribers.push(callback)
    },

    unsubscribe(callback: SubsriberType) {
        subsribers = subsribers.filter(s => s !== callback)
    },

    sendMessage(message: string) {
        ws?.send(message)
    }
}

export type SubsriberType = (messages: MessageType[]) => void