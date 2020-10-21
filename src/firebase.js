import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAikDGlTqSKxy4SH8niMtqhiFylxtb40QY",
    authDomain: "zzzzzzz-89040.firebaseapp.com",
    databaseURL: "https://zzzzzzz-89040.firebaseio.com",
    projectId: "zzzzzzz-89040",
    storageBucket: "zzzzzzz-89040.appspot.com",
    messagingSenderId: "200416012857",
    appId: "1:200416012857:web:b3b9c3592b3bac963f7be8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
export {db}