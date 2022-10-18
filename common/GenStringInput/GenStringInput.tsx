import React from 'react';
import {TextInput, TextInputProps} from 'react-native'

import GenStringInputStyles from './GenStringInputStyles';

export interface GenStringInputProps {
    testID?: string
    textInputProps: TextInputProps,
}

const GenImage: React.FC<GenStringInputProps> = ({
    testID = 'gen-string-input',
    textInputProps
}) => {
    return <TextInput {...textInputProps}/>
}

export default GenImage;