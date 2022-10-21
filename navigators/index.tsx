import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersScreen from '../components/screens/usersScreen';
import ProjectsScreen from '../components/screens/projectsScreen';
import ComponentTestScreen from '../components/screens/componentTestScreen';
import {Screens} from '../types/navigators';

export const Navigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Screens.COMPONENT_TEST_SCREEN}>
            <Stack.Screen name={Screens.COMPONENT_TEST_SCREEN} component={ComponentTestScreen} />
            <Stack.Screen name={Screens.USERS_SCREEN} component={UsersScreen} />
            <Stack.Screen name={Screens.PROJECTS_SCREEN} component={ProjectsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;