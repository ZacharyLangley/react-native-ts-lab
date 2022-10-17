import {UserActionTypes} from "../types/users";

export interface User {
    id?: string;
    firstName: string;
    lastName: string;
}

export interface AllUsersResponse {
    data: {
        offset: number;
        limit: number;
        total: number;
        data: User[];
    };
}

export interface GetUsersRequestAction {
    type: UserActionTypes.GET_USERS_REQUEST
}

export interface GetUsersSuccessAction {
    type: UserActionTypes.GET_USERS_SUCCESS;
    payload: {
        users: User[];
    }
}

export interface CreateUserRequestAction { 
    type: UserActionTypes.CREATE_USERS_REQUEST;
    payload: {
        firstName: string;
        lastName: string;
    }
}

export interface DeleteUserRequestAction {
    type: UserActionTypes.DELETE_USERS_REQUEST,
    payload: {
        id: string;
    }
}