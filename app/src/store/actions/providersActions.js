import {
    GET_PROVIDERS_REQUEST, GET_PROVIDERS, GET_PROVIDERS_FAIL
} from './../constants/providersConstants'

import api from './../../services/api'

export const handleProvidersList = () => async (dispatch) => {
    try{
        dispatch({ type: GET_PROVIDERS_REQUEST })
        const req = await api.get('providers')

        dispatch({
            type: GET_PROVIDERS,
            payload: req.data
        })
    }catch (error){
        dispatch({
            type: GET_PROVIDERS_FAIL,
            payload: { message: error.response.data.status_message }
        })
    }
}