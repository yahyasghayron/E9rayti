import axios from 'axios';
import { GET_CHAPTERS, GET_CHAPTER, ADD_CHAPTER, DELETE_CHAPTER } from './types';
import Cookies from 'js-cookie';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// GET_ARTICALS

export const getChapters = (id) => dispatch => {
    axios.get('/api/chapters')
        .then(res => {
            dispatch({
                type: GET_CHAPTERS,
                payload: res.data,
                id: id

            });
        }
        ).catch(err => console.log(err));
};


//DELETE_ARTICAL


export const deleteChapter = (id) => dispatch => {
    axios.delete(`/api/chapters${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_CHAPTER,
                payload: id
            });
        }
        ).catch(err => console.log(err));
};

// GET_ARTICAL details of on artical 
export const getChapter = (id) => dispatch => {
    axios.get(`/api/chapters/${id}/`)
        .then(res => {
            dispatch({
                type: GET_CHAPTER,
                payload: [res.data,]
            });
        }
        ).catch(err => console.log(err));
};


//ADD_ARTICAL
export const addChapter = (chapter) => dispatch => {
    const data = chapter;
    axios.post('/api/chapters/', data)
        .then(res => {
            dispatch({
                type: ADD_CHAPTER,
                payload: [res.data,]

            });
        }
        ).catch(err => console.log(err));
};
