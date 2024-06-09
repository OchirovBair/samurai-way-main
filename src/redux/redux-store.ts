import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export const rootReducer = combineReducers({
    dialogs:dialogsReducer,
    profile: profileReducer,
    sidebar: sidebarReducer
})

export const store = createStore(rootReducer)
export type StoreType = typeof store