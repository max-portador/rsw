"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UserBoxInfo_module_css_1 = __importDefault(require("./UserBoxInfo.module.css"));
const UserBoxInfo = (props) => {
    return (<div className={UserBoxInfo_module_css_1.default.info_box + " " + (!props.followed || UserBoxInfo_module_css_1.default.followed_info_box)}>
                        <span className={UserBoxInfo_module_css_1.default.info}>
                            <div>{props.fullName}</div>
                            <div>{props.status}</div>
                        </span>
            <span className={UserBoxInfo_module_css_1.default.location}>
                            <div>{props.location.country}</div>
                            <div>{props.location.city}</div>
                        </span>
        </div>);
};
exports.default = UserBoxInfo;
