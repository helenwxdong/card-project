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
      <Stack.Navigator initialRouteName="Home" headerMode='none'>
        <Stack.Screen
          name="Home"
          component={Welcome}
        />
        <Stack.Screen name="JoinGame" component={JoinGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:50,
    paddingRight:50
  },
});
