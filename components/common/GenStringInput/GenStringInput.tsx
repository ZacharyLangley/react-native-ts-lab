import React from 'react';
import {Input, InputProps} from "@rneui/themed";

import GenStringInputStyles from './GenStringInputStyles';

export interface GenStringInputProps extends InputProps {};

const GenImage: React.FC<GenStringInputProps> = ({
    testID = 'gen-string-input',
    ...inputProps
}) => {
    return <Input {...inputProps}/>
}

export default GenImage;