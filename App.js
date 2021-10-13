import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'


import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const Stack = createNativeStackNavigator();



function App() {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  );
}

export default App;
