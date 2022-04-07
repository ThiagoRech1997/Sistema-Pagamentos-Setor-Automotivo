import {
    GET_PRODUCTS_REQUEST, GET_PRODUCTS, GET_PRODUCTS_FAIL
} from './../constants/productsConstants'

export const getProductsReducer = (
    state = { products: [] },
    action
) => {
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                products: []
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state
    }
}