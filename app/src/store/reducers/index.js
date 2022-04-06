import { combineReducers } from "redux";

import { loginReducer, loginPassworReducer, loginDataReducer } from './loginReducers'
import { getClientsReducer } from './clientsReducers'
import { getEmployeesReducer } from './employeesReducers'

export const reducers = combineReducers({
    loginEmail: loginReducer,
    loginPassword: loginPassworReducer,
    login: loginDataReducer,
    getClients: getClientsReducer,
    getEmployees: getEmployeesReducer
});