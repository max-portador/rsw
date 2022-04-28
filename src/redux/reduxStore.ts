import {applyMiddleware, combineReducers, compose, createStore, Dispatch} from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk"
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBar from "./sidebarReducer";
import usersReducer from "./usersReducer";
import auth from "./authReducer";
import app from "./appReducer";
import { AllActions } from "./storeTypes";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar,
    auth,
    app,
})


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
);

let store = createStore(rootReducer, enhancer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = Dispatch<AllActions> & ThunkDispatch<RootState, void, AllActions>

export default store;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}