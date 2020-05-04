import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKIHgjsUOg08ZswCUopiyXkV_rgkr8E_o",
    authDomain: "cardgame-97d6e.firebaseapp.com",
    databaseURL: "https://cardgame-97d6e.firebaseio.com",
    projectId: "cardgame-97d6e",
    storageBucket: "cardgame-97d6e.appspot.com",
    appId: "1:237981200908:android:c72d0a73bab54de88ab429",
  };

export default class FirebaseHandler {
    constructor() {
      if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
    }

    // Adds name as a player to the game specified
    addPlayer(name){
      firebase.database().ref("games/203456/players").update({
        [name] : 1
      })
    }

    // Checks if gameID is a valid game in the database
    async checkGame(gameID){
      const ref = firebase.database().ref("games/" + gameID);
      const snapshot = await ref.once("value");
      return snapshot.exists();
    }
}
  