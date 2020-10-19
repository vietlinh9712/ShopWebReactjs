import * as firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyAfXRMqhGW0x8f9DDNCgYhY9DLxbtVr7Kk",
    authDomain: "shop12-2f047.firebaseapp.com",
    databaseURL: "https://shop12-2f047.firebaseio.com",
    projectId: "shop12-2f047",
    storageBucket: "shop12-2f047.appspot.com",
    messagingSenderId: "1037640007036",
    appId: "1:1037640007036:web:9447fdf41450dedbfcf8f9",
    measurementId: "G-04W71H6C95"
};
// Initialize Firebase
let fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();