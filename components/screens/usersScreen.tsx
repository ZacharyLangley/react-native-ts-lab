import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getUsersRequest, createUserRequest, deleteUserRequest} from '../../actions/users';
import {User} from '../../interfaces/users';
import {userListSelector} from '../../selectors/users';

import {GenScreen} from '../common';
import UsersList from '../users/UsersList';
import NewUserForm from '../users/forms/NewUserForm';

export const UsersScreen = () => {    const dispatch = useDispatch()
    const users = useSelector(userListSelector);
  
    useEffect(() => {
      dispatch(getUsersRequest());
    }, [dispatch]);
  
    const handleSubmit = ({firstName, lastName}: User) => {
      dispatch(createUserRequest({firstName, lastName}))
    }
  
    const handleDelete = (id: string) => {
      dispatch(deleteUserRequest(id))
    }

    return (
        <GenScreen>
            <NewUserForm onSubmit={handleSubmit}/>
            <UsersList users={users} onDeleteUser={handleDelete}/>
        </GenScreen>
    );
}

export default UsersScreen;