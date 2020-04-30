import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TextInput
} from "react-native";

export default function JoinGame() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Enter your 6 digit game code</Text>
      <TextInput
      style={styles.textInput}
      />
      <TextInput
      style={styles.textInput}
      placeholder="Nickname"
      placeholderTextColor="black"
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => this.submitSuggestion(this.props)}
        underlayColor="#fff"
      >
        <Text style={styles.buttonText}>JOIN GAME</Text>
      </TouchableHighlight>
    </View>
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
