"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProfileInfo_module_css_1 = __importDefault(require("./ProfileInfo.module.css"));
const usersReducer_1 = require("../../../redux/usersReducer");
const PreLoader_1 = __importDefault(require("../../PreLoader/PreLoader"));
const ProfileStatus_1 = __importDefault(require("./ProfileStatus/ProfileStatus"));
const ProfileInfo = (props) => {
    let profile = props.profile;
    let contacts = [];
    if (profile)
        contacts = Object.keys(profile.contacts).filter(key => profile.contacts[key]);
    return <div className={ProfileInfo_module_css_1.default.profileInfo}>
        <div>
            <img src="https://static.orgpage.ru/socialnewsphotos/3c/3cc80415aa324fa2833df20a6aaf7e3a.jpg" className={ProfileInfo_module_css_1.default.img} alt="Praha"/>
        </div>
        {props.profile
            ? <div className={ProfileInfo_module_css_1.default.description}>
                    <img className={ProfileInfo_module_css_1.default.photo_large} alt="фото пользователя" src={props.profile.photos.large || usersReducer_1.user_icon}/>
                    <div>{"Имя: " + profile.fullName}</div>
                    {/*======================================= */}
                    {profile.aboutMe
                    ? <div><pre>
                                {`${"О себе:".padEnd(10, " ")} ${profile.aboutMe}`}
                        </pre></div>
                    : null}
                    {/*======================================= */}
                    {contacts.length
                    ? <div>{"Контакты"}</div>
                    : null}
                    {/*======================================= */}
                    <pre>
                        {contacts
                    .map((val, id) => <div key={id}>
                                            {`${val.padEnd(10, " ")}: ${profile.contacts[val]}` || null}
                                            </div>)}
                    </pre>
                    {/*======================================= */}
                    {profile.lookingForAJob && profile.lookingForAJobDescription
                    ? <div>{profile.lookingForAJobDescription}</div>
                    : null}
                    
                </div>
            : <PreLoader_1.default />}

        <ProfileStatus_1.default status={props.status} myId={props.myId} updateStatus={props.updateStatus}/>
    </div>;
};
exports.default = ProfileInfo;
