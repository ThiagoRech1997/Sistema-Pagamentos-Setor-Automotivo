import { LOGIN_EMAIL, LOGIN_EMAIL_FAIL, 
    LOGIN_PASSWORD, LOGIN_PASSWORD_FAIL,
    LOGIN_DATA_REQUEST, LOGIN_DATA, LOGIN_DATA_FAIL
} from './../constants/loginConstants'

export const loginReducer = (
    state = { email: '' },
    action
) => {
    switch(action.type){
        case LOGIN_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case LOGIN_EMAIL_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state
    }
}

export const loginPassworReducer = (
    state = { password: '' },
    action
) => {
    switch(action.type){
        case LOGIN_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case LOGIN_PASSWORD_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state
    }
}

export const loginDataReducer = (
    state = { login: [] },
    action
) => {
    switch(action.type){
        case LOGIN_DATA_REQUEST:
            return {
                ...state,
                login: []
            }
        case LOGIN_DATA:
            return {
                ...state,
                login: action.payload
            }
        case LOGIN_DATA_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state
    }
}
