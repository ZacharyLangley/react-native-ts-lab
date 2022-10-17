import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import reducers from './reducers';
import rootSaga from './sagas';
import UsersScreen from './screens/usersScreen';
import ProjectsScreen from './screens/projectsScreen';

interface AppProps { 
  title?: string
}


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const Stack = createNativeStackNavigator();

export default function App({title='Custom Title'}: AppProps) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Users">
          <Stack.Screen name="Users" component={UsersScreen} />
          <Stack.Screen name="Projects" component={ProjectsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
