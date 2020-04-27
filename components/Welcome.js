import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Crabs Against Hummus</Text>
        <Button title="JOIN GAME" style={styles.button}/>
        <Button title="CREATE GAME" style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    }, welcomeText:{
        fontSize:30,
        paddingBottom:30
    }, button:{
        fontSize: 20,
        padding:10
        
    }
  });