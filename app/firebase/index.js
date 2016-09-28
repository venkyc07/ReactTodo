import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDu-6YKUH69oZm_e-V1Jnh2qjyZRBs0_OE",
      authDomain: "penguin-todo-app.firebaseapp.com",
      databaseURL: "https://penguin-todo-app.firebaseio.com",
      storageBucket: "penguin-todo-app.appspot.com",
      messagingSenderId: "567399484214"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
