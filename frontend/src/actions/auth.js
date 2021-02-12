import axios from 'axios';
import { returnErrors } from './messages'

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_USER,

} from './types';

// ***************************************************check the token and load the user 
export const loadUser = () => (dispatch, getState) => {
    //USER Loading 
    dispatch({ type: USER_LOADING });


    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}
//**********get user details */
export const getuser = () => (dispatch, getState) => {


    axios.get(`/api/auth/user/list`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_USER,
                payload: res.data
            });

        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));

        })
}



//*****************************************************************LOGIN USER 
export const login = (username, password) => dispatch => {


    // headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    // Request body
    const body = JSON.stringify({ username, password })

    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status));
            dispatch({
                type: LOGIN_FAIL
            });
        });
}
//******************************************************************register  
export const register = ({ username, first_name, last_name, email, password }) => dispatch => {


    // headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    // Request body
    const body = JSON.stringify({ username, password, email, first_name, last_name })

    axios.post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
        });
}

// **********************************************************logout user
export const logout = () => (dispatch, getState) => {



    axios
        .post("/api/auth/logout/", null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,

            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));

        })
}

// *******************************************************
// setup config with token -helper func 
export const tokenConfig = getState => {
    //Get token from state
    const token = getState().auth.token;

    // headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    // if token , add to headers config 
    if (token) {
        config.headers['Authorization'] = `token ${token}`;

        return config;
    }
}
