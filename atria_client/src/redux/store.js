import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "привет", likesCount: "16" },
                { id: 2, message: "как дела?", likesCount: "23" },
            ],
            newPostText: "hello, friend",
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Bob" },
                { id: 2, name: "Ilon" },
                { id: 3, name: "Lev" },
                { id: 4, name: "Lex" },
                { id: 5, name: "Nik" },
                { id: 6, name: "Tom" },
            ],
            messages: [
                { id: 1, message: "eeee" },
                { id: 2, message: "oooo" },
                { id: 3, message: "aaaa" },
                { id: 4, message: "bbbbb" },
                { id: 5, message: "dddd" },
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );

        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        );

        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
