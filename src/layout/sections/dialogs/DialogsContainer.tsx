import {RootStateType} from "../../../redux/types";
import {addMessageAC, changeMassageTextAC} from "../../../redux/dialogs-reducer";
import {StoreType} from "../../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type DialogsPropsType = {
    store: StoreType
}

// export const DialogsContainer = ({store}: DialogsPropsType) => {
//     const dialogs = store.getState().dialogs.dialogs
//     const messages = store.getState().dialogs.messages
//     const newMessage = store.getState().dialogs.newMessage
//
//
//     const changeMessage = (text: string) => {
//         store.dispatch(changeMassageTextAC(text))
//     }
//
//     const addMessage = () => {
//         store.dispatch(addMessageAC())
//     }
//
//     return (
//         <Dialogs
//             dialogs={dialogs}
//             messages={messages}
//             newMessage={newMessage}
//             changeMessage={changeMessage}
//             addMessage={addMessage}/>
//     );
// };
function mapStateToProps(state: RootStateType) {
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.dialogs.messages,
        newMessage: state.dialogs.newMessage

    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        changeMessage: (text: string) => {
            debugger
            dispatch(changeMassageTextAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)