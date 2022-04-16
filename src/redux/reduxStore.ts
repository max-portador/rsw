import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBar from "./sidebarReducer";
import usersReducer from "./usersReducer";
import auth from "./authReducer";
import app from "./appReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar,
    auth,
    app,
})
// @ts-ignore
// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//
// const enhancer = composeEnhancers(
//     applyMiddleware(thunkMiddleware)
//     // other store enhancers if any
// );

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;