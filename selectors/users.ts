import {createSelector} from 'reselect';

const getUserState = (state: any) => state?.users;

export const userListSelector = createSelector(
    getUserState,
    (userState) => userState?.users
);