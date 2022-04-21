import { combineReducers } from "redux";

import { loginReducer, loginPassworReducer, loginDataReducer } from './loginReducers'
import { getClientsReducer, getRegisterReducer } from './clientsReducers'
import { getEmployeesReducer } from './employeesReducers'
import { getProvidersReducers } from './providersReducers'
import { getProductsReducer } from './productsReducers'
import { headerNavigationReducer } from './headerNavigationReducers'
import { itemToCartReducer } from "./cartReducers";

export const reducers = combineReducers({
    loginEmail: loginReducer,
    loginPassword: loginPassworReducer,
    login: loginDataReducer,
    getClients: getClientsReducer,
    getEmployees: getEmployeesReducer,
    getProviders: getProvidersReducers,
    getProducts: getProductsReducer,
    headerNavigation: headerNavigationReducer,
    getRegister: getRegisterReducer,
    itemToCart: itemToCartReducer,
});