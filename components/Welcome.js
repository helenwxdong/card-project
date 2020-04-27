import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Crabs Against Hummus</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => this.submitSuggestion(this.props)}
        underlayColor="#fff"
      >
        <Text style={styles.buttonText}>JOIN GAME</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => this.submitSuggestion(this.props)}
        underlayColor="#fff"
      >
        <Text style={styles.buttonText}>CREATE GAME</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
