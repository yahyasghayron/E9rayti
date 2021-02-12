import { GET_QUIZ, GET_QUESTIONS } from '../actions/types';


const initialstate = {
    quiz: [],
    question: []
}

export default function (state = initialstate, action) {
    switch (action.type) {
        case GET_QUIZ:

            return {
                ...state,
                quiz: action.payload
            };
        case GET_QUESTIONS:

            return {
                ...state,

                question: action.payload.filter(qst => (qst.quiz.id == action.id))

            };


        default:
            return state;
    }
}