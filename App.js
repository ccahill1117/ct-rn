import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

import ToolsContainer from './containers/ToolsContainer'

const Stack = createNativeStackNavigator();

const store = configureStore({});


function App() {
  return (
    <Provider store={store}>
      <ToolsContainer/>
    </Provider>
  );
}

export default App;
