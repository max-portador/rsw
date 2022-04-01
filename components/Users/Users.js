"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UserAvaBtn_1 = __importDefault(require("./UserAvaBtn/UserAvaBtn"));
const UserBoxInfo_1 = __importDefault(require("./UserBoxInfo/UserBoxInfo"));
const usersReducer_1 = require("../../redux/usersReducer");
const Users_module_css_1 = __importDefault(require("./Users.module.css"));
const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (<div className={Users_module_css_1.default.users}>
            <div>
                {pages.map(p => <span key={p} className={`${Users_module_css_1.default.pageNum} ${props.currentPage === p && Users_module_css_1.default.selected}`} onClick={() => { props.onPageChanged(p); }}>
                            {p}
                        </span>)}
            </div>


            {(props.users.map(user => <div key={user.id}>
                            <span className={Users_module_css_1.default.user}>
                                <UserAvaBtn_1.default id={user.id} img={(user.photos && user.photos.small ? user.photos.small : usersReducer_1.user_icon)} followed={user.followed} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow}/>

                                <UserBoxInfo_1.default followed={user.followed} fullName={user.name} status={user.status} location={{ city: "city", country: "country" }}/>
                            </span>
                    </div>))}
        </div>);
};
exports.default = Users;
