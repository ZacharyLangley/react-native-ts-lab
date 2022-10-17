import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {User} from '../interfaces/users';

export interface UserListProps {
    users: User[],
    onDeleteUser: (id: string) => void
}

const sortUsers = (currentUser: User, nextUser: User) => {
    if (currentUser.firstName > nextUser.firstName) return 1;
    if (currentUser.firstName < nextUser.firstName) return -1;
    if (currentUser.lastName > nextUser.lastName) return 1;
    if (currentUser.lastName < nextUser.lastName) return -1;
    else return 0;
}

const UserListItem = ({firstName, lastName}: User) => (
    <View>
      <Text>{firstName + ' ' + lastName}</Text>
    </View>
  );

const UsersList = ({users, onDeleteUser}: UserListProps) => {
    const sortedUsers = users.sort(sortUsers).map((user: User) => user);
    const keyExtractor = (item: any) => item.id;
    const renderItem = ({item}: any) => <UserListItem firstName={item.firstName} lastName={item.lastName}/>
    return (
        <FlatList 
            data={sortedUsers}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}

export default UsersList;