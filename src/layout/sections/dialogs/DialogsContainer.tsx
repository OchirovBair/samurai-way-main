import {addMessageAC, changeMassageTextAC} from "../../../redux/dialogs-reducer";
import {RootStateType} from "../../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

function mapStateToProps(state: RootStateType) {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage

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