import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {User} from '../interfaces/users';

export interface NewUserFormProps { 
    onSubmit: (user: User) => void;
}

const NewUserForm = ({onSubmit}: NewUserFormProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({firstName, lastName});
    }

    return (
        <View>
            <Text>
                {'New User Form'}
            </Text>
        </View>
    )
}

export default NewUserForm;