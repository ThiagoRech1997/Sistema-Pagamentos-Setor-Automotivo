import { combineReducers } from "redux";

import { loginReducer, loginPassworReducer, loginDataReducer } from './loginReducers'

export const reducers = combineReducers({
    loginEmail: loginReducer,
    loginPassword: loginPassworReducer,
    login: loginDataReducer,
});