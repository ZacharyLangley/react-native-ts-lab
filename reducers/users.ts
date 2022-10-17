import {UserActionTypes} from "../types/users";
import {User, GetUsersSuccessAction} from '../interfaces/users';

export interface UserState {
    users: User[];
}

const INITIAL_STATE: UserState = {
    users: [],
}

export default function users(
    state: UserState = INITIAL_STATE,
    action: GetUsersSuccessAction
) {
    switch(action.type) {
        case UserActionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action?.payload?.users,
            }
        default:
            return state;
    }
}