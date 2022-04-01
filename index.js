"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const reduxStore_1 = __importDefault(require("./redux/reduxStore"));
const App_1 = __importDefault(require("./App"));
require("./index.css");
react_dom_1.default.render(<react_router_dom_1.BrowserRouter>
        <react_redux_1.Provider store={reduxStore_1.default}>
            <App_1.default />
        </react_redux_1.Provider>
    </react_router_dom_1.BrowserRouter>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
