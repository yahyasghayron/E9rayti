import { combineReducers } from 'redux';
import articals from './articals';
import comments from './comments';
import courses from './courses';
import chapters from './chapters';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import users from './users';
import quiz from './quiz';


export default combineReducers({
    articals,
    comments,
    courses,
    chapters,
    auth,
    errors,
    messages,
    users,
    quiz

});