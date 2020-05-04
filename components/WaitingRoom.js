import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.waitingContainer}
        onPress={() => navigation.navigate("JoinGame")}
        underlayColor="#fff"
      >
        <Text>IM CRTYY</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
    paddingTop:50,
  },
  waitingContainer: {
    flex: 1,
    backgroundColor: '#BCD5ED',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    borderRadius:20
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
