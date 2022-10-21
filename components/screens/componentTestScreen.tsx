import React from 'react';
import {View} from 'react-native';
import {
    GenScreen,
    GenPrimaryButton,
    GenSecondaryButton,
    GenNumberInput,
    GenStringInput,
    GenFlatList,
    GenFlatListItem,
    GenFlatListHeader
} from '../common';

export interface ComponentTestScreenProps {
    testID?: string
}

export const wrapperContainer = (children: JSX.Element | JSX.Element[]) => (
    <View style={{marginBottom: 10}}>
        {children}
    </View>
);

const flatListData = [
    {
        id: '1',
        title: 'Product Owner',
        name: 'Eddy Brock',
        capacity: 5,
        comment: 'Difficult'
    },
    {
        id: '2',
        title: 'Scrum Master',
        name: 'Tony \'The Goods\' Maroni',
        capacity: 5,
        comment: 'Way too into Godfather'
    },
    {
        id: '3',
        title: 'Sr. Software Engineer',
        name: 'Charlie Murphy',
        capacity: 5,
        comment: 'Funny'
    },
    {
        id: '4',
        title: 'Sr. Software Engineer',
        name: 'Reese Withoutherspoon',
        capacity: 3,
        comment: 'Who?'
    },
    {
        id: '5',
        title: 'Software Engineer',
        name: 'Dave Lockheart',
        capacity: 4,
        comment: 'He just appeared.'
    },
    {
        id: '6',
        title: 'Jr. Software Engineer',
        name: "Jud Bud Ruud",
        capacity: 5,
    },
    {
        id: '7',
        title: 'Jr. Software Engineer',
        name: "Eleanor Roosevelt",
        capacity: 5,
        comment: 'Trojan Horse'
    },
    {
        id: '8',
        title: 'Intern',
        name: 'Spuds McKenzy',
        capacity: 5,
        command: 'Is Dog'
    },
];

export const ComponentTestScreen = ({testID = 'component-test-screen'}: ComponentTestScreenProps) => {
    const onBtnPress = () => console.log('Button Pressed')
    const onNumberInputChange = (input: string) => console.log(input)
    const onStringInputChange = (input: string) => console.log(input)
    const flatListKeyExtractor = (item: any) => item.id

    const buttons = wrapperContainer([
        <GenPrimaryButton key={'primary-btn'} title={'Primary'} onPress={onBtnPress}/>,
        <GenSecondaryButton key={'secondary-btn'} title={'Secondary'} onPress={onBtnPress}/>
    ]);

    const inputs = wrapperContainer([
        <GenNumberInput key={'number-input'} label={'Number Input'} placeholder={'Enter Some Numbers'} onChangeText={onNumberInputChange}/>,
        <GenStringInput key={'string-input'} label={'String Input'} placeholder={'Enter Literally Anything'} onChangeText={onStringInputChange}/>
    ]);

    const flatList = <GenFlatList data={flatListData} renderItem={GenFlatListItem} ListHeaderComponent={<GenFlatListHeader title={'Team Omega'} subtitle={'One Team, One Dream'}/>} keyExtractor={flatListKeyExtractor}/>;

    return (
        <GenScreen testID={testID}>
            {buttons}
            {inputs}
            {flatList}
        </GenScreen>
    );
}

export default ComponentTestScreen;