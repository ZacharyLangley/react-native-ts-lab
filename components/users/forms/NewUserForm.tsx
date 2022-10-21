import React, {useState} from 'react';
import {View} from 'react-native';

import {User} from '../../../interfaces/users';
import {GenPrimaryButton, GenStringInput} from '../../common';
import NewUserFormStyles from './NewUserFormStyles';

export interface NewUserFormProps { 
    onSubmit: (user: User) => void;
}

const NewUserForm = ({onSubmit}: NewUserFormProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = (value: string) => {
        setFirstName(value);
    }

    const handleLastNameChange = (value: string) => {
        setLastName(value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit({firstName, lastName});
    }

    return (
        <View style={NewUserFormStyles.container}>
            <GenStringInput label={'First Name'} value={firstName} onChangeText={handleFirstNameChange}/>
            <GenStringInput label={'Last Name'} value={lastName} onChangeText={handleLastNameChange}/>
            <GenPrimaryButton title={'Add User'} onPress={handleSubmit}/>
        </View>
    )
}

export default NewUserForm;