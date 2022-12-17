import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { reducer as AppReducer } from "./App/reducer"
import { reducer as AuthReducer } from "./Auth/reducer"
import thunk from "redux-thunk"
const RootReducer = combineReducers({AppReducer,AuthReducer})
export const store = legacy_createStore(RootReducer,applyMiddleware(thunk))