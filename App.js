/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppContainer from './src/navigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/redux/reducers';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
