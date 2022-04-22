import {
    ADD_ITEM_TO_CART, ADD_ITEM_TO_CART_FAIL, REMOVE_ITEM_TO_CART, REMOVE_ITEM_TO_CART_FAIL
} from './../constants/cartConstants'

export const itemToCartReducer = (
    state = { Items: [], amount: 0 },
    action
) => {
    switch(action.type){
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                Items: [...state.Items, action.payload],
                amount: state.amount + parseInt(action.payload.value)
            }
        case ADD_ITEM_TO_CART_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        case REMOVE_ITEM_TO_CART:
            return {
                ...state,
                Items: state.Items.filter((x, index) => index !== action.index),
                amount: state.amount - parseInt(action.payload.value)
            }
        case REMOVE_ITEM_TO_CART_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state
    }
}