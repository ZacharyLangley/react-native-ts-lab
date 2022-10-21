import React from 'react';
// import {Button, ButtonProps} from 'react-native'
import {Button, ButtonProps} from "@rneui/themed";
import GenPrimaryButtonStyles from './GenPrimaryButtonStyles';

export interface GenPrimaryButtonProps extends ButtonProps {}

const GenPrimaryButton: React.FC<GenPrimaryButtonProps> = ({
    testID = 'gen-primary-button',
    title, 
    onPress,
    ...buttonProps
}) => {
    const {buttonStyle, containerStyle, titleStyle} = GenPrimaryButtonStyles; 
    return (
        <Button
            testID={testID}
            onPress={onPress}
            title={title}
            type={'solid'}
            size={'md'}
            raised
            radius={'md'}
            buttonStyle={buttonStyle}
            containerStyle={containerStyle}
            titleStyle={titleStyle}
            {...buttonProps}/>
        );
}

export default GenPrimaryButton;