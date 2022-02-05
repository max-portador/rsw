const iconUrl = "https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png";

const ADD_POST = "ADD_POST";
const UPDATE_TEXTAREA = "UPDATE_NEW_POST_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";


let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: "post1", likesCount: 0},
                {id: 2, message: "post2", likesCount: 23},
                {id: 3, message: "post3", likesCount: 12},
                {id: 4, message: "post4", likesCount: 108},
            ],
            newPostText: "Крыльями маши!"
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Max"}, {id: 2, name: "Alex"},
                {id: 3, name: "Igor"}, {id: 4, name: "Julia"},
            ],
            messages: [
                {message: "Hi"}, {message: "How is your life"},
                {message: "Yo"}, {message: "Yo"},
            ],
            newMessageText: "",
        },
        sideBar: {
            friends: [
                {name: "Maks", image: iconUrl},
                {name: "Igor", image: iconUrl},
                {name: "Julia", image: iconUrl},
                {name: "Maria", image: iconUrl},
                {name: "Victor", image: iconUrl},
                {name: "Roman", image: iconUrl},
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(){
        console.log("State has been changed")
    },
    addPost(postMessage){
        let _id = this._state.profilePage.posts.length + 1;
        const newPost = {id: _id, message: postMessage, likesCount: 0};
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this);
    },
    sendMessage(message){
        this._state.messagesPage.messages.push({message});
        this._state.messagesPage.newMessageText = "";
        this._callSubscriber(this);
    },
    updateNewMessage(text){
        this._state.messagesPage.newMessageText = text;
        this._callSubscriber(this);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        switch (action.type){
            case ADD_POST:
                this.addPost(action.payload.newPost);
                break;
            case UPDATE_TEXTAREA:
                this.updateNewPostText(action.payload.newPostText)
                break;
            case SEND_MESSAGE:
                this.sendMessage(action.payload.newMessage);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this.updateNewMessage(action.payload.newMessageText);
                break;
            default:
                console.log("NOT FOUND ACTION TYPE")
        }
    },
}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        payload: {newPost: text}
    }
}

export const updateNewPostTextActionCreator = (text) =>{
    return {
        type: UPDATE_TEXTAREA,
        payload: {newPostText: text}
    }
}

export const sendMessageActionCreator = (message) => {
    return {
        type: SEND_MESSAGE,
        payload: {newMessage: message}
    }
}

export const updateNewMessageTextActionCreator = (text) =>{
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: {newMessageText: text}
    }
}

export default store;
window.store = store;