import React from 'react';
import {View, Text, ListRenderItemInfo} from 'react-native';

export interface GenFlatListItemProps {
    id: string | number;
    title?: string;
    name?: string;
    capacity?: number;
    comment?: string
}

const GenFlatListItem: React.FC<ListRenderItemInfo<GenFlatListItemProps>> = ({item}) => {
    console.log(item)
    return (
        <View style={{flex: 1, flexDirection: 'row', paddingBottom: 5}}>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 12}}>{item.title}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 12}}>{item.name}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 12}}>{item.capacity}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 12}}>{item.comment}</Text>
            </View>
        </View>
    )
}

export default GenFlatListItem;