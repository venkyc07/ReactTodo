import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDu-6YKUH69oZm_e-V1Jnh2qjyZRBs0_OE",
    authDomain: "penguin-todo-app.firebaseapp.com",
    databaseURL: "https://penguin-todo-app.firebaseio.com",
    storageBucket: "penguin-todo-app.appspot.com",
    messagingSenderId: "567399484214"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '0.0.17'
  },
  isRunning: true,
  user: {
    name: 'Penguin',
    age: 25
  }
});

// ************ Arrays *********
var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.push({
  text: 'My Todo'
});
notesRef.push({
  text: 'My Todo 2'
});
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
// var newNotesRef = notesRef.push();
// newNotesRef.set({
//   text: 'Go for a Run'
// });
var newNotesRef = notesRef.push({
  text: 'Go for a Run...! '
});
console.log('Todo id', newNotesRef.key);

//******************************

//Set Method
//************************************
// firebase.database().ref().set({
//   appName: 'Todo Application'
// })
// firebaseRef.child('app').set({
//   name: 'React Todo App'
// });
// firebaseRef.child('user').set({
//   name: 'React Todo App'
// });
//**********************************

//***********UPDATE METHOD*******************
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todp Application'
// });
// firebaseRef.child('app').update({
//   name:'Todo Applclication'
// })
//***************************************

//************ DELETE METHOD *******************

//firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0.0',
//   name: null
// });

//*********************************

//************* Fetching & Navigating ***********

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire Database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value', e);
// });
// firebaseRef.on('value', (snapshot) => {
//   console.log('got value', snapshot.val());
// });
//
// firebaseRef.off();
// firebaseRef.update({isRunning: false});

// var logData = (snapshot) => {
//    console.log('got value', snapshot.val());
//  };
// firebaseRef.on('value', logData);
//
// firebaseRef.off('value', logData);
// firebaseRef.update({isRunning: false})

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('user ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({
//   name: 'PenguinCRM'
// });
//
// firebaseRef.child('app').update({
//   name: 'something else'
// });

//***********************************
