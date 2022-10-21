import React from 'react';
import {Button, ButtonProps} from "@rneui/themed";
import GenSecondaryButtonStyles from './GenSecondaryButtonStyles';

export interface GenSecondaryButtonProps extends ButtonProps {}

const GenSecondaryButton: React.FC<GenSecondaryButtonProps> = ({
    testID = 'gen-secondary-button',
    title, 
    onPress,
    ...buttonProps
}) => {
    const {buttonStyle, containerStyle, titleStyle} = GenSecondaryButtonStyles; 
    return (
        <Button
            testID={testID}
            onPress={onPress}
            title={title}
            type={'outline'}
            size={'md'}
            raised
            radius={'md'}
            buttonStyle={buttonStyle}
            containerStyle={containerStyle}
            titleStyle={titleStyle}
            {...buttonProps}/>
        );
}

export default GenSecondaryButton;