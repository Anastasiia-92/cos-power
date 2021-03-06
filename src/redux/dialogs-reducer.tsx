import {ActionsTypes, DialogsDataType} from "./redux-store";


// export const addNewMessageTextAC = (body: string) => {
//     return {
//         type: "NEW-MESSAGE-TEXT",
//         body: body
//     } as const
// }
export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessageBody: newMessageBody
    } as const
}

let initialState: DialogsDataType = {
    dialogs: [
        {id: 1, name: 'Bertha Jorkins'},
        {id: 2, name: 'Rubeus Hagrid'},
        {id: 3, name: 'Bellatrix Lestrange'},
        {id: 4, name: 'Luna Lovegood'}
    ],
    messages: [
        {id: 1, message: "Hello! How do you feel about going to the movies today?"},
        {id: 2, message: "Oh, great idea! I have not visited cinema for ages."}
    ],

}

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        // case "NEW-MESSAGE-TEXT": {
        //     return {...state, newMessageText: action.body};
        // }
        case "SEND-MESSAGE": {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}