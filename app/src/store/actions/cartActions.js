import {
    ADD_ITEM_TO_CART, ADD_ITEM_TO_CART_FAIL, REMOVE_ITEM_TO_CART, REMOVE_ITEM_TO_CART_FAIL
} from './../constants/cartConstants'

export const addItemToCart = (index, product) => async (dispatch) => {
    dispatch({
        type: ADD_ITEM_TO_CART,
        payload: product
    })
}

export const removeItemToCart = (index, product) => async (dispatch) => {
    dispatch({
        type: REMOVE_ITEM_TO_CART,
        payload: product,
        index
    })
}