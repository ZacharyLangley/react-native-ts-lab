import {UserActionTypes} from "../types/users";
import {
    User,
    GetUsersRequestAction,
    GetUsersSuccessAction,
    CreateUserRequestAction,
    DeleteUserRequestAction
} from '../interfaces/users';

export const getUsersRequest = (): GetUsersRequestAction => ({
    type: UserActionTypes.GET_USERS_REQUEST
});

export const getUsersSuccess = (users: User[]): GetUsersSuccessAction => ({
    type: UserActionTypes.GET_USERS_SUCCESS,
    payload: {
        users
    }
});

export const createUserRequest = ({firstName, lastName}: User): CreateUserRequestAction => ({
    type: UserActionTypes.CREATE_USERS_REQUEST,
    payload: {
        firstName,
        lastName
    }
});

export const deleteUserRequest = (id: string): DeleteUserRequestAction => ({
    type: UserActionTypes.DELETE_USERS_REQUEST,
    payload: {
        id
    }
});