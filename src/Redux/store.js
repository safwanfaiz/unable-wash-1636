
import { legacy_createStore, applyMiddleware,compose,combineReducers,} from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./App/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";
import {InternshipReducer} from "./Interships/reducer"
import {JobsReducer} from "./Job/reducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ AppReducer, AuthReducer,InternshipReducer,JobsReducer });
export const store = legacy_createStore( rootReducer,composeEnhancers(applyMiddleware(thunk)));


