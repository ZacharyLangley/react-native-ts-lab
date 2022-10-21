import React from 'react';
import {View, Text, ViewProps, TextProps} from 'react-native'

import GenTitleStyles from './GenTitleStyles';

export interface GenTitleProps {
    testID?: string;
    title?: string;
    viewProps: ViewProps;
    textProps: TextProps;
}

const GenTitle: React.FC<GenTitleProps> = ({
    testID = 'gen-title', 
    title,
    viewProps, 
    textProps
}) => {
    return (
        <View {...viewProps}>
            <Text {...textProps}>{title}</Text>
        </View>
    )
}

export default GenTitle;