import axios from 'axios';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import reducers from './reducers';
import rootSaga from './sagas';
import Navigator from './navigators';

interface AppProps {}

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default function App({}: AppProps) {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
