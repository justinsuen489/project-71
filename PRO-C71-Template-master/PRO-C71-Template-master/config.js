import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCKraOCpS99Rzi1O4TWquZBdp6vMmtnx60",
    authDomain: "project-71-8bc23.firebaseapp.com",
    projectId: "project-71-8bc23",
    storageBucket: "project-71-8bc23.appspot.com",
    messagingSenderId: "830336029434",
    appId: "1:830336029434:web:b71aa4cc456a4cc6fb2f43"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
