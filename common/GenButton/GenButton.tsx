import React from 'react';
import {Button, ButtonProps} from 'react-native'

import GenButtonStyles from './GenButtonStyles';

export interface GenButtonProps {
    testID?: string
    buttonProps: ButtonProps,
}

const GenButton: React.FC<GenButtonProps> = ({testID = 'gen-button', buttonProps}) => {
    return <Button {...buttonProps}/>
}

export default GenButton;