import {
    GET_USER
} from '../actions/types';


const initialstate = {

    users: null

};
export default function (state = initialstate, action) {
    switch (action.type) {
        case GET_USER:

            return {
                ...state,
                users: action.payload
            }

        default:
            return state;
    }
}