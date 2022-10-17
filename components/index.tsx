import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';

import {getUsersRequest, createUserRequest, deleteUserRequest} from '../actions/users';
import {User} from '../interfaces/users';
import {userListSelector} from '../selectors/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

const Root = ({}) => {
    const dispatch = useDispatch()
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
        <View>
            <NewUserForm onSubmit={handleSubmit}/>
            <UsersList users={users} onDeleteUser={handleDelete}/>
        </View>
    )
}

export default connect(null, null)(Root);
