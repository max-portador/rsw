const iconUrl = "https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "post1", likesCount: 0},
            {id: 2, message: "post2", likesCount: 23},
            {id: 3, message: "post3", likesCount: 12},
            {id: 4, message: "post4", likesCount: 108},
        ],
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
    },
    sideBar: {
        friends: [
            {name: "Maks", image: iconUrl},
            {name: "Igor", image: iconUrl},
            {name: "Julia", image: iconUrl},
        ]
    }
};
export default state;