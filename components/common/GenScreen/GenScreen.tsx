import React from 'react';
import {View, ViewProps} from 'react-native'

import GenScreenStyles from './GenScreenStyles';

export interface GenScreenProps extends ViewProps {}

const GenScreen: React.FC<GenScreenProps> = ({
    testID = 'gen-screen',
    children,
    ...viewProps
}) => {
    const {containerStyles} = GenScreenStyles
    return (
        <View testID={testID} style={containerStyles} {...viewProps}>
            {children}
        </View>
    )
}

export default GenScreen;