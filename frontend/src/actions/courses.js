import axios from 'axios';
import { returnErrors } from './messages'
import { GET_COURSES, GET_COURS, ADD_COURS } from './types';
import Cookies from 'js-cookie';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// GET_ARTICALS

export const getCourses = () => dispatch => {
    axios.get('/api/courses/')
        .then(res => {
            dispatch({
                type: GET_COURSES,
                payload: res.data
            });
        }
        ).catch(err => console.log(err));
};


//DELETE_ARTICAL


export const deleteCours = (id) => dispatch => {
    axios.delete(`/api/courses/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_COURS,
                payload: id
            });
        }
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// GET_cours details of on cours
export const getCours = (id) => dispatch => {
    axios.get(`/api/courses/${id}/`)
        .then(res => {
            dispatch({
                type: GET_COURS,
                payload: [res.data,]
            });
        }
        ).catch(err => console.log(err));
};


//ADD_Cours
export const addCours = (artical) => dispatch => {
    const data = artical;
    axios.post('/api/courses/', data)
        .then(res => {
            dispatch({
                type: ADD_COURS,
                payload: [res.data,],
                submited: true
            });
        }
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
