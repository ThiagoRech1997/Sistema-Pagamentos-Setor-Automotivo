import {
    ADD_ITEM_TO_CART, ADD_ITEM_TO_CART_FAIL, 
    REMOVE_ITEM_TO_CART, REMOVE_ITEM_TO_CART_FAIL,
    MAKE_SELE, MAKE_SELE_FAIL,
} from './../constants/cartConstants'

import api from './../../services/api'

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

export const handleSele = (products, amount, numberInstallments, client) => async (dispatch) => {
    const sales = await api.post('sales', { client })

    for(var i = 0; i < products.lenght; i++){}
    const productSales = await api.post('productSale', { products, sales })
    
    for(var i = 0; i < numberInstallments; i++){}
    const billsToReceive = await api.post('billsToReceive', { numberInstallments: numberInstallments, totalValue: amount, sales, installment_value: (amount/numberInstallments) })

}