import {  
    GET_CLIENTS_REQUEST, GET_CLIENTS, GET_CLIENTS_FAIL,
    GET_REGISTER, GET_REGISTER_FAIL
} from './../constants/clientsConstants'

export const getClientsReducer = (
    state = { clients: [] },
    action
) => {
    switch(action.type){
        case GET_CLIENTS_REQUEST:
            return {
                ...state,
                clients: []
            }
        case GET_CLIENTS:
            return {
                ...state,
                clients: action.payload
            }
        case GET_CLIENTS_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state
    }
} 

export const getRegisterReducer = (
    state = { register: ''},
    action
) => {
    switch(action.type){
        case GET_REGISTER:
            return {
                ...state,
                register: action.payload
            }
        case GET_REGISTER_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state
    }
}