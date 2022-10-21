import React from 'react';
import {Input, InputProps} from "@rneui/themed";

import GenNumberInputStyles from './GenNumberInputStyles';

export interface GenNumberInputProps extends InputProps {};

const GenNumberInput: React.FC<GenNumberInputProps> = ({
    testID = 'gen-number-input',
    ...inputProps
}) => {
    return (
        <Input keyboardType={'numeric'} {...inputProps}/>
    )
}

export default GenNumberInput;