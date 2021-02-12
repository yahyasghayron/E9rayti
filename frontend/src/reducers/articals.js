import { GET_ARTICALS, GET_ARTICAL, ADD_ARTICAL, UPDATE_ARTICAL, DELETE_ARTICAL } from '../actions/types.js';

const initialstate = {
    articals: []

}

export default function (state = initialstate, action) {
    switch (action.type) {
        case GET_ARTICALS:
            return {
                ...state,
                articals: action.payload
            };
        case GET_ARTICAL:
            return {
                ...state,
                articals: action.payload
            }
        case ADD_ARTICAL:
            return {
                ...state,
                articals: action.payload
            }
        case DELETE_ARTICAL:
            return {
                ...state,
                articals: state.articals.filter(artical => artical.id !== action.payload)
            }
        case UPDATE_ARTICAL:
            return {
                ...state,
                articals: action.payload
            }
        default:
            return state;
    }

}