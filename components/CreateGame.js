import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TextInput,
  Alert
} from "react-native";
import FirebaseHandler from "../firebase/FirebaseHandler"

// Asks user to input a 6 digit game code and their nickname to join the game

export default function CreateGame({ navigation }) {
  const [name, setName] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Enter your nickname</Text>
      <TextInput
      style={styles.textInput}
      placeholder="Nickname"
      placeholderTextColor="black"
      value={name}
      onChangeText={text => setName(text)}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => createGame(name, navigation)}
        underlayColor="#fff"
      >
        <Text style={styles.buttonText}>CREATE GAME</Text>
      </TouchableHighlight>
    </View>
  );
}

// Checks if the game code the user has entered exists, if so, checks if user name already exists and adds user to the game
// and takes them to the waiting room

async function createGame(name, navigation){
  let firebaseHandler = new FirebaseHandler();
  let gameKey = await firebaseHandler.createGame();
  navigation.navigate("WaitingRoom", {
      name : name,
      gameID : gameKey
  })
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
  welcomeText: {
    fontSize: 30,
    paddingBottom: 30,
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#2374BF",
    borderRadius: 50,
    width: 200,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
     height: 40,
     width: 200,
     backgroundColor: 'lightgray',
     borderWidth: 1,
     marginTop: 20,
     marginBottom: 20,
     borderRadius: 20,
     paddingLeft: 20,
     paddingRight: 20,
  }
});