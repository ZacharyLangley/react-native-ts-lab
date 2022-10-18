import React from 'react';
import {TextInput, TextInputProps} from 'react-native'

import GenNumberInputStyles from './GenNumberInputStyles';

export interface GenNumberInputProps {
    testID?: string
    textInputProps: TextInputProps,
}

const GenImage: React.FC<GenNumberInputProps> = ({
    testID = 'gen-number-input',
    textInputProps
}) => {
    return <TextInput {...textInputProps}/>
}

export default GenImage;