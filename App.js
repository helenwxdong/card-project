import React from 'react';
import Welcome from './components/Welcome';
import JoinGame from './components/JoinGame';
import CreateGame from './components/CreateGame';
import WaitingRoom from './components/WaitingRoom';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Outlines the navigation for the application

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" headerMode='none'>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="JoinGame" component={JoinGame} />
        <Stack.Screen name="CreateGame" component={CreateGame} />
        <Stack.Screen name="WaitingRoom" component={WaitingRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
