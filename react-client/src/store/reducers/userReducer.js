import {
    //actions
} from '../actions'

const initialState = {
    users: [],
    isFetchingUsers: false,
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}