import {
    GET_EMPLOYEES_REQUEST, GET_EMPLOYEES, GET_EMPLOYEES_FAIL
} from './../constants/employeesConstants'

export const getEmployeesReducer = (
    state = { employees: [] },
    action
) => {
    switch(action.type){
        case GET_EMPLOYEES_REQUEST:
            return {
                ...state,
                employees: []
            }
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            }
        case GET_EMPLOYEES_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state
    }
}