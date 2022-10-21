import React from 'react';
import {View, Text, ListRenderItemInfo} from 'react-native';

export interface GenFlatListItemProps {
    id: string | number;
    title?: string;
    name?: string;
    capacity?: number;
    comment?: string
}

const GenFlatListColumn = (text?: number | string) => {
    return (
        <View style={{flex: 1}}>
            <Text style={{fontSize: 12}}>{text}</Text>
        </View>
    )
}

const GenFlatListItem: React.FC<ListRenderItemInfo<GenFlatListItemProps>> = ({item}) => {
    return (
        <View style={{flex: 1, flexDirection: 'row', paddingBottom: 5}}>
            {GenFlatListColumn(item.title)}
            {GenFlatListColumn(item.name)}
            {GenFlatListColumn(item.capacity)}
            {GenFlatListColumn(item.comment)}
            {GenFlatListColumn(item.title)}
        </View>
    )
}

export default GenFlatListItem;