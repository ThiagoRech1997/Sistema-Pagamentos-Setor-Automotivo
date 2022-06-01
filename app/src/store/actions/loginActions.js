import { LOGIN_EMAIL, LOGIN_EMAIL_FAIL, 
    LOGIN_PASSWORD, LOGIN_PASSWORD_FAIL,
    LOGIN_DATA_REQUEST, LOGIN_DATA, LOGIN_DATA_FAIL
} from './../constants/loginConstants'

import api from './../../services/api'

export const handleLoginEmail = (email) => (dispatch) => {
    try{
        dispatch({ type: LOGIN_EMAIL })
        dispatch({
            type: LOGIN_EMAIL,
            payload: email,
        })
    }catch (error) {
        dispatch({
            type: LOGIN_EMAIL_FAIL,
            payload: { message: error.response.data.status_message },
        })
    }
}

export const handleLoginPassword = (password) => (dispatch) => {
    try{
        dispatch({ type: LOGIN_PASSWORD })
        dispatch({
            type: LOGIN_PASSWORD,
            payload: password,
        })
    }catch (error){
        dispatch({
            type: LOGIN_PASSWORD_FAIL,
            payload: { message: error.response.data.status_message },
        })
    }
}

export const handleLogin = (email, password) => async (dispatch) => {
    try{
        dispatch({ type: LOGIN_DATA_REQUEST})
        const res = await api.post('users/auth', { email, password })

        if(res.data.access === "clients"){
            var name = await api.get('clients')
            name.filter((x, index) => x.user_id === res.data.id)
        }

        localStorage.setItem("userToken", res.data.access)
        localStorage.setItem("userName", "Administrator")
        
        dispatch({
            type: LOGIN_DATA,
            payload: res.data
        })
    }catch (error){
        dispatch({
            type: LOGIN_DATA_FAIL,
            payload: { message: error.response.data.status_message }
        })
    }
}