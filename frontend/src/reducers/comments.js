import { ADD_COMMENT, GET_COMMENTS } from '../actions/types.js';
import { getuser } from '../actions/auth'


const initialstate = {
    comments: [],




}

export default function (state = initialstate, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload.filter(comment => (comment.artical == action.id))

            }

        case ADD_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments]

            }
        default:
            return state;
    }

}