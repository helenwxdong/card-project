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
      firebase.initializeApp(firebaseConfig);
    }
    test(){
      firebase.database().ref("games/203456/players/").update({
        Helen : 5
      });
    }
}
  