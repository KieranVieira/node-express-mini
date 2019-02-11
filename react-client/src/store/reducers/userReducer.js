import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE
} from '../actions'

const initialState = {
    users: [],
    isFetchingUsers: false,
    isDeletingUser: false,
    isAddingUser: false,
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_START:
            return{
                ...state,
                isFetchingUsers: true,
                error: ''
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                users: action.payload,
                isFetchingUsers: false,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                isFetchingUsers: false,
                error: action.payload,
            }
        case DELETE_USER_START:
            return{
                ...state,
                isDeletingUser: true,
                error: ''
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                isDeletingUser: false,
                error: ''
            }
        case DELETE_USER_FAILURE:
            return{
                ...state,
                isDeletingUser: false,
                error: action.payload
            }
        case ADD_USER_START:
            return{
                ...state,
                isAddingUser: true,
                error: ''
            }
        case ADD_USER_SUCCESS:
            return{
                ...state,
                isAddingUser: false,
                error: ''
            }
        case ADD_USER_FAILURE:
            return{
                ...state,
                isAddingUser: false,
                error: action.payload
            }
        default:
            return state;
    }
}