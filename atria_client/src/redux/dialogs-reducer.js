const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => {
    return { type: SEND_MESSAGE, newMessageBody };
};

export default dialogsReducer;
