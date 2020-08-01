import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Alert
} from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default function WaitingRoom({ navigation }) {
  const players = ["Helen", "Maddy", "Silly"];
  Alert.alert(players)
  return (
    <View style={styles.container}>

      <View style={styles.waitingContainer}
        underlayColor="#fff">
        <Text>YANNY'S GAME</Text>
        <TouchableHighlight
        style={styles.gameCode}
        underlayColor="#fff"
      >
        <Text style={styles.buttonText}>Game code: xxxxxxxxx</Text>
      </TouchableHighlight>
      <Text>Max number of players: 10000</Text>

      <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={players} />
          {
            players.map((rowData, index) => (
              <TableWrapper key={index} >
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} />
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>



        </View>

      <TouchableHighlight
        style={styles.button}
        onPress={() => this.submitSuggestion(this.props)}
        underlayColor="#fff"
      >
        <Text style={styles.buttonText}>START GAME</Text>
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
  gameCode: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 50,
    width: 200,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
