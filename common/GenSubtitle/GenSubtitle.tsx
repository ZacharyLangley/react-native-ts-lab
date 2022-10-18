import React from 'react';
import {View, Text, ViewProps, TextProps} from 'react-native'

import GenSubtitleStyles from './GenSubtitleStyles';

export interface GenSubtitleProps {
    testID?: string
    title?: string
    viewProps: ViewProps,
    textProps: TextProps,
}

const GenSubtitle: React.FC<GenSubtitleProps> = ({testID = 'gen-subtitle', viewProps, textProps}) => {
    return (
        <View {...viewProps}>
            <Text {...textProps}></Text>
        </View>
    )
}

export default GenSubtitle;