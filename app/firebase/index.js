import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDEoGqcF5F4_dhUlmU3Q6RPO5pcsdlL4eM",
        authDomain: "todo-app-4f9f7.firebaseapp.com",
        databaseURL: "https://todo-app-4f9f7.firebaseio.com",
        storageBucket: "todo-app-4f9f7.appspot.com",
        messagingSenderId: "365176219664"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
