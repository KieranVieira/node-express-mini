import axios from 'axios';

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsers = () => dispatch => {
    dispatch({ type:FETCH_USERS_START })
    axios.get('http://localhost:4000/api/users')
        .then(res => dispatch({ type:FETCH_USERS_SUCCESS, payload:res.data }))
        .catch(err => dispatch({ type:FETCH_USERS_FAILURE, payload:err }))
}

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteUser = userId => dispatch => {
    dispatch({ type:DELETE_USER_START })
    axios.delete(`http://localhost:4000/api/users/${userId}`)
        .then(res => dispatch({ type:DELETE_USER_SUCCESS, payload:res.data }))
        .catch(err => dispatch({ type:DELETE_USER_FAILURE, payload:err }))
}