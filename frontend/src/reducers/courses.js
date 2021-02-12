import { ADD_COURS, GET_COURSES, GET_COURS } from '../actions/types.js';

const initialstate = {
    courses: []

}

export default function (state = initialstate, action) {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload.filter(cours => (cours.public))

            }

        case ADD_COURS:
            return {
                ...state,
                courses: [...state.courses, action.payload, action.submited]

            }
        case GET_COURS:
            return {
                ...state,
                courses: action.payload
            }
        default:
            return state;
    }

}