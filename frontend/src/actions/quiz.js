import axios from 'axios';
import { GET_QUIZ, GET_QUESTIONS } from './types'



export const getQuiz = (id) => dispatch => {
    axios.get(`/api/quiz/${id}`)
        .then(res => {
            dispatch({
                type: GET_QUIZ,
                payload: [res.data,]

            });
        }
        ).catch(err => console.log(err));
};
export const getquestion = (id) => dispatch => {
    axios.get(`/api/question`)
        .then(res => {
            dispatch({
                type: GET_QUESTIONS,
                payload: res.data,
                id: id


            });
        }
        ).catch(err => console.log(err));
};