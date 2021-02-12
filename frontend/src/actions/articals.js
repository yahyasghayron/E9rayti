import axios from 'axios';
import { returnErrors, createMessage } from './messages'
import { GET_ARTICALS, ADD_ARTICAL, GET_ARTICAL, UPDATE_ARTICAL } from './types';
import Cookies from 'js-cookie';
import { tokenConfig } from './auth';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// GET_ARTICALS

export const getArticals = () => (dispatch, getState) => {
    axios.get('/api/articals/', tokenConfig(getState))
        .then(res => {

            dispatch({
                type: GET_ARTICALS,
                payload: res.data
            });
        }
        ).catch(err => console.log(err));
};


//DELETE_ARTICAL


export const deleteArtical = (id) => (dispatch, getState) => {
    axios.delete(`/api/articals/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_ARTICAL,
                payload: id
            });
        }
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// GET_ARTICAL details of on artical 
export const getArtical = (id) => (dispatch, getState) => {
    axios.get(`/api/articals/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_ARTICAL,
                payload: [res.data,]
            });
        }
        ).catch(err => console.log(err));
};


//ADD_ARTICAL
export const addArtical = (artical) => (dispatch, getState) => {
    const data = artical;
    axios.post('/api/articals/', data, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ articalcreated: "Artical Created" }));
            dispatch({
                type: ADD_ARTICAL,
                payload: [res.data,]
            });
        }
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
//UPDATE artical
export const updateArtical = (artical, id) => (dispatch, getState) => {
    const data = artical;
    axios.put(`/api/articals/${id}/`, data, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ articalcreated: "Artical Updated" }));
            dispatch({
                type: UPDATE_ARTICAL,
                payload: [res.data,]
            });
        }
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};