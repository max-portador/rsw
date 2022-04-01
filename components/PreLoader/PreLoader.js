"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PreLoader_module_css_1 = __importDefault(require("./PreLoader.module.css"));
const PreLoader = (props) => {
    return (<div className={PreLoader_module_css_1.default.lds_grid}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>);
};
exports.default = PreLoader;
