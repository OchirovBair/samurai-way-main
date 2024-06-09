import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

export const rootReducer = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer)
export type StoreType = typeof store

export type RootStateType = ReturnType<typeof rootReducer>
