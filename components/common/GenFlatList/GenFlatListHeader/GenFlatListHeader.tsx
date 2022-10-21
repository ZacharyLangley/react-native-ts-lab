import React from 'react';
import {View, Text} from 'react-native';
export interface GenFlatListHeaderProps {
    testID?: string
    title?: string
    subtitle?: string
}

const GenFlatListHeader: React.FC<GenFlatListHeaderProps> = ({testID, title = '', subtitle = ''}) => {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
        </View>
    )
};

export default GenFlatListHeader