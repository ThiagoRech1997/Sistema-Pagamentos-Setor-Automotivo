import { SET_HEADER_NAVIGATION, SET_HEADER_NAVIGATION_FAIL } from './../constants/headerNavigationConstants'

export const handleHeaderNavigation = (headerNavigator) => (dispatch) => {
    try{
        dispatch({ 
            type: SET_HEADER_NAVIGATION,
            payload: headerNavigator
        })
    }catch (error){
        dispatch({
            type: SET_HEADER_NAVIGATION_FAIL,
            payload: { message: error.response.data.status_message }
        })
    }
}