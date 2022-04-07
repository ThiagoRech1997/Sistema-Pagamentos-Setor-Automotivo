import {
    GET_PROVIDERS_REQUEST, GET_PROVIDERS, GET_PROVIDERS_FAIL
} from './../constants/providersConstants'

export const getProvidersReducers = (
    state = { providers: [] },
    action
) => {
    switch(action.type){
        case GET_PROVIDERS_REQUEST:
            return {
                ...state,
                providers: []
            }
        case GET_PROVIDERS:
            return {
                ...state,
                providers: action.payload
            }
        case GET_PROVIDERS_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state
    }
}