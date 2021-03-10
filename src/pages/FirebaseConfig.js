import firebase from "firebase";
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBZpjiIykrjbknca-9-enPv0dykpFF-fe8",
    authDomain: "porady-2e319.firebaseapp.com",
    projectId: "porady-2e319",
    storageBucket: "porady-2e319.appspot.com",
    messagingSenderId: "550560111749",
    appId: "1:550560111749:web:606a5cb67ea646126a9dec"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };



