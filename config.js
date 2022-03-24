import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDRoNJsackleC1VjYcfUB2rNHk5aKe2JZM",
    authDomain: "project-71-71b7b.firebaseapp.com",
    projectId: "project-71-71b7b",
    storageBucket: "project-71-71b7b.appspot.com",
    messagingSenderId: "688115367380",
    appId: "1:688115367380:web:e601ac5eea3cbf2a342a41"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
