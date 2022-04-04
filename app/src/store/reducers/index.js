import { combineReducers } from "redux";

import { loginReducer, loginPassworReducer, loginDataReducer, applicationAccessReducer } from './loginReducers'

export const reducers = combineReducers({
    loginEmail: loginReducer,
    loginPassword: loginPassworReducer,
    login: loginDataReducer,
    applicationAccess: applicationAccessReducer
});