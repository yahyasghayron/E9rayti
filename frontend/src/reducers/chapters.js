
import { GET_CHAPTERS, GET_CHAPTER, ADD_CHAPTER, DELETE_CHAPTER } from '../actions/types';

const initialstate = {
    chapters: []

}

export default function (state = initialstate, action) {
    switch (action.type) {
        case GET_CHAPTERS:
            return {
                ...state,
                chapters: action.payload.filter(chapter => (chapter.cours == action.id))

            }

        case ADD_CHAPTER:
            return {
                ...state,
                chapters: [...state.chapters, action.payload]

            }
        default:
            return state;
    }

}