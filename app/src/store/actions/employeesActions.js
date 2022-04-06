import {
    GET_EMPLOYEES_REQUEST, GET_EMPLOYEES, GET_EMPLOYEES_FAIL
} from './../constants/employeesConstants'

import api from './../../services/api'

export const handleEmployeesList = () => async (dispatch) => {
    try{
        dispatch({ type: GET_EMPLOYEES_REQUEST })

        const req = await api.get('employees')

        dispatch({
            type: GET_EMPLOYEES,
            payload: req.data
        })
    }catch (error){
        dispatch({
            type: GET_EMPLOYEES_FAIL,
            payload: { message: error.response.data.status_message }
        })
    }
}