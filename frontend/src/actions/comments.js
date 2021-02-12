import axios from 'axios';
import { returnErrors } from './messages'
import { ADD_COMMENT, GET_COMMENTS } from './types';
import Cookies from 'js-cookie';
import { tokenConfig } from './auth';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


// GET_COMMENTS
export const getComments = (id) => (dispatch, getState) => {

    axios.get('/api/comments/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_COMMENTS,
                payload: res.data,
                id: id


            });
        }
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//ADD_ARTICAL
export const addComment = (comment) => (dispatch, getState) => {

    axios.post('/api/comments/', comment, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_COMMENT,
                payload: res.data
            });
        }
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
