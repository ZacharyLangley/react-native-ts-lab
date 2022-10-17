import {combineReducers} from 'redux';
import UsersReducer, {UserState} from './users';

export default combineReducers({
    users: UsersReducer,
});