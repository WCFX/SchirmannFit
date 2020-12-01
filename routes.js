import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store, persistor } from './src/store';

import Home from './src/views/Home';

const { Navigator, Screen } = createStackNavigator();

export default function routes() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigator>
            <Screen name="Home" component={Home} />
          </Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
