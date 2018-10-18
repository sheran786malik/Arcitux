import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCJXVdw9m4R7Uou3Rahs_6GeNmwpO7Wzj0",
    authDomain: "reactlogin-8a71b.firebaseapp.com",
    databaseURL: "https://reactlogin-8a71b.firebaseio.com",
    projectId: "reactlogin-8a71b",
    storageBucket: "reactlogin-8a71b.appspot.com",
    messagingSenderId: "1092988603216"
  };
  const fire = firebase.initializeApp(config);
  export default fire;