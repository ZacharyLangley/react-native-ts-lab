import axios, {AxiosResponse} from 'axios';

import {User, AllUsersResponse} from '../interfaces/users';

export const getUsersRequest = (): Promise<AxiosResponse<AllUsersResponse>> => {
    return axios.get('/users', {
        params: {
            limit: 1000,
        }
    });
}

export const createUserRequest = (user: User): Promise<AxiosResponse<User>> => {
    const {firstName, lastName} = user;
    return axios.post('/users', {firstName, lastName});
}

export const deleteUserRequest = (id: string): Promise<AxiosResponse<User>> => {
    return axios.delete(`/users/${id}`);
}