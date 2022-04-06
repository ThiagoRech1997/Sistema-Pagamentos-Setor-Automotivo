import {  
    GET_CLIENTS_REQUEST, GET_CLIENTS, GET_CLIENTS_FAIL
} from './../constants/clientsConstants'

import api from './../../services/api'

export const handleClientsList = () => async (dispatch) => {
    try{
        dispatch({ type: GET_CLIENTS_REQUEST })

        const req = await api.get('clients')

        dispatch({
            type: GET_CLIENTS,
            payload: req.data
        })
    }catch (error){
        dispatch({
            type: GET_CLIENTS_FAIL,
            payload: { message: error.response.data.status_message }
        })
    }
}