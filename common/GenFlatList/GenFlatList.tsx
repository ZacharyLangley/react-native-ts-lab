import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

import GenFlatListStyles from './GenFlatListStyles';

export interface GenFlatListProps {
    testID?: string;
    flatListProps: FlatListProps<unknown>;
}

const GenFlatList: React.FC<GenFlatListProps> = ({
    testID = 'gen-flat-list',
    flatListProps
}) => {
    return <FlatList {...flatListProps}/>
}

export default GenFlatList;