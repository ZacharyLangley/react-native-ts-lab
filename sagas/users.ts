import {takeEvery, takeLatest, call, put, fork, take} from 'redux-saga/effects';
import {getUsersSuccess} from '../actions/users';
import {UserActionTypes} from '../types/users';
import {getUsersRequest, createUserRequest, deleteUserRequest} from '../requests/users';
import {
    AllUsersResponse,
    CreateUserRequestAction,
    DeleteUserRequestAction
} from '../interfaces/users';

function* getUsers() {
    try {
        const response: AllUsersResponse = yield call(getUsersRequest);
        yield put(getUsersSuccess(response.data.data));
    } catch(error) {
        console.log(error);
    }
}

function* watchGetUsersRequest(){
    yield takeEvery(UserActionTypes.GET_USERS_REQUEST, getUsers);
}

function* createUser({payload}: CreateUserRequestAction) {
    try {
        yield call(createUserRequest, payload);
        yield call(getUsers);
    } catch (error) {
        console.log(error);
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(UserActionTypes.CREATE_USERS_REQUEST, createUser);
}

function* deleteUser({payload}: DeleteUserRequestAction) {
    try {
        yield call(deleteUserRequest, payload.id);
        yield call(getUsers);
    } catch (error) {
        console.log(error);
    }
}

function* watchDeleteUserRequest(){
    while (true) {
        const action = yield take(UserActionTypes.DELETE_USERS_REQUEST);
        yield call(deleteUser, action);
    }
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest),
];

export default usersSagas;