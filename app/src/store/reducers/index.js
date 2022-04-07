import { combineReducers } from "redux";

import { loginReducer, loginPassworReducer, loginDataReducer } from './loginReducers'
import { getClientsReducer } from './clientsReducers'
import { getEmployeesReducer } from './employeesReducers'
import { getProvidersReducers } from './providersReducers'
import { getProductsReducer } from './productsReducers'

export const reducers = combineReducers({
    loginEmail: loginReducer,
    loginPassword: loginPassworReducer,
    login: loginDataReducer,
    getClients: getClientsReducer,
    getEmployees: getEmployeesReducer,
    getProviders: getProvidersReducers,
    getProducts: getProductsReducer
});