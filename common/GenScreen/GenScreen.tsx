import React from 'react';
import {View, ViewProps} from 'react-native'

import GenScreenStyles from './GenScreenStyles';

export interface GenScreenProps {
    testID?: string;
    title?: string;
    children?: JSX.Element;
    viewProps: ViewProps;
}

const GenScreen: React.FC<GenScreenProps> = ({
    testID = 'gen-screen',
    children,
    viewProps
}) => {
    return (
        <View {...viewProps}>
            {children}
        </View>
    )
}

export default GenScreen;