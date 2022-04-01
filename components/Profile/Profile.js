"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProfileInfo_1 = __importDefault(require("./ProfileInfo/ProfileInfo"));
const MyPostsContainer_1 = __importDefault(require("./MyPosts/MyPostsContainer"));
const Profile_module_css_1 = __importDefault(require("./Profile.module.css"));
const Profile = (props) => {
    return <div className={Profile_module_css_1.default.content}>
            <ProfileInfo_1.default {...props}/>
            <MyPostsContainer_1.default />
    </div>;
};
exports.default = Profile;
