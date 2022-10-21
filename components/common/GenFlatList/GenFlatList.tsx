import React from 'react';
import {View, FlatList, FlatListProps} from 'react-native';
import {Divider} from '@rneui/themed'

import GenFlatListStyles from './GenFlatListStyles';

export interface GenFlatListProps extends FlatListProps<any>{}

const GenFlatList: React.FC<GenFlatListProps> = ({
    testID = 'gen-flat-list',
    data,
    ...flatListProps
}) => {
    return (
        <View style={{flex: 1}}>
            <FlatList data={data} ItemSeparatorComponent={Divider} {...flatListProps}/>
        </View>
    )
}

export default GenFlatList;