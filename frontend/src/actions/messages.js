import { CREATE_MESSAGE, GET_ERRORS } from './types';

// CREATE MESSAGES
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};

// get errors 

export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    };
};