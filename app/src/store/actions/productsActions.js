import {
    GET_PRODUCTS_REQUEST, GET_PRODUCTS, GET_PRODUCTS_FAIL
} from './../constants/productsConstants'

import api from './../../services/api'

export const handleProductsList = () => async (dispatch) => {
    try{
        dispatch({ type: GET_PRODUCTS_REQUEST })
        const req = await api.get('products')

        dispatch({
            type: GET_PRODUCTS,
            payload: req.data
        })
    }catch (error){
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: { message: error.response.data.status_message }
        })
    }
}