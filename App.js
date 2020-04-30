import React from 'react';
import Welcome from './components/Welcome';
import JoinGame from './components/JoinGame';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" headerMode='none'>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="JoinGame" component={JoinGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
