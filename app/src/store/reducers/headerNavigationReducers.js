import { SET_HEADER_NAVIGATION, SET_HEADER_NAVIGATION_FAIL } from './../constants/headerNavigationConstants'

export const headerNavigationReducer = (
    state = { headerNavigator: 'Dashboard' },
    action
) => {
    switch(action.type){
        case SET_HEADER_NAVIGATION:
            return {
                ...state,
                headerNavigator: action.payload
            }
        case SET_HEADER_NAVIGATION_FAIL:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state
    }
}